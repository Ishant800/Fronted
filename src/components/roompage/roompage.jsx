import { FaLocationDot } from "react-icons/fa6";
import Navabar from "../navbar/navbar";
import { CiChat1 } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Roompage() {
  const { id } = useParams();
  const [data, setdata] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [ismessageshow, setismessageshow] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/room/rooms/${id}`);
        if (res.data) {
          setdata(res.data.existroom);
          setSelectedImage(res.data.existroom.images[0]); // Set default image
        }
      } catch (error) {
        alert(error);
      }
    };
    fetchdata();
  }, [id]);

  const handlesubmit = async () => {
    try {
      const token = localStorage.getItem("user");
      const bookingdata = {
        ownerid: data.userid,
        roomid: id,
      };
      const res = await axios.post("http://localhost:5000/room/requestroom", bookingdata, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        toast.success("Booking request sent successfully", {
          hideProgressBar: true,
          autoClose: 2000,
          closeButton: false,
          draggable: false,
          pauseOnHover: false,
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="relative">
      <Navabar />
      {ismessageshow && <Messagebox setismessageshow={setismessageshow} />}

      <div className="w-full px-4 md:px-20 py-10">
        {data ? (
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left image section */}
            <div className="w-full lg:w-1/2">
             <img
  src={selectedImage}
  alt="Room"
  className="w-full h-[400px] object-cover rounded-md shadow-md"
/>

              {/* Thumbnail images */}
              <div className="flex flex-wrap gap-2 mt-4">
                {data.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`thumb-${idx}`}
                    onClick={() => setSelectedImage(img)}
                    className={`h-20 w-28 object-cover cursor-pointer rounded-md border ${img === selectedImage ? 'border-blue-500' : 'border-gray-300'}`}
                  />
                ))}
              </div>
            </div>

            {/* Right text section */}
            <div className="w-full lg:w-1/2">
              {/* Landlord Info */}
              <div className="shadow-md p-4 rounded-md flex items-center gap-4">
                <img
                  src="https://static-cse.canva.com/blob/1911653/tools_transparent-background_promo-showcase_01-AFTER.jpg"
                  className="rounded-full h-14 w-14"
                  alt=""
                />
                <div>
                  <span className="block font-medium text-slate-800 text-lg">Alex Jenda</span>
                  <span className="text-sm font-medium text-gray-500">alexjenda@gmail.com</span>
                </div>
                <CiChat1 onClick={() => setismessageshow(true)} className="cursor-pointer" size={20} />
              </div>

              {/* Room Details */}
              <h1 className="text-2xl mt-6 font-bold text-slate-700">{data.roomtitle}</h1>
              <div className="flex items-center gap-2 mt-2 text-gray-600">
                <FaLocationDot />
                <span className="text-lg font-semibold">{data.address}</span>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold text-slate-800">About This Room:</h2>
                <p className="text-md text-gray-600 mt-2">{data.description}</p>
              </div>

              {/* Features */}
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-slate-800">Features:</h2>
                <div className="flex gap-3 flex-wrap mt-2">
                  {data.features.map((feature, i) => (
                    <span key={i} className="text-sm bg-gray-100 px-3 py-1 rounded-md text-gray-700">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-6">
             
                <button
                  onClick={handlesubmit}
                  className="text-sm px-6 py-2 font-medium bg-sky-500 text-white rounded-md hover:bg-sky-600 transition"
                >
                  Request to Book
                </button>
                <button className="text-sm px-6 py-2 font-medium text-red-500 border border-red-400 rounded-md hover:bg-red-50 transition">
                  Cancel Booking
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600 font-semibold">Loading Room Details...</p>
        )}
      </div>
    </div>
  );
}

export default Roompage;

import { RxCross2 } from "react-icons/rx";
const Messagebox = ({ setismessageshow }) => {
  return (
    <div className="absolute bg-slate-100 shadow-md rounded-md right-1 bottom-2 w-96 h-96 flex flex-col">
      
      {/* Header */}
      <div className="bg-blue-200 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://static-cse.canva.com/blob/1911653/tools_transparent-background_promo-showcase_01-AFTER.jpg"
            className="rounded-full h-10 w-10"
            alt=""
          />
          <div>
            <span className="block font-medium text-slate-800">Alex jenda</span>
            <span className="text-sm font-medium text-gray-500">alexjenda@gmail.com</span>
            <span className="text-sm font-medium text-green-500"> online</span>
          </div>
        </div>
        <RxCross2 onClick={() => setismessageshow(false)} size={20} color="red" className="cursor-pointer" />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
        <p className="text-slate-700 text-start">hi</p>
        <p className="text-blue-500 text-end">hello</p>
      </div>

      {/* Input */}
      <div className="flex border-t border-gray-300 p-2">
        <input
          type="text"
          placeholder="type here ..."
          className="flex-1 px-4 py-2 border rounded-md outline-none"
        />
        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md font-medium">Send</button>
      </div>
    </div>
  );
};