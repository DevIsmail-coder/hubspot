import { configureStore } from "@reduxjs/toolkit";
import ismailReducer from './features'

const store = configureStore({
    reducer: {
        user: ismailReducer
    }
})


export default store