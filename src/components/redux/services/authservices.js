import axios from "axios"
import { getToken } from "../utils/auth"

const api = "http://localhost:5000/auth"


export const userSignup = async(data)=>{
   return await axios.post(`${api}/usersignup`,data)
}

export const userLogin = async(data)=>{
 return await axios.post(`${api}/userlogin`,data)

}

export const myDetails = async()=>{ 
    return await axios.get(`${api}/mydetails`,
        {headers:getToken()})
} 

export const userdetailsUpdate = async (data)=>{
    return await axios.post(`${api}/userupdate`,data,{headers:getToken()})
}