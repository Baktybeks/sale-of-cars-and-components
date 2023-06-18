import React, {useState} from 'react'
import classes from "./addAccessory.module.css"
import {useDispatch} from "react-redux"
import {addAccessoryApi} from "../../../axios/carsApi"

function AddAccessory() {
    const dispatch = useDispatch()

    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const isFormValid = () => title && description

    const submitHandler = (e) => {
        e.preventDefault()
        if (!image) {
            return alert("Добавьте картинку")
        }
        if (!isFormValid()) {
            return alert("Введите все данные")
        }
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('image', image)
        dispatch(addAccessoryApi(formData))
    }

    return (
        <div className={classes.container_content}>
            <section className={classes.container_form_internships}>
                <div className={classes.head_form}>
                    <h2>
                        Добавление комплектующих
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
                        name="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Названия"/>
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Описание"/>
                    <button
                        className={classes.btn_send}
                        type="submit">
                        <span>Отправить</span>
                    </button>
                </form>
            </section>
        </div>
    )
}

export default AddAccessory