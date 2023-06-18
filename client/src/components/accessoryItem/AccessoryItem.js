import React from 'react'
import classes from "./accessoryItem.module.css"
import {useNavigate} from "react-router-dom"

function AccessoryItem( {accessory} ) {

    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(`/accessories/${accessory.id}/`)
    }

    return (
        <div className={classes.car_item}>
            <div className={classes.car_item_image}>
                <img src={process.env.REACT_APP_API_URL + accessory.image} alt="image"/>
            </div>
            <div className={classes.car_item_title}>{accessory.title}</div>
            <div className={classes.car_item_action}>
                <button className={`${classes.button} ${classes.car_button}`}
                onClick={clickHandler}
                >
                    Подробнее
                </button>
            </div>
        </div>
    )
}

export default AccessoryItem