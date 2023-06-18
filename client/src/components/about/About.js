import React from 'react'
import classes from "./about.module.css"
import {useNavigate} from "react-router-dom"

function About() {
    const navigate = useNavigate()

    const clickHandler = () => {
        navigate('/cars')
    }

    return (
        <section className={classes.main}>
            <div className={classes.container}>
                <div className={classes.main_info}>
                    <h1 className={classes.main_title}>Аренда премиальных автомобилей</h1>
                    <div className={classes.main_text}>В нашем клубе имеется солидная коллекция спортивных автомобилей — от
                        достаточно
                        распространенных серийных машин до настоящего гоночного эксклюзива. Воспользуйтесь уникальной
                        возможностью побывать за рулем настоящей легенды и узнать, на что она способна за пределами
                        гоночной
                        трассы!
                    </div>
                    <div className={classes.main_action}>
                        <button
                            onClick={clickHandler}
                            className={classes.button} id="main-action">Посмотреть автомобили</button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About
