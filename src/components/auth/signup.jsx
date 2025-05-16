import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoHomeSharp } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import{useSelector,useDispatch} from 'react-redux' 
import { registerUser } from "../redux/authredux";

function Signup() {

 const dispatch = useDispatch()
//  const{loading,error} = useSelector((state)=>state.auth)

    const[formdata,setformdata] = useState({
       username:"",
       email:"",
       password:""
    })

const handleSubmit = (e)=>{
e.preventDefault()
console.log(formdata)
dispatch(registerUser(formdata))
}


    return (
        <div className="lg:h-screen flex items-center justify-center bg-blue-200">

            <div className="bg-white mx-40 w-1/3 rounded-2xl">

                <div className=" p-5">
                    <div className="p-10">
                        <div className="items-center flex gap-2">
                            <IoHomeSharp size={26} color="blue" /> <h1 className="text-2xl font-medium  text-blue-600"> MeroRoom</h1>
                        </div>
                        <span className="text-md font-medium text-gray-600">Join us by creating account</span>

                        <form onSubmit={handleSubmit} className="mt-10">
                            <div className="mt-5   flex flex-col">
                                <label className="text-md font-medium text-gray-500" htmlFor="">Username</label>
                                <div className="mt-2 flex flex-row items-center bg-slate-50 shadow-gray-300 rounded-md shadow-sm ">
                                    <span className="pl-3">
                                        <IoPerson size={22} color="gray" aria-hidden="true" />
                                    </span>
                                    <input
                                        type="text"
                                        className="p-3 w-full bg-transparent text-sm font-medium placeholder-gray-400 outline-none"
                                        placeholder="Enter your name"
                                        aria-label="your sweet name"
                                        name="username"
                                        value={formdata.username}
                                        onChange={(e)=>setformdata({...formdata,username:e.target.value})}
                                    />
                                </div>
                            </div>


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
                                        value={formdata.email}
                                        onChange={(e)=>setformdata({...formdata,email:e.target.value})}
                                    />
                                </div>
                            </div>



                            <div className="mt-5 flex flex-col">
                                <div className="flex flex-row justify-between items-center">
                                    <label className="text-md font-medium text-gray-500" htmlFor="">Password</label>
                                    <a  className="text-md font-medium text-blue-600 capitalize">forget password?</a>
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
                                        name="username"
                                        value={formdata.password}
                                        onChange={(e)=>setformdata({...formdata,password:e.target.value})}
                                    />
                                </div>
                            </div>

                            <div className="mt-7 w-full">
                                <button type="submit" className="text-lg capitalize w-full p-3 rounded-md font-medium bg-blue-500 text-white">Signu up</button>
                            </div>
                            <div className="mt-3 flex justify-center ">
                                <Link to="/login">
                              
                                <span className=" text-center text-gray-800 font-medium text-md">already have an account <span className="text-blue-400 font-medium">signin</span></span>
                              </Link>
                            </div>

                        </form>


                    </div>
                </div>
            </div>


        </div>
    )
}

export default Signup