import { configureStore } from "@reduxjs/toolkit";
import hubspotReducer from './features'
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, hubspotReducer)

const store = configureStore({
    reducer: {
        hubspot: persistedReducer
    }
})


export default store