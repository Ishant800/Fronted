
import Profile from "../../profile/profile"

function Maincontent() {
  const userdetails = JSON.parse(localStorage.getItem("user"))
  const username = userdetails.user.username
  return (
    <div className="h-screen bg-blue-100 p-5">
       <h2 className="text-gray-500 text-center font-semibold">Wellcome back, <span className="font-bold capitalize text-gray-900">{username}</span>  here's what happen today! </h2>
      <Profile/>
   
    </div>
  )
}

export default Maincontent