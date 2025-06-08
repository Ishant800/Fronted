import { LiaUserEditSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import { showErrorToast } from "../toastutils/toast";


function Profile() {
  const {userdetails} = useSelector((state)=>state.auth)
  if(userdetails.length < 0){
    showErrorToast("please refresh page one time")
  }
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl md:text-xl font-medium text-slate-900">Profile Overview</h1>
          <Link to="/updateprofiles">
         
          <button className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800">
            <LiaUserEditSolid size={20} />
            Edit Profile
          </button>
           </Link>
        </div>

       
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col lg:flex-row gap-6">
         
          <div className="w-full lg:w-1/3 flex flex-col items-center text-center">
            <img
            src={userdetails.profilepic || ""}
               alt="profile"
              className="w-40 h-40 rounded-full object-cover shadow-md"
            />
            <h2 className="text-xl font-semibold text-sky-600 mt-4 capitalize">{userdetails.name || "NAN"}</h2>
            <p className="flex items-center justify-center gap-2 text-gray-600 mt-2 text-sm">
              <MdEmail />
              {userdetails.email || "NAN"}
            </p>
            <p className="flex items-center justify-center gap-2 text-gray-500 mt-2 text-sm">
              <CiLocationOn />
             {userdetails.city || "NAN"}
            </p>
            <p className="mt-4 text-sm text-gray-600 px-4">
             {userdetails.bio || "NAN"}
            </p>
          </div>

          {/* Details Section */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-100 rounded-lg p-4 shadow-sm">
              <h3 className="text-md font-semibold text-gray-700 mb-2">Username</h3>
              <p className="text-sm text-gray-600">{userdetails.fullname || "NAN"}</p>
            </div>

            <div className="bg-slate-100 rounded-lg p-4 shadow-sm">
              <h3 className="text-md font-semibold text-gray-700 mb-2">Email</h3>
              <p className="text-sm text-gray-600">{userdetails.email || "NAN"} </p>
            </div>

            <div className="bg-slate-100 rounded-lg p-4 shadow-sm">
              <h3 className="text-md font-semibold text-gray-700 mb-2">Phone</h3>
              <p className="text-sm text-gray-600">{userdetails.phoneno || "NAN"}</p>
            </div>

            <div className="bg-slate-100 rounded-lg p-4 shadow-sm">
              <h3 className="text-md font-semibold text-gray-700 mb-2">Location</h3>
              <p className="text-sm text-gray-600">{userdetails.city || "NAN"}</p>
            </div>

            <div className="bg-slate-100 rounded-lg p-4 shadow-sm col-span-1 sm:col-span-2">
              <h3 className="text-md font-semibold text-gray-700 mb-2">Account Balance</h3>
              <p className="text-lg font-bold text-green-600">$2,000.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
