import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {useNavigate, useParams} from "react-router-dom"
import {addUserAccessoryApi, getAccessoryApi,} from "../../axios/carsApi"
import classes from "./accessoryPage.module.css"


function AccessoryPage() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()

    const {accessory} = useSelector(state => state.accessoryReducer)
    const {user} = useSelector(state => state.userReducer)
    const {error} = useSelector(state => state.errorReducer)
    const {preloader} = useSelector(state => state.preloaderReducer)

    const addUserAccessory = () => {
        if (user.id) {
            dispatch(addUserAccessoryApi(accessory.id, user.id))
        } else {
            alert("Авторизуйтесь")
        }
    }

    useEffect(() => {
        dispatch(getAccessoryApi(id))
    }, [dispatch, id])

    return (
        <div className={`container ${classes.card}`}>
            <button onClick={() => navigate('/')} className={classes.card__back}>
                <span className={classes.card__back_arrow_left}></span> Назад
            </button>
            {
                preloader
                    ?
                    <h1 className={classes.loading}>Loading......</h1>
                    :
                    error
                        ?
                        <p>{error}</p>
                        :
                        <>
                            <div className={classes.card__content}>
                                <div className={classes.card__content_top}>
                                    <img src={process.env.REACT_APP_API_URL + accessory.image} alt={accessory.image}
                                         className={classes.card__content_top_img}/>
                                    <div className={classes.card__content_top_info}>
                                        <div className={classes.card__content_top_title}>{accessory.title} </div>
                                        <div className={classes.card__content_top_box}>
                                            <div className={classes.title}>Информация:</div>
                                            <div className={classes.subtitle}>Описание: <span>{accessory.description}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.card__divider}>
                                <div className={classes.card__divider_line}></div>
                            </div>
                            <button
                                className={classes.btn_acc}
                                onClick={addUserAccessory}>Добавить в кабинет
                            </button>
                        </>
            }
        </div>
    )
}

export default AccessoryPage