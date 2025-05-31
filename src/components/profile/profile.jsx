import { LiaUserEditSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-700">Profile Overview</h1>
          <button className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800">
            <LiaUserEditSolid size={20} />
            Edit Profile
          </button>
        </div>

        {/* Main Content */}
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col lg:flex-row gap-6">
          {/* Profile Info Card */}
          <div className="w-full lg:w-1/3 flex flex-col items-center text-center">
            <img
              src="https://images.pexels.com/photos/32086958/pexels-photo-32086958/free-photo-of-elegant-woman-in-a-red-dress-posing-indoors.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="profile"
              className="w-40 h-40 rounded-full object-cover shadow-md"
            />
            <h2 className="text-xl font-semibold text-sky-600 mt-4 capitalize">Alex Zenda</h2>
            <p className="flex items-center justify-center gap-2 text-gray-600 mt-2 text-sm">
              <MdEmail />
              alexzenda@gmail.com
            </p>
            <p className="flex items-center justify-center gap-2 text-gray-500 mt-2 text-sm">
              <CiLocationOn />
              New York, London
            </p>
            <p className="mt-4 text-sm text-gray-600 px-4">
              Hi, I’m a software engineer with a passion for building full-stack web apps and solving real-world problems.
            </p>
          </div>

          {/* Details Section */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-100 rounded-lg p-4 shadow-sm">
              <h3 className="text-md font-semibold text-gray-700 mb-2">Username</h3>
              <p className="text-sm text-gray-600">alexzenda_94</p>
            </div>

            <div className="bg-slate-100 rounded-lg p-4 shadow-sm">
              <h3 className="text-md font-semibold text-gray-700 mb-2">Email</h3>
              <p className="text-sm text-gray-600">alexzenda@gmail.com</p>
            </div>

            <div className="bg-slate-100 rounded-lg p-4 shadow-sm">
              <h3 className="text-md font-semibold text-gray-700 mb-2">Phone</h3>
              <p className="text-sm text-gray-600">+1 987 654 3210</p>
            </div>

            <div className="bg-slate-100 rounded-lg p-4 shadow-sm">
              <h3 className="text-md font-semibold text-gray-700 mb-2">Location</h3>
              <p className="text-sm text-gray-600">New York, London</p>
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
