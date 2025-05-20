import { FaRegBell } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineHomeWork } from "react-icons/md";
import { HiHomeModern } from "react-icons/hi2";
import { MdOutlineLogout } from "react-icons/md";
import { useState } from "react";
import {Link} from 'react-router-dom'
function Navabar() {
  const [popup,setpopup] = useState(false)
  const user = localStorage.getItem("user")

  return (
    <div className="h-[70px] w-full bg-gray-100 sticky top-0 flex justify-around  items-center">


      {/* Webpage logo*/}
      <div className="items-center flex gap-2">
        <HiHomeModern size={26} color="blue" /> <h1 className="text-2xl font-medium  text-sky-600"> MeroRoom</h1>
      </div>

      {/* navigation */}
      <nav className="flex gap-5 ">
        <Link to='/'>
                <a className="text-gray-500 hover:text-blue-600 font-semibold text-[17px]" >Home</a>

        </Link>
<Link to='/rooms'>
        <a className="text-gray-500 hover:text-blue-600 font-semibold text-[17px]" >Browse Rooms</a>

</Link>
        <a className="text-gray-500 hover:text-blue-600 font-semibold text-[17px]" >List Your Room</a>
        <a className="text-gray-500 hover:text-blue-600 font-semibold text-[17px]" >About us</a>
      </nav>

      {/* activity wise ui */}
      {user ? (<div className="gap-5  flex items-center">
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
              
              
              <button className="flex hover:bg-slate-100 w-full cursor-pointer flex-row gap-1 px-3 py-2 text-md items-center font-semibold text-red-500  rounded-xl">Logout <MdOutlineLogout size={18} color="red"/> </button>
              

           </div>)}
          

          </div>
      
      </div>) :

        (<div className="">
          <Link to='/login'>
          
          <button className="text-[18px] ml-2 border-2 bg-slate-50 border-blue-500 text-blue-500 rounded-lg p-1 w-[120px]">Signin</button>
          </Link>
        </div>)}

    </div>
  )
}

export default Navabar