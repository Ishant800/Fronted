
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoHomeSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/authredux";
import { Link } from "react-router-dom";
function Loginpage() {
    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.auth)
    const navigate = useNavigate()
    const [formdata,setformdata] = useState({
        email:"",
        password:""
    })

const handleSubmit =async(e)=>{
e.preventDefault()
const matched = await dispatch(loginUser(formdata)) 
if(loginUser.fulfilled.match(matched)){
  toast.success("Login Successful",{
    hideProgressBar:true,
    autoClose:2000,
    closeButton:false,
    draggable:false,
    pauseOnHover:false,
    

  });
  navigate("/")
}
 else {
 toast.error("Login Failed",{
    hideProgressBar:true,
    autoClose:2000,
    closeButton:false,
    draggable:false,
    pauseOnHover:false,
});
 }


}
    return (

        <div className="h-screen  overflow-x-hidden flex items-center justify-center bg-blue-200">
            <div className="bg-white mx-40 w-1/3 rounded-2xl">

                <div className=" p-5">
                    <div className="px-10 py-10">
                        <div className="items-center flex gap-2">
                            <IoHomeSharp size={26} color="blue" /> <h1 className="text-2xl font-medium  text-blue-600"> MeroRoom</h1>
                        </div>
                        <span className="text-md py-2 font-medium text-gray-600">Wellcome back again ! we are happy to see you again</span>

                        <form onSubmit={handleSubmit} className="mt-10">

                            <div className="mt-5   flex flex-col">
                                <label className="text-md font-medium text-gray-500" htmlFor="">Email</label>
                                <div className="mt-2 flex flex-row items-center bg-slate-50 shadow-gray-300 rounded-md shadow-sm ">
                                    <span className="pl-3">
                                        <MdEmail size={22} color="gray" aria-hidden="true" />
                                    </span>
                                    <input
                                        type="text"
                                        className="p-3 w-full bg-transparent text-sm font-medium placeholder-gray-400 outline-none"
                                        placeholder="email@gmail.com"
                                        aria-label="enter your email"
                                        name="email"
                                        required
                                        value={formdata.email}
                                        onChange={(e)=>setformdata({...formdata,email:e.target.value})}
                                    />
                                </div>
                            </div>

                            <div className="mt-5 flex flex-col">
                                <div className="flex flex-row justify-between items-center">
                                    <label className="text-md font-medium text-gray-500" htmlFor="">Password</label>
                                    <a href="" className="text-md font-medium text-blue-600 capitalize">forget password?</a>
                                </div>

                                <div className="mt-2 flex flex-row items-center bg-slate-50 shadow-gray-300 rounded-md shadow-sm ">
                                    <span className="pl-3">
                                        <RiLockPasswordLine size={22} color="gray" aria-hidden="true" />
                                    </span>
                                    <input
                                        type="password"
                                        className="p-3 w-full bg-transparent text-sm font-medium placeholder-gray-400 outline-none"
                                        placeholder="*************"
                                        aria-label="enter your strong password"
                                        name="emial"
                                        required
                                        value={formdata.password}
                                        onChange={(e)=>setformdata({...formdata,password:e.target.value})}
                                    />
                                </div>

                            </div>

                            <div className="mt-7 w-full">
                                <button type="submit" className="text-lg capitalize w-full p-3 rounded-md font-medium bg-blue-500 text-white">Sign in</button>
                            </div>
                            <Link to='/signup'>
                               <span className="text-gray-500 px-20 text-center text-sm font-medium py-3">Dont have an account <span className="text-blue-500">signup</span> </span>
                               </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loginpage