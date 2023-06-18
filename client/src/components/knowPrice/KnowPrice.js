import React, {useState} from 'react'
import classes from "./knowPrice.module.css"
import rolls from "../../assets/images/rolls.png"
import {useDispatch} from "react-redux"
import {addApplicationApi} from "../../axios/applicationApi"

function KnowPrice() {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [car, setCar] = useState('')


    const isFormValid = () => name && phone && car

    const submitHandler = (e) => {
        e.preventDefault()
        if (isFormValid()) {
            dispatch(addApplicationApi(name, phone, car))
        } else {
            alert('Введите все данные')
        }
    }

    return (
        <section className={classes.price} id="price">
            <div className={classes.container}>
                <h2 className={classes.sub_title}>Узнать цену и забронировать</h2>
                <div className={classes.price_text}>Заполните данные, и мы перезвоним вам для уточнения всех деталей
                    бронирования
                </div>
                <form
                    onSubmit={submitHandler}
                    action="client/src/components/knowPrice/KnowPrice" className={classes.price_form}
                >
                    <input
                        type="text"
                        className={classes.price_input}
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Ваше имя"/>
                    <input
                        type="text"
                        className={classes.price_input}
                        id="phone"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="Ваш телефон"/>
                    <input
                        type="text"
                        className={classes.price_input}
                        id="car"
                        value={car}
                        onChange={e => setCar(e.target.value)}
                        placeholder="Автомобиль, который вас интересует"/>
                    <button
                        className={classes.button}
                        type="submit">
                        <span>Узнать цену</span>
                    </button>
                </form>
                <img src={rolls} alt="Rolls" className={classes.price_image}/>
            </div>
        </section>
    )
}

export default KnowPrice