import { IoPerson, IoHomeSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";
import { usersignup } from "../redux/thunk/auththunk";
import { useDispatch } from "react-redux";
import { showErrorToast, showSuccessToast } from "../toastutils/toast";


function Signup() {
  const dispatch = useDispatch();

  const [formdata, setformdata] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata)
    
   const matched =  dispatch(usersignup(formdata));
   if(usersignup.fulfilled.match(matched)){
    showSuccessToast("sucessfully signup")
   }
   else{
    showErrorToast("failed to create account")
   }
   
  
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-lg p-6 sm:p-8 shadow-md">
        <div className="flex items-center justify-center mb-4 gap-2">
          <IoHomeSharp size={30} className="text-blue-500" />
          <h2 className="text-xl font-semibold text-gray-700">MeroRoom</h2>
        </div>

        <p className="text-sm text-center text-gray-600 mb-6">
          Welcome to <span className="text-blue-400 font-semibold">MeroRoom!</span> Create your account
        </p>

        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">Username</label>
            <div className="flex items-center bg-slate-50 rounded-md shadow-sm">
              <span className="pl-3">
                <IoPerson size={22} className="text-gray-500" />
              </span>
              <input
                type="text"
                name="username"
                value={formdata.username}
                onChange={(e) => setformdata({ ...formdata, username: e.target.value })}
                placeholder="Enter your name"
                className="p-3 w-full bg-transparent text-sm placeholder-gray-400 outline-none"
              />
            </div>
          </div>

   
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">Email</label>
            <div className="flex items-center bg-slate-50 rounded-md shadow-sm">
              <span className="pl-3">
                <MdEmail size={22} className="text-gray-500" />
              </span>
              <input
                type="email"
                name="email"
                value={formdata.email}
                onChange={(e) => setformdata({ ...formdata, email: e.target.value })}
                placeholder="email@gmail.com"
                className="p-3 w-full bg-transparent text-sm placeholder-gray-400 outline-none"
              />
            </div>
          </div>


          <div className="mb-4">
            <div className="flex justify-between">
              <label className="block text-gray-600 font-medium mb-1">Password</label>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="flex items-center bg-slate-50 rounded-md shadow-sm">
              <span className="pl-3">
                <RiLockPasswordLine size={22} className="text-gray-500" />
              </span>
              <input
                type="password"
                name="password"
                value={formdata.password}
                onChange={(e) => setformdata({ ...formdata, password: e.target.value })}
                placeholder="***********"
                className="p-3 w-full bg-transparent text-sm placeholder-gray-400 outline-none"
              />
            </div>
          </div>

        
          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-md transition"
          >
            Sign up
          </button>

          
          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
