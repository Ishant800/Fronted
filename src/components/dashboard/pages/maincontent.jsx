import { FaUsers } from "react-icons/fa"


function Maincontent() {
return (
    <div className="h-scree px-20 py-5">
       <h2 className="text-gray-700 text-2xl py-5 font-bold">Dashboard Overview </h2>
     
     <div className="flex justify-between items-center">

        <div className="p-5 bg-white gap-5 flex items-center rounded-xl">
          
           <div className="flex-col justify-between">
            <span className="text-md block font-medium py-5 px-5">Total Users</span>
             <span className="text-slate-800 text-xl py-5 px-5 font-bold">1000</span>
           </div>
           <div className="py-5 px-5 bg-slate-100 rounded-full">
                <FaUsers size={30} color="blue"/>
           </div>
          
           
        </div>
     </div>
   
    </div>
  )
}

export default Maincontent