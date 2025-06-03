import { IoMenu } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";

import { BsHouseAddFill } from "react-icons/bs";

import { CgProfile } from "react-icons/cg";
import { FaUsers } from "react-icons/fa6";
import { NavLink, Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="min-h-screen w-[70px] md:w-[220px] bg-white px-3 py-4 shadow-lg flex flex-col gap-2 transition-all duration-300">

      <div className="flex items-center justify-between px-2 mb-6">
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-lg md:text-xl font-bold text-gray-700 hidden md:block">MeroRoom</h1>
        </Link>
        <IoMenu size={22} className="text-gray-600 hidden md:block" />
      </div>


      {[
        { to: "/dashboard", label: "Overview", icon: <IoIosColorPalette size={20} /> },
        { to: "/dashboard/profile", label: "Account", icon: <CgProfile size={20} /> },
        { to: "/dashboard/customers", label: "Customers", icon: <FaUsers size={20} /> },
        { to: "/dashboard/listroom", label: "List Room", icon: <BsHouseAddFill size={20} /> },
       
      ].map(({ to, label, icon }, index) => (
        <NavLink
          key={index}
          to={to}
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md hover:bg-sky-100 transition-all 
             ${isActive ? "text-sky-600 font-semibold" : "text-gray-600"}`
          }
        >
          <span className="text-xl">{icon}</span>
          <span className="text-sm font-medium hidden md:block">{label}</span>
        </NavLink>
      ))}
    </div>
  );
}

export default Sidebar;
