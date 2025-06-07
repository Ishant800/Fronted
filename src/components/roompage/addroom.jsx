import { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addrooms } from "../redux/thunk/roomthunks";
import Navabar from "../navbar/navbar";
import Footer from "../footer/footer";
import { useNavigate } from "react-router-dom";
import LeafletMap from "../404page/map";

function Addroom() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const [location, setLocation] = useState({ lat: 27.7172, lng: 85.3240 }); 

  const [formData, setFormData] = useState({
    roomtitle: "",
    categories: "",
    roomsize: "",
    description: "",
    features: "",
   
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
    const selectedFiles = e.target.files;
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
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
     data.append("location[lat]", location.lat);
  data.append("location[lng]", location.lng);

    for (const key in formData) {
      if (formData[key]) {
        data.append(key, formData[key]);
      }
    }
    files.forEach((file) => data.append("images", file));

    try {
      
      const res = await dispatch(addrooms(data));
      if (addrooms.fulfilled.match(res)) {
        navigate("/dashboard/listroom");
      } else {
        throw new Error(res.payload?.message || "Something went wrong");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="bg-blue-100 min-h-screen">
      <Navabar />

      <div className="max-w-3xl mb-10 mx-auto sm:px-4  mt-10 bg-white rounded-xl shadow-md p-8">
        <div className="flex items-center gap-2 mb-6">
          <IoHomeSharp size={28} className="text-blue-600" />
          <h2 className="text-xl font-semibold text-blue-600">List Your Room</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

     <h2>Select Room Location</h2>
      <LeafletMap location={location} setLocation={setLocation} />

      <p>Latitude: {location.lat}</p>
      <p>Longitude: {location.lng}</p>

          <div>
            <label className="text-sm font-medium text-gray-700">Room Title</label>
            <input
              type="text"
              name="roomtitle"
              value={formData.roomtitle}
              onChange={handleInputChange}
              placeholder="e.g. Spacious Deluxe Room"
              className="w-full mt-1 p-2 rounded-md bg-slate-100 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Room Category</label>
            <select
              name="categories"
              value={formData.categories}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 rounded-md bg-slate-100 outline-none"
            >
              <option value="">-- Select --</option>
              <option value="single bed">Single Bed</option>
              <option value="double bed">Double Bed</option>
              <option value="apartment">Apartment</option>
              <option value="office">Office</option>
              <option value="flat">Flat</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Room Size</label>
            <input
              type="text"
              name="roomsize"
              value={formData.roomsize}
              onChange={handleInputChange}
              placeholder="e.g. 220 sq ft"
              className="w-full mt-1 p-2 rounded-md bg-slate-100 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Upload Images</label>
            <input
              type="file"
              name="images"
              multiple
              onChange={handleFileChange}
              className="w-full mt-1 p-2 bg-slate-100 rounded-md"
            />
            {files.length > 0 && (
              <ul className="text-sm mt-2 space-y-1">
                {files.map((file, idx) => (
                  <li key={idx} className="flex justify-between items-center">
                    {file.name}
                    <button
                      type="button"
                      onClick={() => removeFile(idx)}
                      className="text-red-500 text-xs"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={3}
              placeholder="Describe the room..."
              className="w-full mt-1 p-2 rounded-md bg-slate-100 outline-none"
            ></textarea>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Features</label>
            <input
              type="text"
              name="features"
              value={formData.features}
              onChange={handleInputChange}
              placeholder="e.g. WiFi, AC, Balcony"
              className="w-full mt-1 p-2 rounded-md bg-slate-100 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">City</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 rounded-md bg-slate-100 outline-none"
            >
              <option value="">Select City</option>
              <option value="Kathmandu">Kathmandu</option>
              <option value="Pokhara">Pokhara</option>
              <option value="Bhaktapur">Bhaktapur</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Street, Area"
              className="w-full mt-1 p-2 rounded-md bg-slate-100 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Monthly Price (NPR)</label>
            <input
              type="number"
              name="room_price_monthly"
              value={formData.room_price_monthly}
              onChange={handleInputChange}
              placeholder="e.g. 15000"
              className="w-full mt-1 p-2 rounded-md bg-slate-100 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Available From</label>
            <input
              type="date"
              name="available_from"
              value={formData.available_from}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 rounded-md bg-slate-100 outline-none"
            />
          </div>

          <div className="flex justify-between gap-4 mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-medium"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => navigate("/dashboard/listroom")}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Addroom;
