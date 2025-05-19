// import { IoHomeSharp } from "react-icons/io5";
// import { MdTitle } from "react-icons/md";
// import { FaListUl, FaMapMarkedAlt, FaCity } from "react-icons/fa";
// import { BiRuler } from "react-icons/bi";
// import { FaImage } from "react-icons/fa6";
// import { BsInfoCircle } from "react-icons/bs";
// import { MdOutlineLocationOn } from "react-icons/md";
// import { RiMoneyDollarCircleLine } from "react-icons/ri";
// import { useState } from "react";

// function Addroom() {
//   const [roomData, setRoomData] = useState({
//     title: "",
//     category: "",
//     size: "",
//     images: null,
//     description: "",
//     status: "available",
//     features: "",
//     location: "",
//     city: "",
//     address: "",
//     country: "",
//     room_price_monthly: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "images") {
//       setRoomData({ ...roomData, [name]: files[0] });
//     } else {
//       setRoomData({ ...roomData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(roomData);
//     // Submit logic here
//   };

//   return (
//     <div className="lg:h-full flex items-center justify-center bg-blue-200 py-10">
//       <div className="bg-white w-1/2 rounded-2xl">
//         <div className="p-10">
//           <div className="flex items-center gap-2 mb-5">
//             <IoHomeSharp size={26} color="blue" />
//             <h1 className="text-2xl font-medium text-blue-600">MeroRoom</h1>
//           </div>
//           <span className="text-md font-medium text-gray-600">List your room here</span>

//           <form onSubmit={handleSubmit} className="mt-8 space-y-5">

//             {/* Title */}
//             <FormGroup label="Title" icon={<MdTitle />}>
//               <input
//                 type="text"
//                 name="title"
//                 value={roomData.title}
//                 onChange={handleChange}
//                 placeholder="Enter related title"
//                 className="form-input"
//               />
//             </FormGroup>

//             {/* Categories */}
//             <FormGroup label="Categories" icon={<FaListUl />}>
//               <select
//                 name="category"
//                 value={roomData.category}
//                 onChange={handleChange}
//                 className="form-input"
//               >
//                 <option value="">Select category</option>
//                 <option value="singleroom">Single Room</option>
//                 <option value="double bed room">Double Bed Room</option>
//                 <option value="apartment">Apartment</option>
//                 <option value="office">Office</option>
//               </select>
//             </FormGroup>

//             {/* Room Size */}
//             <FormGroup label="Room Size" icon={<BiRuler />}>
//               <input
//                 type="text"
//                 name="size"
//                 value={roomData.size}
//                 onChange={handleChange}
//                 placeholder="220sq/ft"
//                 className="form-input"
//               />
//             </FormGroup>

//             {/* Upload Images */}
//             <FormGroup label="Upload your images" icon={<FaImage />}>
//               <input
//                 type="file"
//                 name="images"
//                 onChange={handleChange}
//                 className="form-input"
//               />
//             </FormGroup>

//             {/* Description */}
//             <FormGroup label="Description" icon={<BsInfoCircle />}>
//               <input
//                 type="text"
//                 name="description"
//                 value={roomData.description}
//                 onChange={handleChange}
//                 placeholder="Provide some information..."
//                 className="form-input"
//               />
//             </FormGroup>

//             {/* Status (Radio Buttons) */}
//             <div>
//               <label className="text-md font-medium text-gray-500 mb-2 block">Status</label>
//               <div className="flex gap-6">
//                 {["available", "booked", "pending"].map((status) => (
//                   <label key={status} className="flex items-center gap-2 text-gray-600">
//                     <input
//                       type="radio"
//                       name="status"
//                       value={status}
//                       checked={roomData.status === status}
//                       onChange={handleChange}
//                     />
//                     {status.charAt(0).toUpperCase() + status.slice(1)}
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Features */}
//             <FormGroup label="Features" icon={<BsInfoCircle />}>
//               <input
//                 type="text"
//                 name="features"
//                 value={roomData.features}
//                 onChange={handleChange}
//                 placeholder="Wi-Fi, TV, Balcony"
//                 className="form-input"
//               />
//             </FormGroup>

//             {/* Location */}
//             <FormGroup label="Location (Google Map Link)" icon={<FaMapMarkedAlt />}>
//               <input
//                 type="text"
//                 name="location"
//                 value={roomData.location}
//                 onChange={handleChange}
//                 placeholder="Google Map Link"
//                 className="form-input"
//               />
//             </FormGroup>

//             {/* City */}
//             <FormGroup label="City" icon={<FaCity />}>
//               <input
//                 type="text"
//                 name="city"
//                 value={roomData.city}
//                 onChange={handleChange}
//                 placeholder="Kathmandu"
//                 className="form-input"
//               />
//             </FormGroup>

//             {/* Address */}
//             <FormGroup label="Address" icon={<MdOutlineLocationOn />}>
//               <input
//                 type="text"
//                 name="address"
//                 value={roomData.address}
//                 onChange={handleChange}
//                 placeholder="Hamro Bazar back side"
//                 className="form-input"
//               />
//             </FormGroup>

