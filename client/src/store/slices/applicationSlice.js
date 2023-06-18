import {createSlice} from "@reduxjs/toolkit"

const applicationSlice = createSlice({
    name: 'applicationSlice',
    initialState: {
        applications: [],
    },
    reducers: {
        setApplications: (state, action) => {
            state.applications = action.payload
        }
    }
})

export const {setApplications} = applicationSlice.actions

export default applicationSlice.reducer