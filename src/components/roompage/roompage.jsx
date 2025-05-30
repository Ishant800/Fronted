import { FaLocationDot } from "react-icons/fa6"
import Navabar from "../navbar/navbar"
import { CiChat1 } from "react-icons/ci";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import {jwtDecode} from "jwt-decode";
import axios from "axios"
import { toast } from "react-toastify";
function Roompage() {
  const { id } = useParams()
  
 
  const [data, setdata] = useState(null)
  const [ownerid,setownerid] = useState(null)

 const [bookinginfo,setbookinginfo] = useState({
  username:"",
  userid:"",
  useremail:"",
  roomid:"",
  roomlocation:"",
  roomname:"",
  contactno:"",
 })


  const[ismessageshow,setismessageshow] = useState(false)
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/room/rooms/${id}`);
        if (res.data) {

          setdata(res.data.existroom);
          setownerid(res.data.existroom.userid)
          console.log(res.data.existroom.userid)
          console.log(res.data.existroom)

        }
      } catch (error) {
        alert(error);
      }
    };

    fetchdata();
  }, [id]);




const handlesubmit = async()=>{
  try {
    const token = localStorage.getItem("user")
 const user = jwtDecode(token)

setbookinginfo({
  username:user.username,
  ownerid:ownerid,
  useremail:user.email,
  roomid:data._id,
  roomlocation:data.location,
  roomname:data.roomtitle,
  contactno:"",

})

console.log(bookinginfo)

const res = await axios.post("http://localhost:5000/room/requestroom",bookinginfo,{
  headers: {
                  Authorization: `Bearer ${token}`
            }
})

if(res.status === 200){
  toast.success("booking request sucessfully waiting for landowners response",{
                 hideProgressBar:true,
          autoClose:2000,
          closeButton:false,
          draggable:false,
          pauseOnHover:false,
              });
}
  } catch (error) {
    alert(error)
  }
}


  return (
    <div className="relative">
      <Navabar />
      {ismessageshow && (
        <Messagebox setismessageshow={setismessageshow}/>
      )}
      <div className="h-full overflow-hidden px-20 pt-10 w-full">
      
      
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
                <div className="shadow-md px-5 w-1/2 items-center rounded-md  py-3 gap-3 flex">
                  <img src="https://static-cse.canva.com/blob/1911653/tools_transparent-background_promo-showcase_01-AFTER.jpg" 
                  className="rounded-full h-14 w-14" alt="" />
                  <div className="">
                    <span className="text-md block font-medium text-slate-800">Alex jenda</span>
                    <span className="text-sm font-medium text-gray-500">alexjenda@gmail.com</span>

                  </div>
                  <div className="" onClick={()=>setismessageshow(true)}>
                         <CiChat1 size={20}/>
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
           onClick={()=>handlesubmit()}
           className="text-sm mt-4 px-4 py-2 font-medium bg-sky-500 text-white rounded-sm">Request to book</button>
       <button
       
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

import { RxCross2 } from "react-icons/rx";
const Messagebox = ({ setismessageshow }) => {
  return (
    <div className="absolute bg-slate-100 shadow-md rounded-md right-1 bottom-2 w-96 h-96 flex flex-col">
      
      {/* Header */}
      <div className="bg-blue-200 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://static-cse.canva.com/blob/1911653/tools_transparent-background_promo-showcase_01-AFTER.jpg"
            className="rounded-full h-10 w-10"
            alt=""
          />
          <div>
            <span className="block font-medium text-slate-800">Alex jenda</span>
            <span className="text-sm font-medium text-gray-500">alexjenda@gmail.com</span>
            <span className="text-sm font-medium text-green-500"> online</span>
          </div>
        </div>
        <RxCross2 onClick={() => setismessageshow(false)} size={20} color="red" className="cursor-pointer" />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
        <p className="text-slate-700 text-start">hi</p>
        <p className="text-blue-500 text-end">hello</p>
      </div>

      {/* Input */}
      <div className="flex border-t border-gray-300 p-2">
        <input
          type="text"
          placeholder="type here ..."
          className="flex-1 px-4 py-2 border rounded-md outline-none"
        />
        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md font-medium">Send</button>
      </div>
    </div>
  );
};
