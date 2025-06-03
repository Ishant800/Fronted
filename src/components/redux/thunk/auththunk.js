import { createAsyncThunk } from "@reduxjs/toolkit";
import { myDetails, userdetailsUpdate, userLogin, userSignup} from "../services/authservices";

export const loginuser = createAsyncThunk('auth/login',async(data,thunkAPI)=>{
    try {
        console.log(data)
        const res = await userLogin(data)
        console.log(res.data.acesstoken)
    
        return res.data.acesstoken
          
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message)
    }
})

export const usersignup = createAsyncThunk('auth/signup',async(data,thunkAPI)=>{
    try {
        const res = await userSignup(data)
        console.log(res.data)
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message)
    }
})


export const mydetails = createAsyncThunk('auth/logout',async(_,thunkAPI)=>{
    try {
        const res = await myDetails()
        
        return res.data.mydetails
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message)
    }
})


export const userupdateDetails = createAsyncThunk('auth/updatedetails',async(data,thunkAPI)=>{
    try {
        const res = await userdetailsUpdate(data)
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message)
    }
})