import { useState, useEffect } from "react";

import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { fetchRooms } from "../redux/thunk/roomthunks";

function Roomlist() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { rooms } = useSelector((state) => state.room);


  const handledelete = async (id) => {
    try {
      const res = await dispatch(deleteroom(id));
      if (deleteroom.fulfilled.match(res)) {
        toast.success("Room deleted successfully", {
          autoClose: 2000,
          hideProgressBar: true,
        });
      } else {
        toast.error("Failed to delete room", {
          autoClose: 2000,
          hideProgressBar: true,
        });
      }
    } catch (error) {
      toast.error("Error deleting room", {
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
  };

  useEffect(() => {
    if (rooms.length === 0) dispatch(fetchRooms());
  }, [dispatch]);

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Your Properties</h1>
          <button
            onClick={()=>navigate("/addroom")}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add Room
          </button>
        </div>


        <div className="grid grid-cols-6 bg-blue-100 text-gray-700 py-3 px-4 font-semibold rounded-t-lg">
          <div>Room ID</div>
          <div>Title</div>
          <div>Price</div>
          <div>Locations</div>
          <div>Status</div>
          <div>Actions</div>
        </div>

        <div className="divide-y bg-white rounded-b-lg">
          {rooms.length > 0 ? (
            rooms.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-6 gap-4 px-4 py-3 hover:bg-gray-50 text-gray-700"
              >
                <div
                  className="cursor-pointer text-blue-600 hover:underline"
                  onClick={() => navigate(`/rooms/${item._id}`)}
                >
                  {item._id.slice(0, 8)}...
                </div>
                <div>{item.roomtitle}</div>
                <div>₹{item.room_price_monthly}</div>
                 <div>{item.location}</div>
                <div
                  className={`font-medium ${
                    item.status === "available"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {item.status}
                </div>
                <div className="flex gap-4 items-center">
                  <button
                    onClick={() => navigate(`/updaterooms/${item._id}`)}
                    className="hover:text-blue-600"
                    title="Edit"
                  >
                    <FiEdit size={18} />
                  </button>
                  <button
                    onClick={() => handledelete(item._id)}
                    className="hover:text-red-600"
                    title="Delete"
                  >
                    <MdDelete size={20} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-red-500 py-6">No properties found</div>
          )}
        </div>

        {rooms.length > 9 && (
          <div className="flex justify-between items-center mt-6">
            <p className="text-sm text-gray-600">
              Total items: {userrooms.length}
            </p>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                Previous
              </button>
              <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                1
              </button>
              <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                2
              </button>
              <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Roomlist;
