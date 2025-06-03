import {createSlice} from '@reduxjs/toolkit'
import { addrooms, deleteroom, fetchroomdetails, fetchRooms, } from '../thunk/roomthunks'

const roomSlice = createSlice({
 name:"room",
 initialState:{
    rooms:[],
    userRooms:[],
    loading:false,
    error:null      
 },  

   reducers:{},
   extraReducers:(builder)=>{
    builder
    //feth all rooms data
    .addCase(fetchRooms.pending,(state)=>{
     state.loading = true
    })

    .addCase(fetchRooms.fulfilled,(state,action)=>{
        state.loading = false
        state.rooms = action.payload
    })

    .addCase(fetchRooms.rejected,(state,action)=>{
       state.loading = false
        state.error = action.payload  
    })

    //addRomms
    .addCase(addrooms.fulfilled,(state,action)=>{
        state.rooms.push(action.payload)
        state.userRooms.push(action.payload)
    })

    .addCase(deleteroom.fulfilled,(state,action)=>{
   state.userRooms = state.userRooms.filter((r)=>r._id !== action.payload)
    })

    //fetchrooms
    .addCase(fetchroomdetails.fulfilled,(state,action)=>{
        state.userRooms = action.payload
    })
   }

})

export default roomSlice.reducer