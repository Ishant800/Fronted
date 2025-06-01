
import Loginpage from "./components/auth/loginpage"
import Signup from "./components/auth/signup"
import Dashboard from "./components/dashboard/dashboard"
import Homepage from "./components/homepage/home"
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Addroom from "./components/roompage/addroom"
import Roomview from "./components/roompage/roomview"
import Roompage from "./components/roompage/roompage"
import Updateroom from "./components/roompage/updateroom"
import UpdateProfile from "./components/auth/profileupdate"
 
function App() {
 
  return (
    <BrowserRouter>   
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/addroom" element={<Addroom/>} />
        <Route path="/rooms" element={<Roomview/>} />
         <Route path="/rooms/:id" element={<Roompage/>} />
         <Route path="/updaterooms/:id" element={<Updateroom/>} />
          <Route path="/updateprofiles" element={<UpdateProfile/>} />
      </Routes>


    </BrowserRouter>
  )
}

export default App 