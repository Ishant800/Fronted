import axios from "axios";

export const Addrooms = createAsyncThunk('room/Addroom',async(FormData,thunkApi)=>{
    try {
        const res = await axios.post(`${api}/addroom`,FormData);
        return res.data
    } catch (error) {
        return error
    }
})

