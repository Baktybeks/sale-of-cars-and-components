import React, {useEffect} from 'react'
import classes from "./headerCar.module.css"
import logo from "../../assets/images/logo.png"
import {Link, useNavigate} from "react-router-dom"
import {links} from "../../links/links"
import {getUsers} from "../../axios/usersApi"
import {setIsAuth, setUser} from "../../store/slices/userSlice"
import {useDispatch, useSelector} from "react-redux"

function HeaderCar() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isAuth, user} = useSelector(state => state.userReducer)

    const logOut = () => {
        dispatch(setIsAuth(false))
        dispatch(setUser(''))
    }
    const admin = () => {
        navigate(links.admin)
    }
    const userCabinet = () => {
        navigate(`/user/${user.id}/`)
    }

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])


    return (
        <header className={`${classes.header} ${classes.container}`}>
            <div className={classes.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <nav className={classes.menu}>
                <ul>
                    <li className={classes.menu_item}>
                        <Link to={links.base}>Главная</Link>
                    </li>
                    <li className={classes.menu_item}>
                        <Link to={links.cars}>Автомобили</Link>
                    </li>
                    <li className={classes.menu_item}>
                        <Link to={links.accessories}>Комплектующие</Link>
                    </li>
                    {isAuth
                        ?
                        <>
                            <li className={classes.menu_item}
                                onClick={userCabinet}>
                                Кабинет
                            </li>
                            {user.role === "ADMIN"
                                ?
                                <li className={classes.menu_item}
                                    onClick={admin}>
                                    Adminka
                                </li>
                                :
                                ''
                            }
                            <li className={classes.menu_item}
                                onClick={logOut}>
                                Выход
                            </li>
                        </>
                        :
                        <>
                            <li className={classes.menu_item}>
                                <Link to={links.signup}>Регистрация</Link>
                            </li>
                            <li className={classes.menu_item}>
                                <Link to={links.login}>Войти</Link>
                            </li>
                        </>
                    }
                </ul>
            </nav>
        </header>

    )
}

export default HeaderCar