import {$api, } from "./index"
import {setError} from "../store/slices/errorSlice"
import {preloader} from "../store/slices/preloaderSlice"
import {setApplications} from "../store/slices/applicationSlice"

export const addApplicationApi = (name, phone, car ) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/application/', {name, phone, car})
            if (data.status === 200) {
                alert('Вы успешно добавили')
            }
        } catch (e) {
            alert(e)
        }
    }
}

export const getApplicationApi = () => {
    return async (dispatch) => {
        dispatch(preloader(true))
        try {
            const {data} = await $api.get('api/application/')
            dispatch(setApplications(data))
        } catch (e) {
            dispatch(setError(e.message))
        } finally {
            dispatch(preloader(false))
        }
    }
}