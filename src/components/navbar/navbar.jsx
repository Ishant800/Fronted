import { FaRegBell } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiHomeModern } from "react-icons/hi2";
import { MdOutlineLogout } from "react-icons/md";
import { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setLogout } from "../redux/authredux";

function Navabar() {
  const [popup, setPopup] = useState(false);
   const [notificationbox, setnotificationbox] = useState(false);
  const user = localStorage.getItem("user");
  const dispatch = useDispatch();

  return (
    <div className="h-[60px]  w-full bg-gray-100 sticky top-0 z-50 flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="flex  items-center gap-6">
        <Link to="/" className="flex items-center gap-2">
          <HiHomeModern size={26} className="text-blue-600" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">MeroRoom</h1>
        </Link>

        <nav className="hidden sm:flex gap-4 text-[16px] font-semibold text-gray-700">
          <Link to='/' className="hover:text-sky-600">Home</Link>
          <Link to='/rooms' className="hover:text-sky-600">Browse Rooms</Link>
          <Link to='/about' className="hover:text-sky-600">About Us</Link>
        </nav>
      </div>


      {user ? (
        <div className="flex items-center gap-4">
          <div className="relative cursor-default"
           onClick={()=>setnotificationbox(!notificationbox)}
           
           >
             <FaRegBell size={20} className="text-gray-600"  />
            {notificationbox && (
                 <Notificationbox setnotificationbox={setnotificationbox}/>
            )}
           
          </div>
          

          <div className="relative">
            <img
              onClick={() => setPopup(!popup)}
              className="rounded-full object-cover h-10 w-10 cursor-pointer"
              src="https://static-cse.canva.com/blob/1911653/tools_transparent-background_promo-showcase_01-AFTER.jpg"
              alt="profile"
            />

            {popup && (
              <div
                onMouseLeave={() => setPopup(false)}
                className="absolute right-0 mt-2 w-48 p-3 bg-white rounded-md shadow-lg z-50"
              >
                <NavLink to="/dashboard/profile" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-slate-100 font-medium">
                  Profile
                </NavLink>
                <NavLink to="/dashboard" target="_blank" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-slate-100 font-medium">
                  Dashboard
                </NavLink>
                <NavLink to="/dashboard/settings" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-slate-100 font-medium">
                  Settings
                </NavLink>
                <button
                  onClick={() => dispatch(setLogout())}
                  className="flex items-center gap-2 w-full px-3 py-2 text-red-500 hover:bg-slate-100 rounded-md font-medium"
                >
                  Logout <MdOutlineLogout size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-2 rounded-lg font-medium transition-all duration-300">
              Sign In
            </button>
          </Link>
        </div>
      )}



    </div>
  );
}

export default Navabar;
const Notificationbox = ({setnotificationbox})=>{
    return(
        <div className="absolute top-7 bg-white shadow-sm rounded-md right-1 bottom-2 w-110 h-100 flex flex-col">
          <button onMouseLeave={setnotificationbox(true)}>cancel</button>
        </div>
    )
}