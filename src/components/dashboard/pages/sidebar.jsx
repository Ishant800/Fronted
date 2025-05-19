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
    <div className="w-1/5 px-7 bg-slate-900 h-screen">
      <div className="flex flex-row justify-between py-2 items-center">
        <Link to="/">
        
        <h1 className="text-xl font-semibold text-gray-100">MeroRoom</h1>
        </Link>
        <IoMenu size={25} color="gray" />
      </div>

      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) =>
          `flex mt-3 items-center px-4 py-2 rounded-md gap-3 ${
            isActive ? "bg-blue-500" : "hover:bg-slate-600"
          }`
        }
      >
        <IoIosColorPalette size={18} color="white" />
        <span className="text-slate-200 font-medium text-[17px]">Overview</span>
      </NavLink>

      <NavLink
        to="/dashboard/profile"
        className={({ isActive }) =>
          `flex mt-3 items-center px-4 py-2 rounded-md gap-3 ${
            isActive ? "bg-blue-500" : "hover:bg-slate-600"
          }`
        }
      >
        <CgProfile size={18} color="white" />
        <span className="text-slate-200 font-medium text-[17px]">Account</span>
      </NavLink>

      <NavLink
        to="/dashboard/customers"
        className={({ isActive }) =>
          `flex mt-3 items-center px-4 py-2 rounded-md gap-3 ${
            isActive ? "bg-blue-500" : "hover:bg-slate-600"
          }`
        }
      >
        <FaUsers size={18} color="white" />
        <span className="text-slate-200 font-medium text-[17px]">Customers</span>
      </NavLink>

      <NavLink
        to="/dashboard/message"
        className={({ isActive }) =>
          `flex mt-3 items-center px-4 py-2 rounded-md gap-3 ${
            isActive ? "bg-blue-500" : "hover:bg-slate-600"
          }`
        }
      >
        <MdOutlineMessage size={18} color="white" />
        <span className="text-slate-200 font-medium text-[17px]">Message</span>
      </NavLink>

      <NavLink
        to="/dashboard/listroom"
        className={({ isActive }) =>
          `flex mt-3 items-center px-4 py-2 rounded-md gap-3 ${
            isActive ? "bg-blue-500" : "hover:bg-slate-600"
          }`
        }
      >
        <BsHouseAddFill size={18} color="white" />
        <span className="text-slate-200 font-medium text-[17px]">List Room</span>
      </NavLink>

      <NavLink
        to="/dashboard/setting"
        className={({ isActive }) =>
          `flex mt-3 items-center px-4 py-2 rounded-md gap-3 ${
            isActive ? "bg-blue-500" : "hover:bg-slate-600"
          }`
        }
      >
        <IoSettingsOutline size={18} color="white" />
        <span className="text-slate-200 font-medium text-[17px]">Settings</span>
      </NavLink>

    </div>
  );
}

export default Sidebar;