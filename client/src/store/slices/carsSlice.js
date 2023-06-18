import {createSlice} from "@reduxjs/toolkit"

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState: {
        cars: [],
        car: {},
        userCars: [],
        userCar: {},
    },
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload
        },
        setCar: (state, action) => {
            state.car = action.payload
        },
        setUserCars: (state, action) => {
            state.userCars = action.payload
        },
        setUserCar: (state, action) => {
            state.userCar = action.payload
        },
    }
})

export const {setCars, setCar, setUserCars, setUserCar} = carsSlice.actions

export default carsSlice.reducer