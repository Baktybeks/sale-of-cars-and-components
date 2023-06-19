import {$api, } from "./index"
import {preloader} from "../store/slices/preloaderSlice"
import {setError} from "../store/slices/errorSlice"
import {setAccessoryOrder, setCarOrder} from "../store/slices/orderSlice"

export const addCarOrderApi = (carId, userId) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/car_order/', {carId, userId})
            if (data.status === 200) {
                alert('Спасибо за обращение, мы с вами свяжемся')
            }
        } catch (e) {
            alert(e)
        }
    }
}

export const addAccessoryOrderApi = (accessoryId, userId) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/accessory_order/', {accessoryId, userId})
            if (data.status === 200) {
                alert('Спасибо за обращение, мы с вами свяжемся')
            }
        } catch (e) {
            alert(e)
        }
    }
}

export const getCarOrderApi = () => {
    return async (dispatch) => {
        dispatch(preloader(true))
        try {
            const {data} = await $api.get('api/car_order/')
            dispatch(setCarOrder(data))
        } catch (e) {
            dispatch(setError(e.message))
        } finally {
            dispatch(preloader(false))
        }
    }
}


export const getAccessoryOrderApi = () => {
    return async (dispatch) => {
        dispatch(preloader(true))
        try {
            const {data} = await $api.get('api/accessory_order/')
            dispatch(setAccessoryOrder(data))
        } catch (e) {
            dispatch(setError(e.message))
        } finally {
            dispatch(preloader(false))
        }
    }
}