//             {/* Country */}
//             <FormGroup label="Country" icon={<MdOutlineLocationOn />}>
//               <input
//                 type="text"
//                 name="country"
//                 value={roomData.country}
//                 onChange={handleChange}
//                 placeholder="Nepal"
//                 className="form-input"
//               />
//             </FormGroup>

//             {/* Price */}
//             <FormGroup label="Room Price (Monthly)" icon={<RiMoneyDollarCircleLine />}>
//               <input
//                 type="text"
//                 name="room_price_monthly"
//                 value={roomData.room_price_monthly}
//                 onChange={handleChange}
//                 placeholder="$200"
//                 className="form-input"
//               />
//             </FormGroup>

//             {/* Submit Button */}
//             <div>
//               <button type="submit" className="text-lg capitalize w-full p-3 rounded-md font-medium bg-blue-500 text-white">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// const FormGroup = ({ label, icon, children }) => (
//   <div>
//     <label className="text-md font-medium text-gray-500 block mb-2">{label}</label>
//     <div className="flex items-center bg-slate-50 shadow-gray-300 rounded-md shadow-sm px-3">
//       <span className="pr-2">{icon}</span>
//       {children}
//     </div>
//   </div>
// );

// export default Addroom;


 

import { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import axios from "axios";

function Addroom() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    size: "",
    description: "",
    status: "available",
    features: "",
    location: "",
    city: "",
    address: "",
    country: "",
    price: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      if (files.length > 4) {
        alert("You can upload a maximum of 4 images");
        return;
      }
      setFormData({ ...formData, images: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    for (const key in formData) {
      if (key === "images") {
        formData.images.forEach((image) => {
          data.append("images", image);
        });
      } else {
        data.append(key, formData[key]);
      }
    }

    try {
      const res = await axios.post("http://localhost:5000/room/addroom", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true, // if your backend uses cookies for auth
      });

      alert("Room added successfully!");
      console.log(res.data);

      // Optional: reset the form
      setFormData({
        title: "",
        category: "",
        size: "",
        description: "",
        status: "available",
        features: "",
        location: "",
        city: "",
        address: "",
        country: "",
        price: "",
        images: [],
      });
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Room upload failed. Check console for details.");
    }
  };

  return (
    <div className="lg:h-full flex items-center justify-center bg-blue-200 py-10">
      <div className="bg-white w-full max-w-3xl rounded-2xl p-10 shadow-md">
        <div className="flex items-center gap-2 mb-6">
          <IoHomeSharp size={26} color="blue" />
          <h1 className="text-2xl font-semibold text-blue-600">
            List Your Room in MeroRoom
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <FormField
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter related title"
          />

          {/* Category */}
          <div className="mb-5">
            <label className="text-md font-medium text-gray-700">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-3 bg-slate-100 rounded-md mt-2 outline-none"
            >
              <option value="">Select Category</option>
              <option value="singleroom">Single Room</option>
              <option value="double bed room">Double Bed Room</option>
              <option value="apartment">Apartment</option>
              <option value="office">Office</option>
            </select>
          </div>

          {/* Room Size */}
          <FormField
            label="Room Size"
            name="size"
            value={formData.size}
            onChange={handleChange}
            placeholder="220sq/ft"
          />

          {/* Image Upload */}
          <div className="mb-5">
            <label className="text-md font-medium text-gray-700">
              Upload Images (max 4)
            </label>
            <input
              type="file"
              name="images"
              multiple
              accept="image/*"
              onChange={handleChange}
              className="w-full p-3 bg-slate-100 rounded-md mt-2 outline-none"
            />
          </div>

          {/* Description */}
          <FormField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Provide some information..."
          />

          {/* Status */}
          <div className="mb-5">
            <label className="text-md font-medium text-gray-700">Status</label>
            <div className="flex gap-6 mt-2">
              {["available", "booked", "pending"].map((status) => (
                <label key={status} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="status"
                    value={status}
                    checked={formData.status === status}
                    onChange={handleChange}
                  />
                  <span className="capitalize text-gray-600">{status}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Features */}
          <FormField
            label="Features"
            name="features"
            value={formData.features}
            onChange={handleChange}
            placeholder="e.g. WiFi, AC, Balcony"
          />

          {/* Location */}
          <FormField
            label="Location (Google Map link)"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Share Google map location"
          />

          {/* City */}
          <FormField
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="e.g. Kathmandu"
          />

          {/* Address */}
          <FormField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="e.g. Hamro Bazar Back Side"
          />

          {/* Country */}
          <FormField
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="e.g. Nepal"
          />

          {/* Price */}
          <FormField
            label="Monthly Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="$200"
          />

          {/* Submit */}
          <div className="mt-7">
            <button
              type="submit"
              className="w-full p-3 text-white font-medium text-lg rounded-md bg-blue-500 hover:bg-blue-600 transition"
            >
              Submit Room Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Reusable input component
function FormField({ label, name, value, onChange, placeholder }) {
  return (
    <div className="mb-5">
      <label className="text-md font-medium text-gray-700">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-3 bg-slate-100 rounded-md mt-2 outline-none"
      />
    </div>
  );
}

export default Addroom;
