import { Route, Routes } from "react-router-dom"
import Maincontent from "./pages/maincontent"
import Navbarmini from "./pages/navbar"
import Sidebar from "./pages/sidebar"
import Setting from "./pages/setting"
import Profile from "../profile/profile"
import Roomlist from "../roompage/roomlist"

function Dashboard() {
  return (
    <div className="h-screen overflow-hidden bg-blue-100 flex flex-row">
      
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Maincontent />} />
            <Route path="setting" element={<Setting />} />
            <Route path="profile" element={<Profile/>} />
            <Route path="listroom" element={<Roomlist/>} />
          </Routes>
        </div>
      
    </div>
  );
}
export default Dashboard