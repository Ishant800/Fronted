import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { FaLocationDot, FaStar } from "react-icons/fa6"
import { FaDollarSign } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { fetchRoom } from "../redux/roomredux"
import { LuArrowLeft } from "react-icons/lu";
function Roomview() {
   const dispatch = useDispatch()
   const { room } = useSelector(state => state.room)
   const [data, setdata] = useState([])
   const [search, setsearch] = useState("")
   const [categories, setcategories] = useState("")
   const [city, setcity] = useState("")

   const navigate = useNavigate()
   useEffect(() => {

      if (room.length === 0) {
         dispatch(fetchRoom())
      }
      else {
         setdata(room)
      }

   }, [room, dispatch])


   useEffect(() => {
      if (search || categories || city) {
         let updatedata = [...room]

         if (search) {
            updatedata = updatedata.filter(f =>
               f.city.toLowerCase().includes(search.toLowerCase()) || f.categories.toLowerCase().includes(search.toLowerCase()))

         }

         if (city) {
            updatedata = updatedata.filter(f => f.city.toLowerCase().includes(city.toLowerCase()))

         }
         if (categories) {
            updatedata = updatedata.filter(f => f.categories.toLowerCase().includes(categories.toLowerCase()))

         }
         setdata(updatedata)
      } else {
         setdata(room)
      }
   }, [search, categories, city, room])
   return (
  <div className="min-h-screen bg-gray-50 px-4 md:px-10">
    {/* Header + Filter */}
    <div className="sticky top-0 bg-gray-50 z-10 py-6 flex flex-col lg:flex-row flex-wrap items-center justify-between gap-4">
      <button
        className="flex items-center gap-2 px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
        onClick={() => navigate("/")}
      >
        <LuArrowLeft />
        Back
      </button>

      <h1 className="text-2xl font-bold text-gray-800">Available Properties</h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
        className="px-4 py-2 border rounded-md w-full md:w-1/2 lg:w-1/3"
        placeholder="Enter location where you want to stay"
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <div>
          <label className="text-sm font-medium">Sort by City</label>
          <select
            value={city}
            onChange={(e) => setcity(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">Select City</option>
            <option value="Kathmandu">Kathmandu</option>
            <option value="Pokhara">Pokhara</option>
            <option value="Bhaktapur">Bhaktapur</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium">Apply Categories</label>
          <select
            value={categories}
            onChange={(e) => setcategories(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">Select Category</option>
            <option value="single bed">Single Bed</option>
            <option value="double bed">Double Bed</option>
            <option value="apartment">Apartment</option>
            <option value="office">Office</option>
            <option value="flat">Flat</option>
          </select>
        </div>
      </div>
    </div>

    {/* Room Cards */}
    <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data && data.length > 0 ? (
        data.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/rooms/${item._id}`)}
            className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
          >
            {/* Image */}
            <img
              src={item.images[0]}
              alt={item.roomtitle}
              className="h-48 w-full object-cover"
            />

            {/* Content */}
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
 {/* Features */}
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
  </div>
);

}

export default Roomview 