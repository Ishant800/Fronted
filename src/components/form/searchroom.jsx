import { FaLocationDot } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import { FaBed } from "react-icons/fa";
function Searchroom() {
  return (
    <div className=" bg-gray-100 flex justify-center items-center">

 <div className="w-1/2">
 <h1 className="text-xl font-mono text-gray-500">Trust by 1000+ Peoples </h1>
 <div className="flex flex-row">
    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" alt="" className="rounded-full h-15 w-15" />
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTH4dlV0UI27TlS52PbJ2N78hINGV4m43mKg&s" alt="" className="rounded-full h-15 w-15" />
    <img src="https://static.vecteezy.com/system/resources/thumbnails/057/704/776/small/young-woman-with-glasses-smiles-confidently-during-classroom-session-photo.jpg" alt="" className="rounded-full h-15 w-15" />
    <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpg" alt="" className="rounded-full h-15 w-15" />
 </div>
 </div>


<form action="" className=" w-120 m-10 bg-white rounded-2xl">
    <div className="px-10 py-10">
  <h1 className="text-2xl font-medium  text-gray-800">Find Room Near Your Location</h1>
    </div>

    <div className="mt-3 px-10  flex flex-col">
   <label className="text-md font-medium text-gray-500" htmlFor="">Location</label>
   <div className="mt-2 flex flex-row items-center bg-slate-50 shadow-gray-300 rounded-md shadow-sm ">
      <span className="pl-3">
        <FaLocationDot size={22} color="gray" aria-hidden="true" />
      </span>
      <input
        type="text"
        className="p-3 w-full bg-transparent text-sm font-medium placeholder-gray-400 outline-none"
        placeholder="Where do you want to stay?"
        aria-label="Search for a location to stay"
      />
    </div>
    </div>


     <div className="mt-3 px-10  flex flex-col">
   <label className="text-md font-medium text-gray-500" htmlFor="">Budget</label>
   <div className="mt-2 flex flex-row items-center bg-slate-50 shadow-gray-300 rounded-md shadow-sm ">
      <span className="pl-3">
        <MdAttachMoney size={22} color="gray" aria-hidden="true" />
      </span>
      <input
        type="text"
        className="p-3 w-full bg-transparent text-sm font-medium placeholder-gray-400 outline-none"
        placeholder="Enter your budget range"
        aria-label="budget"
      />
    </div>
    </div>


<div className="mt-3 px-10  flex flex-col">
   <label className="text-md font-medium text-gray-500" htmlFor="">Room Type</label>
   <div className="mt-2 flex flex-row items-center bg-slate-50 shadow-gray-300 rounded-md shadow-sm ">
      <span className="pl-3">
        <FaBed size={22} color="gray" aria-hidden="true" />
      </span>
      <input
        type="text"
        className="p-3 w-full bg-transparent text-sm font-medium placeholder-gray-400 outline-none"
        placeholder="Select room type"
        aria-label="budget"
      />
    </div>
    </div>

      
      <div className="px-10 py-5">
        <button className="text-md w-full p-3 rounded-xl font-medium text-white bg-blue-500">Search available room</button>
      </div>



</form>
    </div>
  )
}

export default Searchroom