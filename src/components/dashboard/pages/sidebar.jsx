import { IoMenu } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BsHouseAddFill } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaUsers } from "react-icons/fa6";


function Sidebar() {
    return (
        <div className="w-1/5 px-7">
            <div className="flex flex-row justify-between 7 py-2 items-center">
                <h1 className="text-xl font-semibold text-gray-100 ">Dashboard</h1>
                <IoMenu size={25} color="gray" />


            </div>


              <div className="flex mt-3 items-center hover:bg-blue-500 px-4 py-2 rounded-md gap-3">
                <IoIosColorPalette size={18} color="white"/>
              <span className="text-slate-200 font-medium text-[17px]"> Overview</span>
              </div>
              
               <div className="flex mt-3 items-center hover:bg-blue-500 px-4 py-2 rounded-md gap-3">
                <CgProfile size={18} color="white"/>
              <span className="text-slate-200 font-medium text-[17px]"> Profile</span>
              </div>


               <div className="flex items-center mt-3 hover:bg-blue-500 px-4 py-2 rounded-md gap-3">
                <FaUsers size={18} color="white"/>
              <span className="text-slate-200 font-medium text-[17px]">Customers </span>
              </div>

               <div className="flex items-center mt-3 hover:bg-blue-500 px-4 py-2 rounded-md gap-3">
                <MdOutlineMessage size={18} color="white"/>
              <span className="text-slate-200 font-medium text-[17px]"> Message</span>
              </div>


               <div className="flex items-center mt-3 hover:bg-blue-500 px-4 py-2 rounded-md gap-3">
                <BsHouseAddFill size={18} color="white"/>
              <span className="text-slate-200 font-medium text-[17px]"> List Room</span>
              </div>

             <div className="flex items-center mt-3 hover:bg-blue-500 px-4 py-2 rounded-md gap-3">
                <IoSettingsOutline size={18} color="white"/>
              <span className="text-slate-200 font-medium text-[17px]">Settings </span>
              </div>


              <button className="flex rounded-md border py-2 px-5 w-full border-white mt-40 items-center justify-center gap-2 text-white text-[17px]">Logout <MdOutlineLogout/> </button>

        </div>
    )
}

export default Sidebar