import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaStar, FaSearch, FaFilter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../redux/thunk/roomthunks";
import Navabar from "../navbar/navbar";
import Footer from "../footer/footer";

function Roomview() {
  const dispatch = useDispatch();
  const { rooms } = useSelector(state => state.room);
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");
  const [categories, setcategories] = useState("");
  const [city, setcity] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (rooms.length === 0) dispatch(fetchRooms());
    else setdata(rooms.filter(item => item.status === "available"));
  }, [rooms, dispatch]);

  useEffect(() => {
    let updatedata = rooms.filter(item => item.status === "available");

    if (search) {
      updatedata = updatedata.filter(f =>
        f.city.toLowerCase().includes(search.toLowerCase()) ||
        f.categories.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (city) {
      updatedata = updatedata.filter(f => f.city.toLowerCase().includes(city.toLowerCase()));
    }

    if (categories) {
      updatedata = updatedata.filter(f => f.categories.toLowerCase().includes(categories.toLowerCase()));
    }

    setdata(updatedata);
  }, [search, categories, city, rooms]);

  return (
    <>
    <Navabar/>
    <div className=" min-h-[calc(100vh-4rem)] overflow-y-hidden flex flex-col md:flex-row bg-gray-100">

      <aside className="md:w-1/5 w-full px-4 py-8 md:sticky md:top-16 md:h-[calc(100vh-4rem)] overflow-y-auto bg-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Add Filters</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
          <div className="flex items-center border border-blue-600 rounded-md overflow-hidden bg-white shadow-md">
            <input
              type="text"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              className="w-full px-3 py-2 outline-none bg-white shadow-md  "
              placeholder="Search by location/category"
            />
            <FaSearch className="mx-2 text-gray-500" />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <select
            value={city}
            onChange={(e) => setcity(e.target.value)}
            className="w-full px-3 py-2  rounded-md outline-none bg-white shadow-md "
          >
            <option value="">Select City</option>
            <option value="Kathmandu">Kathmandu</option>
            <option value="Pokhara">Pokhara</option>
            <option value="Bhaktapur">Bhaktapur</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Categories</label>
          <select
            value={categories}
            onChange={(e) => setcategories(e.target.value)}
            className="w-full px-3 py-2  rounded-md outline-none bg-white shadow-md "
          >      
            <option value="">Select Category</option>
            <option value="single bed">Single Bed</option>
            <option value="double bed">Double Bed</option>
            <option value="apartment">Apartment</option>
            <option value="office">Office</option>
            <option value="flat">Flat</option>
          </select>
        </div>
      </aside>


      <main className="flex-1 overflow-y-scroll max-h-[calc(100vh-4rem)] mt-10 md:p-10">
        <h1 className="text-xl capitalize font-medium text-gray-800 mb-4 flex items-center gap-2">
          All Rooms Available On the basis of location Listings
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.length > 0 ? (
            data.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/rooms/${item._id}`)}
                className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
              >
                <img
                  src={item.images[0]}
                  alt={item.roomtitle}
                  className="h-48 w-full object-cover"
                />

                <div className="p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-sky-600">{item.roomtitle}</h2>
                    <span className="flex items-center text-orange-500 text-sm">
                      <FaStar className="mr-1" /> 4.0
                    </span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <FaLocationDot className="mr-2" />
                    <span>{item.city}, {item.country}</span>
                  </div>

                  <p className="text-sm text-gray-600 capitalize">{item.categories}</p>

                  <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                    {item.features.slice(0, 3).map((feature, i) => (
                      <span key={i}>{feature}</span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t mt-2 text-sm text-gray-700">
                    <span>Available from: {item.createdAt.slice(0, 10)}</span>
                    <span className="flex items-center font-semibold">
                      <FaDollarSign className="mr-1" /> {item.room_price_monthly}
                      <span className="text-sm font-normal text-gray-500">/month</span>
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-xl font-medium text-gray-600">No Data Found</p>
          )}
        </div>
      </main>
    </div>
   
     </>
  );
}

export default Roomview;
