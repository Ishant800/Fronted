import { showErrorToast } from "../../toastutils/toast"

export const getToken =()=>{
const token = localStorage.getItem("token")
if(!token) showErrorToast("token not found please login")
console.log(token)
return token ? {Authorization: `Bearer ${token}`} : {}

}