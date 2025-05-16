// import Searchroom from "./components/form/searchroom"
import { useDispatch, useSelector } from "react-redux"
import Loginpage from "./components/auth/loginpage"
import Signup from "./components/auth/signup"
import Dashboard from "./components/dashboard/dashboard"
import Homepage from "./components/homepage/home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from "react"
  import { setUser } from "./components/redux/authredux"  
 
function App() {
  const dispatch = useDispatch()
 
useEffect(()=>{
const userinfo = localStorage.getItem("user")
if(userinfo)
  console.log(userinfo,"from app.js")
  dispatch(setUser(userinfo))
},[])  
  return (
    <BrowserRouter>   
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>


    </BrowserRouter>
  )
}

export default App 