import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {useNavigate, useParams} from "react-router-dom"
import classes from "./carPage.module.css"
import {addUserCarApi, getCarApi} from "../../axios/carsApi"

function CarPage() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()

    const {car} = useSelector(state => state.carsReducer)
    const {user} = useSelector(state => state.userReducer)
    const {error} = useSelector(state => state.errorReducer)
    const {preloader} = useSelector(state => state.preloaderReducer)

    const addUserCar = () => {
        if (user.id) {
            dispatch(addUserCarApi(car.id, user.id))
        } else {
            alert("Авторизуйтесь")
        }
    }

    useEffect(() => {
        dispatch(getCarApi(id))
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
                                    <img src={process.env.REACT_APP_API_URL + car.image} alt={car.image}
                                         className={classes.card__content_top_img}/>
                                    <div className={classes.card__content_top_info}>
                                        <div className={classes.card__content_top_title}>{car.name} </div>
                                        <div className={classes.card__content_top_box}>
                                            <div className={classes.title}>Информация:</div>
                                            <div className={classes.subtitle}>Привод: <span>{car.gear}</span></div>
                                            <div className={classes.subtitle}>Двигатель: <span>{car.wheel} л.с.</span></div>
                                            <div className={classes.subtitle}>Кол-во мест: <span>{car.belt}</span></div>
                                            <div className={classes.subtitle}>Цена: <span>{car.price}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.card__divider}>
                                <div className={classes.card__divider_line}></div>
                            </div>
                            <div className={classes.card__description}>
                                <div className={classes.card__description_title}>Описание</div>
                                <div className={classes.card__description_info}
                                     dangerouslySetInnerHTML={{__html: car.description}}
                                />
                            </div>
                            <div className={classes.card__divider}>
                                <div className={classes.card__divider_line}></div>
                            </div>
                            <button
                                className={classes.subtitle}
                                onClick={addUserCar}>Добавить в кабинет
                            </button>
                        </>
            }
        </div>
    )
}

export default CarPage