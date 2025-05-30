import { useEffect, useState } from "react"
import { FaUsers } from "react-icons/fa"
import axios from 'axios'

function Maincontent() {

const [data,setdata] = useState([])


const [totalusers,settotalusers] = useState([])
useEffect(()=>{
   if(totalusers.length === 0){
      fetchusersdata()
   }
   if(data.length=== 0){
      fetchusersrequest()
   }
})


const fetchusersdata = async()=>{
   try {
     
      const res = await axios.get("http://localhost:5000/auth/users")
      if(res.data) {
         settotalusers(res.data.users)
      }
   } catch (error) {
      alert("no users found ")
   }
}

const fetchusersrequest = async()=>{
   try {
     const token = localStorage.getItem("user")
     console.log(token)
      const res = await axios.post("http://localhost:5000/room/usersbookinglist",{},{
         headers: {
                Authorization: `Bearer ${token}`
            }
      }) 
      if(res.data) {
         setdata(res.data.data)
      }
   } catch (error) {
      alert("no booking request from users ")
   }
}



return (
    <div className="px-10 bg-slate-100 py-5">
       <h2 className="text-gray-700 text-xl py-5 font-semibold">Dashboard Overview </h2>
     
     <div className="flex justify-between items-center">

        <div className="px-5 bg-white gap-2 flex items-center rounded-xl">
          
           <div className="flex-col pb-2 justify-between">
            <span className="text-md block font-medium py-3 px-5">Total Users</span>
             <span className="text-gray-600 text-md   px-5 font-bold">{totalusers.length}+</span>
           </div>
           <div className="py-3 px-3 bg-slate-100 rounded-full">
                <FaUsers size={20} color="blue"/>
           </div>
          
           
        </div>
     </div>


      <div className="flex mt-5 items-center justify-between">
 <h1 className="text-md font-medium text-gray-500">
            Users request for room booking 
          </h1>
          <span className="text-md font-medium text-gray-500">Totals request: 24</span>
      </div>
         
   
       <div className="grid grid-cols-7 bg-blue-50  gap-5 py-2">
          <div className="text-md font-semibold capitalize">Roomid</div>
          
          <div className="text-md font-semibold capitalize">Roomlocation</div>
          <div className="text-md font-semibold capitalize">usersid</div>
          <div className="text-md font-semibold capitalize">useremail</div>
          
          <div className="text-md font-semibold capitalize">username</div>
          <div className="text-md font-semibold capitalize">contact no</div>
           <div className="text-md font-semibold capitalize">Actions</div>

        </div>

         {data.map((item,index)=>(
         <div key={index} className="grid grid-cols-7 nth-[odd]:bg-sky-100 bg-blue-50  gap-5 py-2">
              <div className="text-md font-medium text-gray-500">{item.roomid.slice(0,10)}</div>
              <div className="text-md font-medium text-gray-500">{item.roomlocation}</div>
                <div className="text-md font-medium text-gray-500">{item.usersid}</div>
              <div className="text-md font-medium text-gray-500">{item.useremail}</div>
            
              <div className="text-md font-medium text-gray-500">{item.username}</div>
              <div className="text-md font-medium text-gray-500">{item.contact}</div>
              <div className="flex gap-2">
               <button className="text-green-500 font-medium text-md">Accept</button>
               <button className="text-red-400 font-medium text-md">Decline</button>
              </div>
         </div>
         ))}


     
   
    </div>
  )
}

export default Maincontent