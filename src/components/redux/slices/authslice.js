import { createSlice } from "@reduxjs/toolkit";
import { loginuser, mydetails, usersignup} from "../thunk/auththunk";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    userdetails: null,
    token: "",
    users:[],
    loading: false,
    error: null,
  },
  reducers: {
    Logout:(state)=>{
        state.userdetails = null
        localStorage.removeItem("token")
        localStorage.removeItem("userdetails")
    }
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(usersignup.pending, (state) => {
        state.loading = true;
      })
      .addCase(usersignup.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(loginuser.fulfilled, (state, action) => {
        state.loading = false;
        localStorage.setItem("token", action.payload);
        state.token = action.payload;
      })
      .addCase(loginuser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      .addCase(mydetails.fulfilled, (state, action) => {
        localStorage.setItem("userdetails", JSON.stringify(action.payload))
        state.userdetails = action.payload
      });
  },
});
export const {Logout} = authSlice.actions
export default authSlice.reducer;