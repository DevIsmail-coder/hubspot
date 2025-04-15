import { configureStore } from "@reduxjs/toolkit";
import hubspotReducer from './features'

const store = configureStore({
    reducer: {
        hubspot: hubspotReducer
    }
})


export default store