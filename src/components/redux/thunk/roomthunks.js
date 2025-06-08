import { createAsyncThunk } from "@reduxjs/toolkit";
import { addRoomApi, deleteRoomApi, getproperties, roomdetailsApi, roomsApi, updateRooms } from "../services/roomservices";
import { showErrorToast, showInfoToast, showSuccessToast } from "../../toastutils/toast";
export const fetchRooms = createAsyncThunk("room/fetch",async(_,thunkAPI)=>{
try {
    const res = await roomsApi()
    console.log(res.data.rooms)
    return res.data.rooms
    
} catch (error) {
    showErrorToast("server error")
    return thunkAPI.rejectWithValue(error.response?.data || error.message)
}
})


export const addrooms = createAsyncThunk("room/add",async(data,thunkAPI)=>{
    try {
       const res = await addRoomApi(data)
         showSuccessToast("room added sucessfully")
       return res.data.room
    } catch (error) {
        showErrorToast("failed to add room")
        return thunkAPI.rejectWithValue(error.response?.data || error.message)
    }
})

export const deleteroom = createAsyncThunk("room/delete",async(id,thunkAPI)=>{
    try {

        const res = await deleteRoomApi(id)
        showInfoToast("room deleted sucessfully")
        return res.data

    } catch (error) {
        showErrorToast("failed to delete room")
        return thunkAPI.rejectWithValue(error.response?.data || error.message)
    }
})


export const fetchroomdetails = createAsyncThunk("room/details",async(id,thunkAPI)=>{
    try {
        const res = await roomdetailsApi(id)
        return res.data.existroom
    } catch (error) {
        showErrorToast("no room found")
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


export const getProperties = createAsyncThunk("roo/ownproperties",async(thunkAPI)=>{
    try {
        const res = await getproperties()
        return res.data.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message)
    }
})