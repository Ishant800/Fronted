import axios from 'axios'
import { getToken } from '../utils/auth'

const api = "http://localhost:5000/room"

export const roomsApi = ()=>{
 return axios.get(`${api}/rooms`)
}
   
export const addRoomApi = (data)=>{
   return axios.post(`${api}/addroom`,data,{headers:getToken()})
}

export const deleteRoomApi = (id)=>{
   return axios.delete(`${api}/deleteroom/${id}`,{headers:getToken()})
}

export const roomdetailsApi = (id) =>{
  return  axios.get(`${api}/rooms/${id}`,{headers: getToken()})
}
export const updateRooms = (id,data)=>{
    return axios.post(`${api}/rooms/${id}`,data,{headers:getToken()})
}

export const getproperties = ()=>{
   return axios.get(`${api}/getproperties`,{
      headers:getToken()
   })
}