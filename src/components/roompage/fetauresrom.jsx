import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaArrowCircleRight } from "react-icons/fa";
import { FaLocationDot, FaStar } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { fetchRooms } from '../redux/thunk/roomthunks';


function Fetauresroom() {
  const {rooms} = useSelector((state)=>state.room)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
console.log(data)
  useEffect(() => {
    if (rooms.length === 0) {
      dispatch(fetchRooms());
    } else {
      setData(rooms);
    }
  }, [rooms, dispatch]);

  return (
    <div className='px-4 sm:px-6 lg:px-20 py-10 bg-gray-100'>
      <div className='flex flex-col sm:flex-row items-center justify-between'>
        <h1 className='text-2xl font-semibold text-slate-900 mb-4 sm:mb-0'>Featured Rooms</h1>
        <button onClick={()=>navigate("/rooms")} className='text-md font-medium text-white bg-sky-600 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-sky-700 transition'>
          View More <FaArrowCircleRight />
        </button>
      </div>

      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <div
              onClick={() => navigate(`/rooms/${item._id}`)}
              key={index}
              className="cursor-pointer bg-white rounded-md shadow hover:shadow-md transition overflow-hidden"
            >
             <img
  src={item.images?.[0] || "https://via.placeholder.com/300x200?text=No+Image"}
  alt="Room"
  className="h-48 w-full object-cover"
/>

              <div className="px-4 py-3">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg text-sky-500 font-semibold capitalize">
                    {item.roomtitle}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar />
                    <span>4.0</span>
                  </div>
                </div>

                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <div className="flex items-center gap-1">
                    <FaLocationDot />
                    <span>{item.city}, {item.country}</span>
                  </div>
                  <span className="capitalize">{item.categories}</span>
                </div>

                <div className="text-sm text-gray-500 mb-2">
                <span>{item.features}</span>
                 
                </div>

                <div className="flex justify-between text-sm text-gray-700">
                  {/* <span>Available from: {item.createdAt}</span> */}
                  <button className='text-sm px-3 py-2 rounded-md bg-sky-300'>View details</button>
                  <span className="flex items-center font-medium">
                    <FaDollarSign className="mr-1" />{item.room_price_monthly}<span className="text-gray-500 ml-1">/Month</span>
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-xl font-medium text-slate-800 col-span-full text-center">No Data Found</p>
        )}
      </div>
    </div>
  );
}

export default Fetauresroom;