import Maincontent from "./pages/maincontent"
import Navbarmini from "./pages/navbar"
import Sidebar from "./pages/sidebar"

function Dashboard() {
  return (
    <div className="h-screen bg-slate-900">
        <Navbarmini/>
        <div className="flex flex-row">
            <Sidebar/>
            <Maincontent/>
        </div>
        
    </div>
  )
}

export default Dashboard