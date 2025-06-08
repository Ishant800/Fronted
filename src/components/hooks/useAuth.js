import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { mydetails } from "../redux/thunk/auththunk"


export function useAuthSync(){
const dispatch = useDispatch()
 const {userdetails} = useSelector((state)=>state.auth) 

useEffect(()=>{
    if( userdetails === null){
       dispatch(mydetails())
    }
},[dispatch])
}  