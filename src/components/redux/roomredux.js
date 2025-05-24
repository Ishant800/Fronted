import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const api = "http://localhost:5000/room"
//for roomadd
export const addRoom = createAsyncThunk('room/addRoom',async(data,thunkAPI)=>{
    try {
        const token = localStorage.getItem("user")

        const res = await axios.post(`${api}/addroom`,data,{
                headers: {
                Authorization:`Bearer ${token}`,
            },
        });
        return res.data
    } catch (error) {
       
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
})

//for roomdata fetch
export const fetchRoom = createAsyncThunk('room/fetchRoom',async(thunkAPI)=>{
    try {
        const res = await axios.get(`${api}/rooms`)
        return res.data.rooms
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data|| error.message)
    }
}) 


const roomSlice = createSlice({
    name:"room",
    initialState:{
        room:[],
        loading:false,
        error:null

    },
    reducers:{
         addRooms:(state,action)=>{
            state.room = action.payload
         },
         deleteRoom:(state,action)=>{
        
        }
    },
   
    extraReducers:(builder)=>{
        //for room adder
        builder.addCase(addRoom.pending,(state)=>{
            state.loading = true
            state.error = null
        })
        builder.addCase(addRoom.fulfilled,(state,action)=>{
            state.loading= false,
            state.room = action.payload
        })
        builder.addCase(addRoom.rejected,(state,action)=>{
            state.loading= false,
            state.error = action.payload
            
        })


        //for all roomdata
        builder.addCase(fetchRoom.pending,(state)=>{
            state.loading = true,
            state.error = null
        })

        builder.addCase(fetchRoom.fulfilled,(state,action)=>{
            state.loading = false
            state.room = action.payload
            
        })
        builder.addCase(fetchRoom.rejected,(state,action)=>{
           state.error = action.payload
        })
    }

})
export const {addRooms,deleteRoom} = roomSlice.actions
export default roomSlice.reducer;
