import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoHomeSharp } from "react-icons/io5";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginuser } from "../redux/thunk/auththunk";
import { showErrorToast, showSuccessToast } from "../toastutils/toast";


function Loginpage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const matched = await dispatch(loginuser(formdata));
    if (loginuser.fulfilled.match(matched)) {
      showSuccessToast("login sucessfull")
      
      
      navigate("/");
    } else {
      showErrorToast("failed to login")
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 sm:p-8">
        <div className="flex items-center gap-2 justify-center mb-4">
          <IoHomeSharp size={26} className="text-blue-500" />
          <h1 className="text-2xl font-medium text-blue-600">MeroRoom</h1>
        </div>

        <p className="text-center text-md font-medium text-gray-600 mb-6">
          Welcome back! We're happy to see you again.
        </p>

        <form onSubmit={handleSubmit}>
         
          <div className="mb-4 pt-2">
            <label className="text-sm font-medium text-gray-600 block mb-1">Email</label>
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
                required
              />
            </div>
          </div>

         
          <div className="mb-4 pt-6">
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium text-gray-600">Password</label>
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
                placeholder="*************"
                className="p-3 w-full bg-transparent text-sm placeholder-gray-400 outline-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-5 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-md transition"
          >
            Sign in
          </button>

          <p className="text-sm text-center text-gray-600 mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Loginpage;
