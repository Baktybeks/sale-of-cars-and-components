import {createSlice} from "@reduxjs/toolkit"

const orderSlice = createSlice({
    name: 'orderSlice',
    initialState: {
        carOrder: [],
        accessoryOrder: [],
    },
    reducers: {
        setCarOrder: (state, action) => {
            state.carOrder = action.payload
        },
        setAccessoryOrder: (state, action) => {
            state.accessoryOrder = action.payload
        },
    }
})

export const {setCarOrder, setAccessoryOrder} = orderSlice.actions

export default orderSlice.reducer