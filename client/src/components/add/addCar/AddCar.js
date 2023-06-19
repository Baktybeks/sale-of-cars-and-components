import React, {useState} from 'react'
import classes from "./addCar.module.css"
import {useDispatch} from "react-redux"
import {addCarApi} from "../../../axios/carsApi"

function AddCar() {

    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [gear, setGear] = useState('')
    const [wheel, setWheel] = useState('')
    const [belt, setBelt] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')

    const isFormValid = () => name && description && gear && wheel && belt && price

    const submitHandler = (e) => {
        e.preventDefault()
        if (!image) {
            return alert("Добавьте картинку")
        }
        if (!isFormValid()) {
            return alert("Введите все данные")
        }
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('gear', gear)
        formData.append('wheel', wheel)
        formData.append('belt', belt)
        formData.append('price', price)
        formData.append('image', image)
        dispatch(addCarApi(formData))
    }

    const reset = () => {
        setName('')
        setDescription('')
        setGear('')
        setWheel('')
        setBelt('')
        setImage('')
        setPrice('')
    }


    return (
        <div className={classes.container_content}>
            <section className={classes.container_form_internships}>
                <div className={classes.head_form}>
                    <h2>
                        Добавление машины
                    </h2>
                </div>
                <form
                    onSubmit={submitHandler}
                    className={classes.one_block}>
                    <input
                        type="file"
                        name="image_file"
                        id="add_img"
                        accept="/image/*, .png, .jpg, .gif, .web"
                        onChange={e => setImage(e.target.files[0])}
                    />
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Название машины"/>
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Описание машины"/>
                    <input
                        type="text"
                        name="gear"
                        value={gear}
                        onChange={e => setGear(e.target.value)}
                        placeholder="Привод"/>
                    <input
                        type="text"
                        name="wheel"
                        value={wheel}
                        onChange={e => setWheel(e.target.value)}
                        placeholder="Двигатель"/>
                    <input
                        type="text"
                        name="belt"
                        value={belt}
                        onChange={e => setBelt(e.target.value)}
                        placeholder="Кол-во мест"/>
                    <input
                        type="text"
                        name="price"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        placeholder="цена"/>
                    <button
                        className={classes.btn_send}
                        type="submit">
                        <span>Отправить</span>
                    </button>
                    <button className={classes.btn_send}
                            onClick={reset}
                    >
                        Сбросить
                    </button>
                </form>
            </section>
        </div>
    )
}

export default AddCar