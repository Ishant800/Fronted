import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authredux'
import roomReducer from './roomredux'
export const store = configureStore({
    reducer:{
        auth:authReducer,
        room:roomReducer
    }
})