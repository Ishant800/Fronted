import { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addRoom } from "../redux/roomredux";
import { toast } from "react-toastify";

function Addroom() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    roomtitle: "",
    categories: "",
    roomsize: "",
    description: "",
    features: "",
    location: "",
    city: "",
    address: "",
    country: "Nepal",
    room_price_monthly: "",
    available_from: "",
  });

  const [files, setFiles] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const Files = e.target.files;
    setFiles((prevFiles) => [...prevFiles, ...Files]);
  };

  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (files.length === 0) {
      toast.error("Please upload at least one image");
      return;
    }

    const data = new FormData();

    // Append formData fields to FormData
    for (const key in formData) {
      if (formData[key]) {
        data.append(key, formData[key]);
      }
    }

    // Append image files
    files.forEach((file) => data.append("images", file));

    

    try {
      const res = await dispatch(addRoom(data));

      if (addRoom.fulfilled.match(res)) {
        toast.success("Room added successfully!",{
           hideProgressBar:true,
    autoClose:2000,
    closeButton:false,
    draggable:false,
    pauseOnHover:false,
        });
        setFormData({
          roomtitle: "",
          categories: "",
          roomsize: "",
          description: "",
          features: "",
          location: "",
          city: "",
          address: "",
          country: "Nepal",
          room_price_monthly: "",
          available_from: "",
        });
        setFiles([]);
      } else {
        throw new Error(res.payload?.message || "Something went wrong");
      }
    } catch (err) {
      toast.error(err.message,{
        hideProgressBar:true,
    autoClose:2000,
    closeButton:false,
    draggable:false,
    pauseOnHover:false,
      });
    }
  };

  return (
    <div className="bg-white max-w-xl rounded-2xl p-5 shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <IoHomeSharp className="text-blue-600" />
        <h1 className="text-xl font-medium text-blue-600">Add Properties</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Title"
          name="roomtitle"
          value={formData.roomtitle}
          onChange={handleInputChange}
          placeholder="Enter related title"
        />

        <div className="mb-3">
          <label className="text-md font-medium text-gray-700">Category</label>
          <select
            name="categories"
            value={formData.categories}
            onChange={handleInputChange}
            className="w-full px-2 py-1.5 bg-slate-100 rounded-md mt-2 outline-none"
          >
            <option value="">Select Category</option>
            <option value="single bed">Single Bed</option>
            <option value="double bed">Double Bed</option>
            <option value="apartment">Apartment</option>
            <option value="office">Office</option>
            <option value="flat">Flat</option>
          </select>
        </div>

        <FormField
          label="Room Size"
          name="roomsize"
          value={formData.roomsize}
          onChange={handleInputChange}
          placeholder="220 sq/ft"
        />

        <div className="mb-3">
          <label className="text-md font-medium text-gray-700">Upload Images</label>
          <input
            type="file"
            name="files"
            multiple
            onChange={handleFileChange}
            className="px-4 py-2 w-full cursor-pointer bg-slate-100 rounded-md mt-2"
          />
          <ul className="mt-2">
            {files.map((file, index) => (
              <li key={index} className="flex justify-between items-center text-sm">
                {file.name}
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-red-500 ml-2"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        </div>

        <FormField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Provide room details"
        />

        <FormField
          label="Features"
          name="features"
          value={formData.features}
          onChange={handleInputChange}
          placeholder="e.g. WiFi, AC, Balcony"
        />

        <FormField
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          placeholder="e.g. Near City Center"
        />

        <div className="mb-3">
          <label className="text-md font-medium text-gray-700">City</label>
          <select
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full px-2 py-1.5 bg-slate-100 rounded-md mt-2 outline-none"
          >
            <option value="">Select City</option>
            <option value="Kathmandu">Kathmandu</option>
            <option value="Pokhara">Pokhara</option>
            <option value="Bhaktapur">Bhaktapur</option>
          </select>
        </div>

        <FormField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="e.g. Hamro Bazar Back Side"
        />

        <FormField
          label="Monthly Price"
          name="room_price_monthly"
          value={formData.room_price_monthly}
          onChange={handleInputChange}
          placeholder="e.g. 15000"
        />

        <div className="mb-3">
          <label className="text-md font-medium text-gray-700">Available From</label>
          <input
            type="date"
            name="available_from"
            value={formData.available_from}
            onChange={handleInputChange}
            className="w-full px-2 py-1.5 bg-slate-100 rounded-md mt-2 outline-none"
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="w-full px-2 py-1.5 text-white font-medium text-md rounded-md bg-blue-500 hover:bg-blue-600 transition"
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
    <div className="mb-3">
      <label className="text-md font-medium text-gray-700">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-2 py-1.5 bg-slate-100 rounded-md mt-1 outline-none text-sm"
      />
    </div>
  );
}

export default Addroom;