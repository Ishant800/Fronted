import { LiaUserEditSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

function Profile() {
const userdetails = JSON.parse(localStorage.getItem("user"))
  const username = userdetails.user.username
  return (
    <div className="h-full ">
        <div className="px-10 py-5">
            
            <div className="pt-2 w-1/4 flex-col  justify-center items-center bg-slate-100 rounded-2xl">
               <div className="flex justify-between px-4 items-center">
               <h1 className="text-center text-xl font-semibold">Profile</h1>
               <LiaUserEditSolid size={20} color="blue"/>
               </div>
               
               <div className=" p-5">
                    <img src="https://images.pexels.com/photos/32086958/pexels-photo-32086958/free-photo-of-elegant-woman-in-a-red-dress-posing-indoors.jpeg?auto=compress&cs=tinysrgb&w=600" 
                className="h-50 w-full object-cover rounded-xl"
                alt="" />
                     <span className="text-lg w-full text-cyan-400  inline-block text-center capitalize pt-3 font-bold">{username}</span>
                      <span className="text-md w-full items-center gap-2 text-start pt-3 font-medium flex"><MdEmail/> {userdetails.user.email}</span>
                     <span className="text-md w-full text-gray-500 items-center gap-2 text-start pt-3 flex  font-semibold"><CiLocationOn color="black" width={700}/> New York ,London</span>
                      <span className="text-sm text-gray-600 w-full inline-block text-start pt-3 font-semibold">Hi i am a software engineer</span>
                      <span className="text-md  w-full inline-block text-start pt-3 font-semibold">total account: $2000</span>
               </div>
           </div>

        


        </div>
    </div>
  )
}

export default Profile