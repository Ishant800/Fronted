import { useState } from "react"
import Addroom from "./addroom"


function Roomlist() {
const [ishowed,setishowed] = useState(false)
    return (
    <div className="w-full relative h-[100dvh] overflow-y-auto">
             <div className="w-full py-5 px-10">
             <div className="flex justify-between mb-3 w-full">
             <input type="text" placeholder="search room" className="px-5 py-2 rounded-sm outline-none bg-slate-200 w-80"/>
             <button onClick={()=>setishowed(true)} className="text-sm font-medium px-2 py-1 rounded-sm text-white bg-black">Add Room</button>
             </div>

            <div className="flex items-center gap-10">
               <div className="text-md font-semibold capitalize">roomid</div>
               <div className="text-md font-semibold capitalize">room title</div>
              <div className="text-md font-semibold capitalize">alloted price</div>
              <div className="text-md font-semibold capitalize">status</div>
                                      
            </div>
            

             </div>
             {ishowed && (
              
              <div className="ml-50 mb-10 top-20 left-20 ">
               
              <Addroom/>
               <button onClick={()=>setishowed(!ishowed)} 
                className="px-2 py-1 bg-red-400 mb-2 text-white rounded-sm mt-2 font-sm">Cancel</button>
              </div>
              )}

    </div>
  )
}

export default Roomlist