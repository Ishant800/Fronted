import { FaRegBell } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoHomeSharp } from "react-icons/io5";
function Navabar() {
const islogin = false

  return (
    <div className="h-[70px] w-full bg-gray-50 sticky top-0 flex justify-around  items-center">


  {/* Webpage logo*/}
   <div className="items-center flex gap-2">
   <IoHomeSharp size={26} color="blue"/> <h1 className="text-2xl font-medium  text-blue-600"> RoomEase</h1>
   </div>

 {/* navigation */}
   <nav className="flex gap-5 ">
    <a className="text-gray-500 hover:text-blue-600 font-semibold text-[17px]" href="">Home</a>
    <a className="text-gray-500 hover:text-blue-600 font-semibold text-[17px]" href="">Browse Rooms</a>
    <a className="text-gray-500 hover:text-blue-600 font-semibold text-[17px]" href="">List Your Room</a>
    <a className="text-gray-500 hover:text-blue-600 font-semibold text-[17px]" href="">About us</a>
   </nav>

 {/* activity wise ui */}
{islogin ? (<div className="gap-5  flex items-center">
<FaRegBell size={20}/>
  <AiOutlineMail size={20} />
  <div className="">
    <img className="rounded-full h-10 w-10" src="https://www.zuckermanlaw.com/wp-content/uploads/whistleblowing/anonymous-sec-whistleblower.jpg" alt="" />
  </div>
</div>) : 

(<div className="">
    <button className="text-[18px] hover:bg-blue-700 bg-blue-500 text-white rounded-xl p-2 w-[120px]">Signup</button>
    {/* <button className="text-[18px] ml-2 border-2 border-blue-600 text-blue-600 rounded-xl p-2 w-[120px]">Signup</button> */}

</div>)}

    </div>
  )
}

export default Navabar