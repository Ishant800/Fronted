import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authredux'
export const store = configureStore({
    reducer:{
        auth:authReducer
    }
})