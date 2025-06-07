import { createSlice } from "@reduxjs/toolkit";
import { Addreview, getReviews } from "../thunk/reviewthunk";

const reviewslice = createSlice({
    name:"review",
    initialState:{
        review:[],
        loading:false,
         error:null 
    },

    reducers:{
        addreview:(state,action)=>{
          state.review = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(Addreview.pending,(state)=>{
            state.loading = true
        })

        .addCase(Addreview.fulfilled,(state,action)=>{
           state.loading = false
           state.review = action.payload
        })

        .addCase(getReviews.pending,(state)=>{
            state.loading = false
        })

        .addCase(getReviews.fulfilled,(state,action)=>{
            state.loading = true
            state.review = action.payload
        })
    }
   
})

export default reviewslice.reducer;