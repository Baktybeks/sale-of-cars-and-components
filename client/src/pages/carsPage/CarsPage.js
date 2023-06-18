import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getCarsApi} from "../../axios/carsApi"
import classes from "./carsPage.module.css"
import CarItem from "../../components/carItem/CarItem"

function CarsPage() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCarsApi())
    }, [dispatch])

    const {cars} = useSelector(state => state.carsReducer)

    const {preloader} = useSelector(state => state.preloaderReducer)

    return (
        <section className={classes.car} id="cars">
            <div className={classes.container}>
                <h2 className={classes.sub_title}>Автомобили</h2>
                <div className={classes.car_items}>
                    {preloader ?
                        <h1>Loading......</h1>
                        :
                        cars.map(car => <CarItem car={car}/> )
                    }
                </div>
            </div>
        </section>
    )
}

export default CarsPage