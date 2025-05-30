import { IoHomeSharp } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
function Navbarmini() {
    return (


        <div className='flex flex-row justify-between items-center p-3 bg-cyan-800'>
            <div className="items-center flex gap-2">
                <IoHomeSharp size={26} color="white" />
             <Link to='/'>
                <h1 className="text-2xl font-medium text-white"> MeroRoom</h1>
               </Link>
                <h1 className="text-xl ml-10 font-medium text-gray-300">Adminsitrative dashboard</h1>

            </div>
            

            <div className="gap-5 px-10 flex items-center">
                <FaRegBell size={20} color="white" />
                <AiOutlineMail size={20} color="white" />
                <div className="flex flex-row items-center">
                    <img className="rounded-full object-cover h-10 w-10" src="https://static-cse.canva.com/blob/1911653/tools_transparent-background_promo-showcase_01-AFTER.jpg" alt="" />
                </div>

            </div>


        </div>

    )
}

export default Navbarmini


