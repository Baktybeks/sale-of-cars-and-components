import React, {useEffect} from 'react'
import classes from "./adminPage.module.css"
import {useDispatch, useSelector} from "react-redux"
import {getUsers} from "../../axios/usersApi"
import AddCar from "../../components/add/addCar/AddCar"
import AddAccessory from "../../components/add/addAccessory/AddAccessory"
import {getApplicationApi} from "../../axios/applicationApi"
import {getAccessoryOrderApi, getCarOrderApi} from "../../axios/orderApi"

function AdminPage() {
    const dispatch = useDispatch()
    const {applications} = useSelector(state => state.applicationReducer)
    const {carOrder, accessoryOrder} = useSelector(state => state.orderReducer)

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getCarOrderApi())
        dispatch(getAccessoryOrderApi())
        dispatch(getApplicationApi())
    }, [dispatch])

    return (
        <div className={classes.container_content}>
            <AddCar/>
            <AddAccessory/>

            <h1 >Заявки</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Имя</th>
                    <th>телефон</th>
                    <th>интерес</th>
                </tr>
                </thead>
                <tbody>
                {applications.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.car}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <h1 >Заказ машины</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Имя</th>
                    <th>название машины</th>
                    <th>цена</th>
                </tr>
                </thead>
                <tbody>
                {carOrder.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.user.login}</td>
                        <td>{item.car.name}</td>
                        <td>{item.car.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <h1 >Заказ комплектующих</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Имя</th>
                    <th>название машины</th>
                    <th>цена</th>
                </tr>
                </thead>
                <tbody>
                {accessoryOrder.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.user.login}</td>
                        <td>{item.accessory.title}</td>
                        <td>{item.accessory.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminPage