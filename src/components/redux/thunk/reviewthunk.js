import { createAsyncThunk } from "@reduxjs/toolkit";
import { getreviews, reviewAdd } from "../services/review";
import { showErrorToast, showSuccessToast } from "../../toastutils/toast";

export const Addreview = createAsyncThunk("review/add",async({id,data},thunkAPI)=>{
 try {
    const res = await reviewAdd(id,data);
    if(res) showSuccessToast("Thanks for your reviews.")
    return res.data.review
 } catch (error) {
    showErrorToast("failed to submit reviews")
    return thunkAPI.rejectWithValue(error.response?.data || error.message)
 }
    
})

export const getReviews = createAsyncThunk("review/get",async(id,thunkAPI)=>{
try {
    const review = await getreviews(id)
    return review.data.payload
} catch (error) {
    showErrorToast("failed to load data")
    return thunkAPI.rejectWithValue(error.response?.data || error.message)
} 

})