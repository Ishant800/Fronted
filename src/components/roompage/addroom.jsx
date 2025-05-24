import { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addRoom } from "../redux/roomredux";
import { toast } from 'react-toastify';

function Addroom() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    roomtitle: "",
    categories: "",
    roomsize: "",
    description: "",
    status: "available",
    features: "",
    location: "", // Added location field
    city: "",
    address: "",
    country: "Nepal",
    room_price_monthly: "",
    available_from: "", // Fixed typo
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      if (file) {
        setImage(file);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('user');
    if (!token) {
      toast.error("Please log in to add a room", {
        hideProgressBar: true,
        autoClose: 2000,
        closeButton: false,
        draggable: false,
        pauseOnHover: false,
      });
      return;
    }

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (image) {
      data.append("images", image);
    }

    const Matched = await dispatch(addRoom(data));
    if (addRoom.fulfilled.match(Matched)) {
      toast.success("Room added successfully", {
        hideProgressBar: true,
        autoClose: 2000,
        closeButton: false,
        draggable: false,
        pauseOnHover: false,
      });
      setFormData({
        roomtitle: "",
        categories: "",
        roomsize: "",
        description: "",
        status: "available",
        features: "",
        location: "",
        city: "",
        address: "",
        country: "Nepal",
        room_price_monthly: "",
        available_from: "",
      });
      setImage(null); // Reset image
    } else {
      toast.error(Matched.payload?.message || "Failed to add room", {
        hideProgressBar: true,
        autoClose: 2000,
        closeButton: false,
        draggable: false,
        pauseOnHover: false,
      });
    }
  };

  return (
    <div className="bg-slate-200 w-full max-w-3xl rounded-2xl p-10 shadow-md">
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
          name="roomtitle"
          value={formData.roomtitle}
          onChange={handleChange}
          placeholder="Enter related title"
        />

        {/* Category */}
        <div className="mb-5">
          <label className="text-md font-medium text-gray-700">Category</label>
          <select
            name="categories"
            value={formData.categories}
            onChange={handleChange}
            className="w-full p-3 bg-slate-100 rounded-md mt-2 outline-none"
          >
            <option value="">Select Category</option>
            <option value="single bed">Single Bed</option>
            <option value="double bed">Double Bed</option>
            <option value="apartment">Apartment</option>
            <option value="office">Office</option>
            <option value="flat">Flat</option>
          </select>
        </div>

        {/* Room Size */}
        <FormField
          label="Room Size"
          name="roomsize"
          value={formData.roomsize}
          onChange={handleChange}
          placeholder="220sq/ft"
        />

        {/* Image Upload */}
        <div className="mb-5">
          <label className="text-md font-medium text-gray-700">Upload Images</label>
          <input
            type="file"
            name="images"
            className="px-4 py-2 w-full cursor-auto bg-slate-100 rounded-md"
            onChange={handleChange}
            accept="image/jpeg,image/png,image/jpg"
          />
          {image && (
            <div className="mt-2">
              <span>{image.name}</span>
              <button
                type="button"
                onClick={removeImage}
                className="ml-4 text-red-500"
              >
                Remove
              </button>
            </div>
          )}
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
            {["available", "booked"].map((status) => (
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
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="e.g. Near City Center"
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

        {/* Price */}
        <FormField
          label="Monthly Price"
          name="room_price_monthly"
          value={formData.room_price_monthly}
          onChange={handleChange}
          placeholder="$200"
        />

        {/* Available From */}
        <div className="mb-5">
          <label className="text-md font-medium text-gray-700">Available From</label>
          <input
            type="date"
            className="w-full p-3 bg-slate-100 rounded-md mt-2 outline-none"
            name="available_from"
            onChange={handleChange}
            value={formData.available_from}
          />
        </div>

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
  );
}

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