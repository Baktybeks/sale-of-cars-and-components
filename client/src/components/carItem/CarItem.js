import React from 'react'
import classes from "./carItem.module.css"
import gear from "../../assets/images/gear.png"
import wheel from "../../assets/images/wheel.png"
import belt from "../../assets/images/belt.png"
import {useNavigate} from "react-router-dom"

function CarItem( {car} ) {
    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(`/cars/${car.id}/`)
    }

    return (
        <div className={classes.car_item}>
            <div className={classes.car_item_image}>
                <img src={process.env.REACT_APP_API_URL + car.image} alt="image"/>
            </div>
            <div className={classes.car_item_title}>{car.name}</div>
            <div className={classes.car_item_info}>
                <div className={classes.car_item_point}>
                    <img src={gear} alt="gear"/>
                    <div>Привод</div>
                    <div>{car.gear}</div>
                </div>
                <div className={classes.car_item_point}>
                    <img src={wheel} alt="wheel"/>
                    <div>Двигатель</div>
                    <div>{car.engine} л.с.</div>
                </div>
                <div className={classes.car_item_point}>
                    <img src={belt} alt="belt"/>
                    <div>Кол-во мест</div>
                    <div>{car.places}</div>
                </div>
            </div>
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

export default CarItem