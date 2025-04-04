import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {}
}

const features = createSlice({
    name: "hubspot",
    initialState,
    reducers: {
        userdata: (state, {payload}) => {
            state.user = payload
        }
    }
})


export default features.reducer