import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import {useNavigate}  from 'react-router-dom'
import { FaLocationDot, FaStar } from "react-icons/fa6"
import { FaDollarSign } from "react-icons/fa"
function Roomview() {
    const [room,setrooms] = useState(null)


    const navigate = useNavigate()
    useEffect(()=>{
       try {
        const fetchdata = async()=>{
            const res = await axios.get("http://localhost:5000/room/rooms")
      
            if(!res.data) 
            alert("no data found")
        setrooms(res.data.rooms)
           
        }
        
        fetchdata()
       
       } catch (error) {
        alert(error.message)
       }
    },[])


  return (
    <div className="overflow-hidden px-20 bg-gray-50">
      
        <div className="pt-10 ">
          <h1 className="text-2xl font-bold  text-gray-800"> Featured Properties</h1>
        </div>
        
        <div className="py-10  flex justify-between items-center flex-wrap gap-10">
           {room && room.length > 0 ?(room.map((item,index) =>(


            <div onClick={()=> navigate(`/rooms/${item.roomid}`)} key={index} className=" shadow-sm object-contain rounded-xl shadow-gray-400 w-90 h-full" >
                  <div className="">
                    
                     <img src={item.images[0]} alt="" className="h-50 rounded-t-xl  w-full" />
                        {/* <span className="absolute top-0 right-2 bg-blue-400 text-sm text-white px-3 rounded-sm py-2">{item.status}</span> */}
                  </div>
                 

                <div className="px-3 py-2 flex items-center justify-between">  
                 <span className="text-xl text-slate-900 block font-bold capitalaize">Luxury Ocean Suite</span>
                <span className="flex "><FaStar color="orange" size={24}/> 4.0</span>
                </div>
                

                <div className="px-3 flex gap-2 items-center py-2">
                 <FaLocationDot color="gray " size={24}/>
                 <span className="font-medium text-gray-700 text-md">{item.city} ,<span>{item.country}</span> </span>
                </div>   

                <div className="px-3 flex gap-2 items-center py-2">
                                  <span className="font-medium capitalize text-gray-700 text-md">{item.features[0]} ,</span>
                 <span className="font-medium capitalize text-gray-700 text-md">{item.features[1]}, </span>
                 <span className="font-medium capitalize text-gray-700 text-md">{item.features[2]} </span>

                </div>   



            <div className="px-3 flex gap-2 justify-between items-center py-2">
             <span className=" tetx-lg font-semibold capitalaize flex items-center"><FaDollarSign/> {item.room_price_monthly}/Mnth</span>
               <button className=" text-slate-50  bg-sky-600 font-medium px-5 py-3 flex flex-row items-center gap-2 rounded-md">
                               Book Now
                               
                             </button>

            </div>


           
           </div>
          
           ))):(<p>error</p>) } 
        </div>
       
    </div>
  )
}

export default Roomview 