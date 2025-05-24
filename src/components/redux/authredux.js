import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const API_URL = 'http://localhost:5000/auth';

export const loginUser = createAsyncThunk('auth/loginUser', async (userData, thunkAPI) => {
  try {
    const res = await axios.post(`${API_URL}/userlogin`, userData);
    return res.data;
  } catch (err) {
    return res.err
  }
});

export const registerUser = createAsyncThunk('auth/registerUser', async (userData, thunkAPI) => {
  try {
    const res = await axios.post(`${API_URL}/usersignup`, userData);
    return res.data; 
  } catch (err) {
    return res.err
  }
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async (_, thunkAPI) => {
  try {
    await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
    return null;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.message);
  }
});


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    islogin:false,
    error: null,
  },
  reducers: {
    setUser:(state,action)=>{
      state.user = !!action.payload
      state.islogin = true
    },
    setLogout:(state)=>{
      state.islogin = false
      localStorage.removeItem("user")
      state.user = null
    }
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      console.log(action.payload,"data form reducer")
      if(action.payload.acesstoken){
       localStorage.setItem('user', action.payload.acesstoken);
      }
     
      state.islogin = true
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.islogin = false
    });

    // Register
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

   
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = null;
      localStorage.removeItem('user');
    });
  },
});
  

export const  {setUser,setLogout} = authSlice.actions
export default authSlice.reducer;
