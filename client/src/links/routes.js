import {links} from "./links"
import {Navigate} from "react-router-dom"

import MainPage from "../pages/mainPage/MainPage"
import Signup from "../components/auth/sighup/Signup"
import Login from "../components/auth/login/Login"
import UserPage from "../pages/userPage/UserPage"
import AdminPage from "../pages/adminPage/AdminPage"
import AccessoriesPage from "../pages/accessoriesPage/AccessoriesPage"
import AccessoryPage from "../pages/accessoryPage/AccessoryPage"
import CarsPage from "../pages/carsPage/CarsPage"
import CarPage from "../pages/carPage/CarPage"

export const authRoutes = [
    {
        path: links.admin,
        element: <AdminPage/>
    },
    {
        path: links.user + '/:id/',
        element: <UserPage/>
    },
]

export const publicRoutes = [
    {
        path: links.login,
        element: <Login/>
    },
    {
        path: links.base,
        element: <MainPage/>
    },
    {
        path: links.signup,
        element: <Signup/>
    },
    {
        path: links.accessories + '/:id/',
        element: <AccessoryPage/>
    },
    {
        path: links.accessories,
        element: <AccessoriesPage/>
    },
    {
        path: links.cars + '/:id/',
        element: <CarPage/>
    },
    {
        path: links.cars,
        element: <CarsPage/>
    },
    {
        path: '*',
        element: <Navigate to='/'/>
    },
]