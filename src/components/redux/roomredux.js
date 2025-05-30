import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



const token = localStorage.getItem("user")
const api = "http://localhost:5000/room"
//for roomadd
export const addRoom = createAsyncThunk('room/addRoom', async (data, thunkAPI) => {
    try {


        const res = await axios.post(`${api}/addroom`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return res.data.room

    } catch (error) {

        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
})

//for roomdata fetch
export const fetchRoom = createAsyncThunk('room/fetchRoom', async (thunkAPI) => {
    try {
        const res = await axios.get(`${api}/rooms`)
        return res.data.rooms
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message)
    }
})


export const fetchuserrooms = createAsyncThunk('room/fetchuserroom', async (thunkAPI) => {
    try {
        const res = await axios.get(`${api}/getproperties`, {
            headers: {
                Authorization: `Bearer ${token}`
            }

        })
         console.log(res.data.data)
        return res.data.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message)
    }
})
export const deleteroom = createAsyncThunk('room/deleteroom', async (id, thunkAPI) => {
    try {
        const res = await axios.delete(`${api}/roomdelete/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
       
        return { id, status: res.status }

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message)
    }
})

export const updateroom = createAsyncThunk('room/updateroom',async({id,data},thunkAPI)=>{
    try {
        const res = await axios.put(`${api}/updateroom/${id}`,data,{
            headers: {
                Authorization: `Bearer ${token}`
            }
            
        })

        return {id,data:res.data.room}
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message)
    }
})

const roomSlice = createSlice({
    name: "room",
    initialState: {
        room: [],
        userrooms: [],
        loading: false,
        error: null

    },
    reducers: {
        addRooms: (state, action) => {
            state.room = [...state.room, action.payload]
            state.userrooms = [...state.userrooms, action.payload]
        },
        deleteRoom: (state, action) => {
            const id = action.payload
            state.room = state.room.filter(room => room._id !== id)
            state.userrooms = state.userrooms.filter(room => room._id !== id)

        }
    },

    extraReducers: (builder) => {
        //for room adder
        builder.addCase(addRoom.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(addRoom.fulfilled, (state, action) => {
            state.loading = false,
                state.room = [...state.room, action.payload]
            state.userrooms = [...state.userrooms, action.payload]
        })
        builder.addCase(addRoom.rejected, (state, action) => {
            state.loading = false,
                state.error = action.payload
        })

        //for all roomdata
        builder.addCase(fetchRoom.pending, (state) => {
            state.loading = true,
                state.error = null
        })
        builder.addCase(fetchRoom.fulfilled, (state, action) => {
            state.loading = false
            state.room = action.payload
        })
        builder.addCase(fetchRoom.rejected, (state, action) => {
            state.error = action.payload
        })

        //for userrooms only admin purpose
        builder.addCase(fetchuserrooms.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(fetchuserrooms.fulfilled, (state, action) => {
            state.userrooms = action.payload
              console.log(action.payload)
            state.loading = false
        })
        builder.addCase(fetchuserrooms.rejected, (state, action) => {
            state.error = action.payload
        })

        //for roomdelete
        builder.addCase(deleteroom.pending, (state) => {
            state.loading = true
            state.error = false
        })
        builder.addCase(deleteroom.fulfilled, (state, action) => {
            state.loading = false
            console.log(action.payload)
            if (action.payload.status === 200) {
                const id = action.payload.id
                state.room = state.room.filter(room => room._id !== id)
                state.userrooms = state.userrooms.filter(room => room._id !== id)
            }
        })

        builder.addCase(deleteroom.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });


        // for updateroom
builder.addCase(updateroom.pending, (state) => {
    state.loading = true;
    state.error = null;
});
builder.addCase(updateroom.fulfilled, (state, action) => {
    state.loading = false;
    const { id, data } = action.payload;
    state.userrooms = state.userrooms.map(room =>
        room._id === id ? data : room
    );
    state.room = state.room.map(room =>
        room._id === id ? data : room
    );
});
builder.addCase(updateroom.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload;
});


    }

})
export const { addRooms, deleteRoom } = roomSlice.actions
export default roomSlice.reducer;
