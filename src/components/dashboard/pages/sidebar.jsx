import { IoMenu } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BsHouseAddFill } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaUsers } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-1/5 px-7 bg-slate-900 h-full">
      <div className="flex flex-row justify-between py-2 items-center">
        <h1 className="text-xl font-semibold text-gray-100">Dashboard</h1>
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
        <span className="text-slate-200 font-medium text-[17px]">Profile</span>
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
        to="/dashboard/list-room"
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

      <div className="mt-50 mb-6">
        <button className="flex rounded-md border py-2 px-5 w-full border-white items-center justify-center gap-2 text-white text-[17px]">
          Logout <MdOutlineLogout />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;