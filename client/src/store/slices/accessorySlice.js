import {createSlice} from "@reduxjs/toolkit"

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState: {
        userAccessories: [],
        userAccessory: {},
        accessories: [],
        accessory: {},
    },
    reducers: {
        setAccessories: (state, action) => {
            state.accessories = action.payload
        },
        setAccessory: (state, action) => {
            state.accessory = action.payload
        },
        setUserAccessories: (state, action) => {
            state.userAccessories = action.payload
        },
        setUserAccessory: (state, action) => {
            state.userAccessory = action.payload
        },
    }
})

export const {setAccessories, setAccessory,setUserAccessories,setUserAccessory} = carsSlice.actions

export default carsSlice.reducer