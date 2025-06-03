import { createAsyncThunk } from "@reduxjs/toolkit";
import { addRoomApi, deleteRoomApi, roomdetailsApi, roomsApi, updateRooms } from "../services/roomservices";
export const fetchRooms = createAsyncThunk("room/fetch",async(_,thunkAPI)=>{
try {
    const res = await roomsApi()
    console.log(res.data.rooms)
    return res.data.rooms
    
} catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message)
}
})


export const addrooms = createAsyncThunk("room/add",async(data,thunkAPI)=>{
    try {
       const res = await addRoomApi(data)
       return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message)
    }
})

export const deleteroom = createAsyncThunk("room/delete",async(id,thunkAPI)=>{
    try {
        const res = await deleteRoomApi(id)
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message)
    }
})


export const fetchroomdetails = createAsyncThunk("room/details",async(id,thunkAPI)=>{
    try {
        const res = await roomdetailsApi(id)
        return res.data.existroom
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message)
    }
})


export const updaterooms = createAsyncThunk("room/details",async(id,data,thunkAPI)=>{
    try {
        const res = await updateRooms(id,data)
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message)
    }
})