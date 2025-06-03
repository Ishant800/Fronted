import { useEffect, useState } from "react";
import { FaUsers, FaClipboardCheck } from "react-icons/fa";
import axios from "axios";


import { showErrorToast, showInfoToast, showSuccessToast} from "../../toastutils/toast";
function Maincontent() {
  const [data, setdata] = useState([]);
  const [totalusers, settotalusers] = useState([]);
 
  const token = localStorage.getItem("user");

  useEffect(() => {
    if (totalusers.length === 0) fetchusersdata();
    if (data.length === 0) fetchusersrequest();
  }, []);

  const fetchusersdata = async () => {
    try {
      const res = await axios.get("http://localhost:5000/auth/users");
      if (res.data) {
        const allUsers = res.data.users;
        settotalusers(allUsers);
      }
    } catch (error) {
     showInfoToast("no users found")
    }
  };

  const fetchusersrequest = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/room/usersbookinglist",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data) setdata(res.data.data.filter((item)=>item.status === "booked"));
      console.log('filtered data ',res.data.data.filter((item)=>item.status !== "booked"))
      
    } catch (error) {
      showInfoToast("No booking requests from users");
    }
  };

  const handlerequest = async (id, roomstatus, status, roomid) => {
    try {
      const payload = { id, roomstatus, status, roomid };
      const res = await axios.post(
        `http://localhost:5000/room/updaterequest`,
        payload,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (res.status === 200) {
         showSuccessToast(
        roomstatus === "reject"
          ? "Request rejected successfully"
          : "Request accepted successfully",
        { autoClose: 2000, hideProgressBar: true }
      );
            
      setdata((prev) => prev.filter((item) => item._id !== id));
        
        fetchusersrequest();
      }
    } catch (error) {
      console.log(error)
     showErrorToast("failed to update request");
    }
  };

 return (
  <div className="px-6 py-5 bg-gray-100 min-h-screen">
    <h2 className="text-2xl font-medium text-gray-700 mb-6">Admin Dashboard</h2>

    
    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 ">
     
      <div className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between col-span-1 row-span-1">
        <div>
          <h3 className="text-sm font-semibold text-gray-500">Total Users</h3>
          <p className="text-2xl font-bold text-blue-600">{totalusers.length}+</p>
        </div>
        <div className="p-2 bg-blue-100 rounded-full">
          <FaUsers size={20} color="blue" />
        </div>
      </div>

     
      <div className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between col-span-1 row-span-1">
        <div>
          <h3 className="text-sm font-semibold text-gray-500">Booking Requests</h3>
          <p className="text-2xl font-bold text-purple-600">{data.length}</p>
        </div>
        <div className="p-2 bg-purple-100 rounded-full">
          <FaClipboardCheck size={20} color="purple" />
        </div>
      </div>
    </div>

    
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Room Booking Requests</h3>
        <p className="text-gray-500">Total: {data.length}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-blue-100 text-gray-700 font-semibold">
            <tr>
              <th className="px-4 py-2">Room ID</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">User ID</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Contact</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-blue-50">
                <td className="px-4 py-2">{item.roomid?.slice(0, 10) }..</td>
                <td className="px-4 py-2">{item.roomlocation}</td>
                <td className="px-4 py-2">{item.userid?.slice(0, 10)  || "N/A"}</td>
                <td className="px-4 py-2">{item.useremail}</td>
                <td className="px-4 py-2">{item.username}</td>
                <td className="px-4 py-2">{item.contact  || "N/A"}</td>
                <td className="px-4 py-2 flex justify-center gap-2">
                  <button
                    onClick={() =>
                      handlerequest(item._id, 'accept', 'booked', item.roomid)
                    }
                    className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm hover:bg-green-200"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handlerequest(item._id, 'reject','',item.roomid)}
                    className="bg-red-100 text-red-500 px-3 py-1 rounded-md text-sm hover:bg-red-200"
                  >
                    Decline
                  </button>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-5 text-gray-500">
                  No booking requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

}

export default Maincontent;
