import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getAccessoriesApi, getCarsApi} from "../../axios/carsApi"
import classes from "./ourCars.module.css"
import CarItem from "../carItem/CarItem"
import {useNavigate} from "react-router-dom"
import AccessoryItem from "../accessoryItem/AccessoryItem"

function OurCars() {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const clickHandler = () => {
        navigate('/cars')
    }

    const clickHandlerAccessories = () => {
        navigate('/accessories')
    }
    const {accessories} = useSelector(state => state.accessoryReducer)

    useEffect(() => {
        dispatch(getAccessoriesApi(3,1))
        dispatch(getCarsApi(3, 1))
    }, [dispatch])

    const {cars} = useSelector(state => state.carsReducer)

    const {preloader} = useSelector(state => state.preloaderReducer)

    return (
        <>
            <section className={classes.car} id="cars">
                <div className={classes.container}>
                    <h2 className={classes.sub_title}>Автомобили</h2>
                    <div className={classes.car_items}>
                        {preloader ?
                            <h1>Loading......</h1>
                            :

                            cars.map(car => <CarItem car={car}/>)
                        }
                    </div>
                    <button className={`${classes.button} ${classes.car_button}`}
                            onClick={clickHandler}
                    >
                        Все автомобили
                    </button>
                </div>
            </section>
            <section className={classes.car} id="cars">
                <div className={classes.container}>
                    <h2 className={classes.sub_title}>Комплектующие</h2>
                    <div className={classes.car_items}>
                        {preloader ?
                            <h1>Loading......</h1>
                            :
                            accessories.map(accessory => <AccessoryItem accessory={accessory}/>)
                        }
                    </div>
                    <button className={`${classes.button} ${classes.car_button}`}
                            onClick={clickHandlerAccessories}
                    >
                        Все комплектующие
                    </button>
                </div>
            </section>
        </>
    )
}

export default OurCars