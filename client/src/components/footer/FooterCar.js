import React from 'react'
import classes from "./footerCar.module.css"
import logo from "../../assets/images/logo.png"


function FooterCar() {

    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.logo}>
                    <img src={logo} alt="logo"/>
                </div>
                <div className={classes.rights}>Все права защищены</div>
            </div>
        </footer>
    )
}

export default FooterCar