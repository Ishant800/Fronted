import { useState } from "react";

import { FaCamera } from "react-icons/fa";
import Navabar from "../navbar/navbar";
import Footer from "../footer/footer";
import { useDispatch } from "react-redux";
import { userupdateDetails } from "../redux/thunk/auththunk";
import { showErrorToast, showSuccessToast } from "../toastutils/toast";

function UpdateProfile() {
  const dispatch = useDispatch()
  const [profileData, setProfileData] = useState({
    fullName: "",
    Phone_no: "",
    bio: "",
    city: "",
    country: "",
    Zip_code: "",
  });

  const [profilePic, setProfilePic] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(profileData).forEach(([key, val]) => {
      if (val) formData.append(key, val);
    });
    if (profilePic) formData.append("profile_pic", profilePic);
     
   const matched = await dispatch(userupdateDetails(formData))
   if(userupdateDetails.fulfilled.match(matched)){
    showSuccessToast("user details update sucessfully")
   }
   else{
    showErrorToast("user details update failed")
   }
  };

  return (
  <div className="min-h-screen flex flex-col bg-gray-100">
    <Navabar/>
   
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Update Profile</h2>

     
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200">
            <img
              src={
                preview ||
                "https://www.gravatar.com/avatar/?d=mp&f=y" 
              }
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <label className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow cursor-pointer">
              <FaCamera />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={profileData.fullName}
            onChange={handleInputChange}
            className="mt-1 w-full border px-4 py-2 rounded-md bg-gray-50"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            type="text"
            name="Phone_no"
            value={profileData.Phone_no}
            onChange={handleInputChange}
            className="mt-1 w-full border px-4 py-2 rounded-md bg-gray-50"
          />
        </div>

        {/* Bio */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Bio</label>
          <textarea
            name="bio"
            rows={3}
            value={profileData.bio}
            onChange={handleInputChange}
            className="mt-1 w-full border px-4 py-2 rounded-md bg-gray-50"
          ></textarea>
        </div>

        {/* City / Country / Zip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium">City</label>
            <input
              type="text"
              name="city"
              value={profileData.city}
              onChange={handleInputChange}
              className="mt-1 w-full border px-4 py-2 rounded-md bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Country</label>
            <input
              type="text"
              name="country"
              value={profileData.country}
              onChange={handleInputChange}
              className="mt-1 w-full border px-4 py-2 rounded-md bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">ZIP Code</label>
            <input
              type="text"
              name="Zip_code"
              value={profileData.Zip_code}
              onChange={handleInputChange}
              className="mt-1 w-full border px-4 py-2 rounded-md bg-gray-50"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
    <Footer/>
     </div>
  );
}

export default UpdateProfile;
