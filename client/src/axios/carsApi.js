import {$api,} from "./index"
import {setError} from "../store/slices/errorSlice"
import {preloader} from "../store/slices/preloaderSlice"
import {setCar, setCars, setUserCars} from "../store/slices/carsSlice"
import {setAccessories, setAccessory, setUserAccessories} from "../store/slices/accessorySlice"

export const addCarApi = (formData) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/car/', formData)
            if (data.status === 200) {
                alert('Вы успешно добавили')
                // dispatch(setModalActive(false))
            }
        } catch (e) {
            alert(e)
        }
    }
}


export const addAccessoryApi = (formData) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/accessory/', formData)
            if (data.status === 200) {
                alert('Вы успешно добавили')
                // dispatch(setModalActive(false))
            }
        } catch (e) {
            alert(e)
        }
    }
}

export const addUserCarApi = (carId, userId) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/user_car/', {carId, userId})
            if (data.status === 200) {
                alert('Вы успешно добавили')
                // dispatch(setModalActive(false))
            }
        } catch (e) {
            alert(e)
        }
    }
}

export const addUserAccessoryApi = (accessoryId, userId) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/user_accessory/', {accessoryId, userId})
            if (data.status === 200) {
                alert('Вы успешно добавили')
                // dispatch(setModalActive(false))
            }
        } catch (e) {
            alert(e)
        }
    }
}


export const getCarsApi = (limit = 200, offset = 1) => {
    return async (dispatch) => {
        dispatch(preloader(true))
        try {
            const {data} = await $api.get('api/car/', {params: {limit, offset}})
            dispatch(setCars(data))
        } catch (e) {
            dispatch(setError(e.message))
        } finally {
            dispatch(preloader(false))
        }
    }
}

export const getCarApi = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/car/${id}`)
            dispatch(setCar(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}

export const getAccessoriesApi = (limit = 200, offset = 1) => {
    return async (dispatch) => {
        dispatch(preloader(true))
        try {
            const {data} = await $api.get('api/accessory/', {params: {limit, offset}})
            dispatch(setAccessories(data))
        } catch (e) {
            dispatch(setError(e.message))
        } finally {
            dispatch(preloader(false))
        }
    }
}

export const getAccessoryApi = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/accessory/${id}`)
            dispatch(setAccessory(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}

export const getUserCarsApi = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/user_car/user/${id}`)
            dispatch(setUserCars(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}

export const getUserAccessoriesApi = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/user_accessory/user/${id}`)
            dispatch(setUserAccessories(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}
