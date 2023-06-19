import {configureStore} from "@reduxjs/toolkit"
import userReducer from './slices/userSlice'
import preloaderReducer from './slices/preloaderSlice'
import carsReducer from './slices/carsSlice'
import errorReducer from './slices/errorSlice'
import accessoryReducer from './slices/accessorySlice'
import applicationReducer from './slices/applicationSlice'
import orderReducer from './slices/orderSlice'


export const store = configureStore({
    reducer: {
        userReducer,
        preloaderReducer,
        errorReducer,
        carsReducer,
        accessoryReducer,
        applicationReducer,
        orderReducer,
    }
})