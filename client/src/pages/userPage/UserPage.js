import React, {useEffect} from 'react'
import classes from "./userPage.module.css"
import {useDispatch, useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import {getUserAccessoriesApi, getUserCarsApi} from "../../axios/carsApi"

function UserPage() {

    const dispatch = useDispatch()

    const {id} = useParams()

    const {userCars} = useSelector(state => state.carsReducer)
    const {userAccessories} = useSelector(state => state.accessoryReducer)

    console.log(userAccessories)
    useEffect(() => {
        dispatch(getUserCarsApi(id))
        dispatch(getUserAccessoriesApi(id))

    }, [dispatch, id])


    return (
        <div className={classes.container_content}>
            <div className="container">
                <h1 >Личный кабинет </h1>
                <h1 >Машины</h1>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>описание</th>
                        <th>цена</th>
                    </tr>
                    </thead>
                    <tbody>
                    {userCars.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.car.name}</td>
                            <td>{item.car.description}</td>
                            <td>{item.car.price}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <h1 >Комплектующие</h1>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Название</th>
                        <th>описание</th>
                    </tr>
                    </thead>
                    <tbody>
                    {userAccessories.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.accessory.title}</td>
                            <td>{item.accessory.description}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserPage