import { IoMenu } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { BsHouseAddFill } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaUsers } from "react-icons/fa6";
import { NavLink,Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-[200px] px-7 shadow-md  shadow-slate-800 overflow-hidden">
      <div className="flex flex-row justify-between py-2 items-center">
        <Link to="/">
        
        <h1 className="text-xl font-semibold text-gray-600">MeroRoom</h1>
        </Link>
        <IoMenu size={25} color="gray" />
      </div>

      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) =>
          `flex mt-3 items-center px-4 py-2 rounded-md gap-3 ${
            isActive ?  "text-sky-500 " : "text-gray-600 "
          }`
        }
      >
        <IoIosColorPalette size={18} color="gray" />
        <span className=" font-medium text-md  hover:text-sky-400">Overview</span>
      </NavLink>

      <NavLink
        to="/dashboard/profile"
        className={({ isActive }) =>
          `flex mt-3 items-center px-4 py-2 rounded-md gap-3 ${
            isActive ?  "text-sky-500 " : "text-gray-600 "
          }`
        }
      >
        <CgProfile size={18} color="gray" />
        <span className="text-slate-600 font-medium text-md  hover:text-sky-400">Account</span>
      </NavLink>

      <NavLink
        to="/dashboard/customers"
        className={({ isActive }) =>
          `flex mt-3 items-center px-4 py-2 rounded-md gap-3 ${
            isActive ?  "text-sky-500 " : "text-gray-600 "
          }`
        }
      >
        <FaUsers size={18} color="gray" />
        <span className="text-slate-600 font-medium text-md  hover:text-sky-400">Customers</span>
      </NavLink>

      <NavLink
        to="/dashboard/message"
        className={({ isActive }) =>
          `flex mt-3 items-center px-4 py-2 rounded-md gap-3 ${
           isActive ?  "text-sky-500 " : "text-gray-600 "
          }`
        }
      >
        <MdOutlineMessage size={18} color="gray" />
        <span className="text-slate-600 font-medium text-md  hover:text-sky-400">Message</span>
      </NavLink>

      <NavLink
        to="/dashboard/listroom"
        className={({ isActive }) =>
          `flex mt-3 items-center px-4 py-2 rounded-md gap-3 ${
            isActive ?  "text-sky-500 " : "text-gray-600 "
          }`
        }
      >
        <BsHouseAddFill size={18} color="gray" />
        <span className="text-slate-600 font-medium text-md  hover:text-sky-400">List Room</span>
      </NavLink>

      <NavLink
        to="/dashboard/setting"
        className={({ isActive }) =>
          `flex mt-3 items-center px-4 py-2 rounded-md gap-3 ${
             isActive ?  "text-sky-500 " : "text-gray-600 "
          }`
        }
      >
        <IoSettingsOutline size={18} color="gray" />
        <span className="text-slate-600 font-medium text-md  hover:text-sky-400">Settings</span>
      </NavLink>

    </div>
  );
}

export default Sidebar;