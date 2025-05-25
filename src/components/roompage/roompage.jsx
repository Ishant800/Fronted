import { FaLocationDot } from "react-icons/fa6"
import Navabar from "../navbar/navbar"

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
function Roompage() {
  const {id} = useParams()
  console.log(id)
  const [data,setdata] =useState(null)

   useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/room/rooms/${id}`);
        if (res.data) {
          console.log(res.data);
          setdata(res.data.existroom);
          console.log(data)
        }
      } catch (error) {
        alert(error);
      }
    };

    fetchdata();
  }, [id]);



  return (
    <div>
      <Navabar />
      <div className="h-full overflow-hidden px-20 pt-10 w-full">

      
          {data ? (
          <div>
           
  <div>
    
   <img src={data.images[0]} 
    alt=""
    className="w-full h-100 object-contain rounded-md" />
    <h1 className="text-3xl mt-4 font-bold text-slate-700">{data.roomtitle}</h1>
    <div className="flex py-5 gap-2 items-center">
      <FaLocationDot color="grey" />
      <span className="text-lg font-semibold">{data.address}</span>
    </div>

    <div className="grid grid-cols-3 gap-10 py-10">
      <div className="items-center col-span-2 row-span-2">
        <span className="text-2xl py-5 font-semibold text-slate-800">About This Room:</span>
        <p className="text-md py-2 font-medium text-gray-600">{data.description}</p>
      </div>

      <form className="px-10 col-span-1 shadow-md bg-white">
        <div className="py-5">
          <p className="font-medium text-gray-700 text-start overflow-hidden">
            Are you interested in this property? Don’t wait — book it.
          </p>
          <div className="flex gap-12 items-center justify-between">
            <span className="text-xl mt-2 font-medium text-slate-800">
              {data.room_price_monthly}/month
            </span>
            <button className="text-md w-full rounded-md px-3 py-2 font-medium bg-blue-400 text-white">
              Request Book
            </button>
          </div>
        </div>
      </form>
    </div>

    <div className="mt-2">
      <h1 className="text-xl font-semibold text-slate-900">Features:</h1>
      <div className="flex gap-2 flex-wrap">
        {data.features?.map((feature, i) => (
          <span key={i} className="text-md text-gray-700 font-medium">
            {feature}
          </span>
        ))}
      </div>
    </div>
  </div>
  </div>
) : (
  <p className="text-center py-10 text-gray-600 font-semibold">Loading Room Details...</p>
)}
       
          
        

        </div>
      
    </div>

  )
}

export default Roompage