import { FaRegBell } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
function Navabar() {
  const islogin = true

  return (
    <div className="h-[70px] w-full bg-gray-50 sticky top-0 flex justify-around  items-center">


      {/* Webpage logo*/}
      <div className="items-center flex gap-2">
        <IoHomeSharp size={26} color="blue" /> <h1 className="text-2xl font-medium  text-blue-600"> MeroRoom</h1>
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
        <FaRegBell size={20} />
        <AiOutlineMail size={20} />


        <Link to="/dashboard">
          <div className="flex flex-row items-center">
            <img className="rounded-full object-cover h-10 w-10" src="https://static-cse.canva.com/blob/1911653/tools_transparent-background_promo-showcase_01-AFTER.jpg" alt="" />
          </div>
        </Link>
      </div>) :

        (<div className="">

          <button className="text-[18px] ml-2 border-2 bg-slate-50 border-blue-500 text-blue-500 rounded-lg p-1 w-[120px]">Signin</button>

        </div>)}

    </div>
  )
}

export default Navabar