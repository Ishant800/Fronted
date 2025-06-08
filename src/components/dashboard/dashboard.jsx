import { Route, Routes } from "react-router-dom"
import Maincontent from "./pages/maincontent"

import Sidebar from "./pages/sidebar"

import Profile from "../profile/profile"
import Roomlist from "../roompage/roomlist"
import Customers from "./pages/customers"

function Dashboard() {
  return (
    <div className=" max-h-screen bg-white flex flex-row">
      
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Maincontent />} />
           
            <Route path="profile" element={<Profile/>} />
            <Route path="listroom" element={<Roomlist/>} />
            <Route path="customers" element={<Customers/>} />
          </Routes>
        </div>
      
    </div>
  );
}
export default Dashboard