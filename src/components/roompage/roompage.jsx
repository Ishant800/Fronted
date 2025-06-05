import { FaLocationDot } from "react-icons/fa6";
import Navabar from "../navbar/navbar";
import { CiChat1 } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Roompage() {
  const { id } = useParams();
  const [data, setdata] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [ismessageshow, setismessageshow] = useState(false);
 const [ownerdata,setownerdata] = useState(null)


 useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/room/rooms/${id}`);
        var userid = res.data.existroom.userid
        console.log(userid)
        const ownerdetails = await axios.get(`http://localhost:5000/auth/users/${userid}`)
        
        console.log(ownerdetails.data.usersdata)
        if (res.data && ownerdetails.data.usersdata) {
          setdata(res.data.existroom);
          setownerdata(ownerdetails.data.usersdata)
          setSelectedImage(res.data.existroom.images[0]);
        }
      } catch (error) {
        alert(error);
      }
    };
    fetchdata();
  }, [id]);

  const handlesubmit = async () => {
    try {
      const token = localStorage.getItem("token");
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
       showSuccessToast("thanks for request we will contact back soon.")
      }
    } catch (error) {
      showErrorToast(error)
    }
  };


  return (
    <div className="relative bg-blue-100">
      <Navabar />
      {ismessageshow && <Messagebox setismessageshow={setismessageshow} />}

      <div className="w-full px-4 md:px-10 py-10">
        {data ? (
          <div className="flex flex-col lg:flex-row gap-10">
   
            <div className="w-full overflow-y-hidden lg:w-1/2">
             <img
           src={selectedImage}
            alt="Room"
           className="w-full h-[400px] object-cover rounded-md shadow-md"
            />

           
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

           
            <div className="w-full overflow-y-scroll lg:w-1/2">
              
              <div className="shadow-md p-4 rounded-md flex items-center gap-4">
                <img
              src={ownerdata.profilepic}
                className="rounded-full h-14 w-14"
                  alt=""
                />
                <div>
                  <span className="block font-medium text-slate-800 text-lg">{ownerdata.name}</span>
                  <span className="text-sm font-medium text-gray-500">{ownerdata.email}</span>
                </div>
                <CiChat1 onClick={() => setismessageshow(true)} className="cursor-pointer" size={20} />
              </div>

             
              <h1 className="text-2xl mt-6 font-bold text-slate-700">{data.roomtitle}</h1>
              <div className="flex items-center gap-2 mt-2 text-gray-600">
                <FaLocationDot />
                <span className="text-lg font-semibold">{data.address}</span>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold text-slate-800">About This Room:</h2>
                <p className="text-md text-gray-600 mt-2">{data.description}</p>
              </div>

           
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

           {data?.location && data.location.lat && data.location.lng && (
  <div className="mt-6 ">
    <h3 className="text-lg font-semibold">Room Location on Map</h3>
    <LeafletMap location={data.location} setLocation={() => {}} />
   
  </div>
)}

               <button
                  onClick={handlesubmit}
                  className="text-sm mt-4 mb-5 px-6 py-2 font-medium bg-sky-500 text-white rounded-md hover:bg-sky-600 transition"
                >
                  Request to Book
                </button>
                <Reviews/>
            </div>
            
          </div>
        ) : (
          <Loadinganimation/>
        )}
        
      </div>
    </div>
  );
}

export default Roompage;

import { RxCross2 } from "react-icons/rx";
import Loadinganimation from "../404page/loadinganimation";
import { showErrorToast, showSuccessToast } from "../toastutils/toast";
import LeafletMap from "../404page/map";
import Reviews from "./review";

const Messagebox = ({ setismessageshow }) => {
  return (
    <div className="absolute bg-slate-100 shadow-md rounded-md right-1 bottom-2 w-96 h-96 flex flex-col">
      
      
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

     
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
        <p className="text-slate-700 text-start">hi</p>
        <p className="text-blue-500 text-end">hello</p>
      </div>

     
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