import React, {useState} from 'react'
import classes from "./signup.module.css"
import {links} from "../../../links/links"
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import {register} from "../../../axios/usersApi"

const passwordRegExp = /^.{5,40}$/
const userRegExp = /^.{3,50}$/

function Signup() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const submitRegHandler = async (e) => {
        e.preventDefault()
        if (!userRegExp.test(login)) {
            return alert("Ваш Username должен содержать не менее 3 символов")
        }
        if (!userRegExp.test(email)) {
            return alert("Ваш Nickname должен содержать не менее 3 символов")
        }
        if (!passwordRegExp.test(password)) {
            return alert("Ваш пароль должен содержать не менее 5 символов")
        }

        dispatch(register(email, password, login))
        navigate(links.base)
        setLogin('')
        setPassword('')
        setEmail('')
    }

    return (
        <div className={classes.container}>
            <form
                className={classes.content_reg}
                onSubmit={submitRegHandler}
            >
                <input
                    type="text"
                    name="login"
                    placeholder="Логин"
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                />
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
                    <span>зарегистрироваться</span>
                </button>
            </form>
        </div>
    )
}

export default Signup
