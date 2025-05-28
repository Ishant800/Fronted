import { FaLocationDot } from "react-icons/fa6"
import Navabar from "../navbar/navbar"

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
function Roompage() {
  const { id } = useParams()

  const [data, setdata] = useState(null)
  const [isrequest,setisrequest] = useState(false)
  const[isopen,setisopen] = useState(false)
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/room/rooms/${id}`);
        if (res.data) {

          setdata(res.data.existroom);

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
      
      {isrequest && ( 
        <form className="px-10 shadow-xl absolute rounded-md mt-20 ml-100 bg-white">
                  <div className="py-5">
                  
                    <p className="font-medium text-sm text-gray-700 text-start overflow-hidden">
                      Are you interested in this property? Don't wait book it by filling the details.
                    </p>
                    
                      <div className="mt-4">
                        <label className="text-md font-medium text-slate-800" htmlFor="">FullName</label>
                        <input type="text"
                    className="px-4 mt-2 py-2 w-full border-sky-500 border-2 rounded-sm outline-none"
                    placeholder="your name" 
                    required/>
                      </div>

                      <div className="mt-4">
                        <label className="text-md font-medium text-slate-800" htmlFor="">Email</label>
                        <input type="text"
                    className="px-4 mt-2 py-2 w-full border-sky-500 border-2 rounded-sm outline-none"
                    placeholder="email" required />
                      </div>

                      <div className="mt-4">
                        <label className="text-md font-medium text-slate-800" htmlFor="">Contact no</label>
                        <input type="text"
                    className="px-4 mt-2 py-2 w-full border-sky-500 border-2 rounded-sm outline-none"
                    placeholder="Contact no" required />
                      </div>

                      <div className="mt-4">
                        <label className="text-md font-medium text-slate-800" htmlFor="">Address</label>
                        <input type="text"
                    className="px-4 mt-2 py-2 w-full border-sky-500 border-2 rounded-sm outline-none"
                    placeholder="address" required/>
                      </div>
                        
                    <div className="mt-4 flex justify-between">
                      <button className="text-sm px-4 py-2 font-medium bg-sky-500 text-white rounded-sm">Request</button>
                       <button
       onClick={()=>setisrequest(false)}
       className="text-sm  px-4 py-2 font-medium border-1  text-red-500 rounded-sm">Cancel Booking</button>
                    </div>
                    
                    


                  </div>
                </form>)}

        {data ? (
          <div>

            <div className="flex  justify-between">
            <div className=" flex-1 w-1/2 justify-center items-center">
              <img src={data.images[0]}
                alt=""
                className="w-full h-100  object-contain rounded-md" />
              
              <div className=" flex mt-2 w-full items-center justify-center gap-10">
                <button className="text-sm px-4 py-2 font-medium bg-sky-500 text-white rounded-sm">Prev</button>
                  <button className="text-sm px-4 py-2 font-medium text-sky-500 border border-sky-600 rounded-sm">Next</button>

                </div>
            </div>
             

              <div className=" w-1/2  pl-30 overflow-y-visible gap-10 py-10">
               
                

                <div className=" items-center ">
                   {/* landlords profile */}
                <div className="shadow-md px-5 items-center rounded-md  py-3 gap-3 flex">
                  <img src="https://static-cse.canva.com/blob/1911653/tools_transparent-background_promo-showcase_01-AFTER.jpg" 
                  className="rounded-full h-14 w-14" alt="" />
                  <div className="">
                    <span className="text-md block font-medium text-slate-800">Alex jenda</span>
                    <span className="text-sm font-medium text-gray-500">alexjenda@gmail.com</span>

                  </div>

                  <div>
                    <span onClick={()=>setisopen(true)} className="text-sm font-medium text-bold text-gray-900">....</span>
                     {isopen && (
                      <div>
                        <button className="px-4 py-2 bg-slate-200 font-medium">
                         Contact
                     </button>
                      </div>
                     )}
                  </div>
                </div>

                  <h1 className="text-3xl mt-4 font-bold text-slate-700">{data.roomtitle}</h1>
              
                 <div className="flex py-5 gap-2 items-center">
                <FaLocationDot color="grey" />
                <span className="text-lg font-semibold">{data.address}</span>
                 </div>

                  <span className="text-2xl py-5 font-semibold text-slate-800">About This Room:</span>
                  <p className="text-md py-2 font-medium text-gray-600">{data.description}</p>
                
                <div className="mt-2">
                <h1 className="text-xl font-semibold text-slate-900">Features:</h1>
                <div className="flex gap-2 flex-wrap">
                  {data.features?.map((feature, i) => (
                    <span key={i} className="text-md text-gray-700 font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex gap-10">
           <button 
           onClick={()=>setisrequest(true)}
           className="text-sm mt-4 px-4 py-2 font-medium bg-sky-500 text-white rounded-sm">Request to book</button>
       <button
       onClick={()=>setisrequest(false)}
       className="text-sm mt-4 px-4 py-2 font-medium border-1  text-red-500 rounded-sm">Cancel Booking</button>

                </div>
              </div>
                

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