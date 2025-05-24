import { FaRegBell } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiHomeModern } from "react-icons/hi2";
import { MdOutlineLogout } from "react-icons/md";
import { useState } from "react";
import {Link} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setLogout } from "../redux/authredux";
function Navabar() {
  const [popup,setpopup] = useState(false)
  const user = localStorage.getItem("user")
  const dispatch = useDispatch()

  return (
    <div className="h-[70px] w-full bg-gray-100 sticky top-0 flex justify-between  items-center">

      <div className="items-center flex px-20 gap-2">
        <HiHomeModern size={26} color="blue" /> <h1 className="text-2xl font-medium  text-sky-600"> MeroRoom</h1>
      </div>

      {/* navigation */}
      <nav className="flex gap-5 ">
        <Link to='/'>
                <div className="text-gray-500 hover:text-blue-600 font-semibold text-[17px]" >Home</div>

        </Link>
<Link to='/rooms'>
        <div className="text-gray-500 hover:text-blue-600 font-semibold text-[17px]" >Browse Rooms</div>

</Link>
        <div className="text-gray-500 hover:text-blue-600 font-semibold text-[17px]" >List Your Room</div>
        <div className="text-gray-500 hover:text-blue-600 font-semibold text-[17px]" >About us</div>
      </nav>

      {/* activity wise ui */}
      {user ? (<div className="gap-5 pr-15  flex items-center">
        <FaRegBell size={20} />
        <AiOutlineMail size={20} />


       
          <div className="flex flex-row items-center">
            <img onClick={()=>setpopup(!popup)} className="rounded-full relative object-cover h-10 w-10" src="https://static-cse.canva.com/blob/1911653/tools_transparent-background_promo-showcase_01-AFTER.jpg" alt="" />
            {popup && ( <div className="flex-col justify-center items-center absolute right-2 mt-65 w-48 p-3 bg-white rounded-md shadow-lg z-50">
              <Link to="/dashboard/profile">
              <div className="text-md hover:bg-slate-100 font-semibold text-gray-700  rounded-xl px-3 py-2">Profile</div>
              </Link>
             <Link to="/dashboard" target="blank">
               <div className="text-md hover:bg-slate-100 font-semibold text-gray-700  rounded-xl px-3 py-2">Dashbaord</div>

             </Link>
              
              <Link>
              <div className="text-md hover:bg-slate-100 font-semibold text-gray-700  rounded-xl px-3 py-2">Settings</div>
              </Link>
              
              
              <button 
              onClick={()=>dispatch(setLogout())}
              className="flex hover:bg-slate-100 w-full cursor-pointer flex-row gap-1 px-3 py-2 text-md items-center font-semibold text-red-500  rounded-xl">Logout <MdOutlineLogout size={18} color="red"/> </button>
              

           </div>)}
          

          </div>
      
      </div>) :

        (<div className="pr-10">
          <Link to='/login'>
          
          <button className="text-md ml-2 border-2 text-white bg-sky-600 rounded-lg px-5 py-2 font-medium">Signin</button>
          </Link>
        </div>)}

    </div>
  )
}

export default Navabar