import { Route, Routes } from "react-router-dom"
import Maincontent from "./pages/maincontent"
import Navbarmini from "./pages/navbar"
import Sidebar from "./pages/sidebar"
import Setting from "./pages/setting"

function Dashboard() {
  return (
    <div className="h-screen bg-blue-100">
      <Navbarmini />
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Maincontent />} />
            <Route path="setting" element={<Setting />} />
            {/* <Route path="profile" element={<Profile />} />
            <Route path="customers" element={<Customers />} />
            <Route path="message" element={<Message />} />
            <Route path="list-room" element={<ListRoom />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Dashboard