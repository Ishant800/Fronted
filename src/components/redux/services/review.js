import axios from "axios"
import { getToken } from "../utils/auth"

const api = "http://localhost:5000/reviw/review"
console.log(getToken())
export const reviewAdd = (id,data) => {
  return  axios.post(`${api}/${id}`,data,{headers:getToken()
  })
}

export const getreviews = (id)=>{
    return axios.get(`${api}/${id}`)
}