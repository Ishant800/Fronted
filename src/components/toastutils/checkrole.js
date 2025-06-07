import { useSelector } from "react-redux";
import {showWarningToast } from "./toast";



export const checkrole =()=>{
    const {userdetails} = useSelector((state)=>state.auth) 
    if(userdetails.role === "landlords") 
      return showWarningToast("you are not allowed to addroom")
   
}



export const checklogin =()=>{
    const {userdetails} = useSelector((state)=>state.auth) 
    if(userdetails.length < 0) 
      return showWarningToast("you are not allowed review please login first")
   
}
