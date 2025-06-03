import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authslice'
import roomReducer from './slices/roomslice'

export const store = configureStore({
    reducer:{
       auth:authReducer,
       room:roomReducer
    }
})