import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authslice'
import roomReducer from './slices/roomslice'
import reviewReducer from './slices/reviewslice'
export const store = configureStore({
    reducer:{
       auth:authReducer,
       room:roomReducer,
       review:reviewReducer
    }
})