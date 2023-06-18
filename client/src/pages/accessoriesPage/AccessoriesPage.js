import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getAccessoriesApi} from "../../axios/carsApi"
import classes from "./accessoriesPage.module.css"
import AccessoryItem from "../../components/accessoryItem/AccessoryItem"
import {useNavigate} from "react-router-dom"

function AccessoriesPage() {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getAccessoriesApi())
    }, [dispatch])

    const {accessories} = useSelector(state => state.accessoryReducer)
    const {preloader} = useSelector(state => state.preloaderReducer)

    return (
        <section className={classes.car} id="cars">
            <div className={classes.container}>
                <h2 className={classes.sub_title}>Комплектующие</h2>
                <div className={classes.car_items}>
                    {preloader ?
                        <h1>Loading......</h1>
                        :
                        accessories.map(accessory => <AccessoryItem accessory={accessory}/> )
                    }
                </div>
            </div>
        </section>
    )
}


export default AccessoriesPage