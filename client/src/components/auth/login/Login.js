import React, {useState} from 'react'
import classes from "./login.module.css"
import {useNavigate} from "react-router-dom"
import {links} from "../../../links/links"
import {useDispatch} from "react-redux"
import {loginApi} from "../../../axios/usersApi"

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const isLoginFormValid = () => email && password

    const submitLoginHandler = (e) => {
        e.preventDefault()
        if (isLoginFormValid()) {
            dispatch(loginApi(email, password))
            navigate(links.base)
        } else {
            alert('Введите все данные')
        }
    }

    return (
        <div className={classes.container}>
            <form
                className={classes.content_reg}
                onSubmit={submitLoginHandler}
            >
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button
                    className={classes.btn_auth }
                    type="submit">
                    <span>войти</span>
                </button>
            </form>
        </div>
    )
}

export default Login