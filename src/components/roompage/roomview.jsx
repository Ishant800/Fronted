import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaStar, FaSearch, FaFilter, FaHeart, FaRegHeart, FaParking } from "react-icons/fa";
import { FaLocationDot, FaBath, FaBed, FaWifi } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { IoIosResize } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../redux/thunk/roomthunks";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

function RoomView() {
  const dispatch = useDispatch();
  const { rooms } = useSelector(state => state.room);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState("");
  const [city, setCity] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [favorites, setFavorites] = useState([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (rooms.length === 0) dispatch(fetchRooms());
    else setData(rooms.filter(item => item.status === "available"));
  }, [rooms, dispatch]);

  useEffect(() => {
    let updatedata = rooms.filter(item => item.status === "available");

    if (search) {
      updatedata = updatedata.filter(f =>
        f.city.toLowerCase().includes(search.toLowerCase()) ||
        f.categories.toLowerCase().includes(search.toLowerCase()) ||
        f.roomtitle.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (city) {
      updatedata = updatedata.filter(f => f.city.toLowerCase().includes(city.toLowerCase()));
    }

    if (categories) {
      updatedata = updatedata.filter(f => f.categories.toLowerCase().includes(categories.toLowerCase()));
    }

    // Price range filter
    updatedata = updatedata.filter(f => 
      f.room_price_monthly >= priceRange[0] && f.room_price_monthly <= priceRange[1]
    );

    setData(updatedata);
  }, [search, categories, city, priceRange, rooms]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const amenitiesIcons = {
    'wifi': <FaWifi className="text-blue-500" />,
    'parking': <FaParking className="text-green-500" />,
    'bathroom': <FaBath className="text-purple-500" />,
    'bed': <FaBed className="text-red-500" />
  };

  return (
    <>
      <Navbar />
      
      <div className="min-h-[calc(100vh-4rem)]  bg-gray-50">
        {/* Mobile Filter Button */}
        <div className="md:hidden fixed bottom-6 right-6 z-10">
          <button 
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="bg-indigo-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
          >
            <FaFilter size={20} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Filter Sidebar - Desktop */}
          <aside className={`${showMobileFilters ? 'block' : 'hidden'} md:block md:w-80 w-full px-6 py-8 bg-white shadow-md md:sticky md:top-16 md:h-[calc(100vh-4rem)] overflow-y-auto`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Filters</h2>
              <button 
                onClick={() => setShowMobileFilters(false)}
                className="md:hidden text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <div className="relative">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Search rooms..."
                  />
                  <FaSearch className="absolute left-3 top-3 text-gray-400" />
                </div>
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">All Cities</option>
                  <option value="Kathmandu">Kathmandu</option>
                  <option value="Pokhara">Pokhara</option>
                  <option value="Bhaktapur">Bhaktapur</option>
                  <option value="Lalitpur">Lalitpur</option>
                </select>
              </div>

              {/* Categories */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
                <select
                  value={categories}
                  onChange={(e) => setCategories(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >      
                  <option value="">All Types</option>
                  <option value="single bed">Single Bed</option>
                  <option value="double bed">Double Bed</option>
                  <option value="apartment">Apartment</option>
                  <option value="office">Office</option>
                  <option value="flat">Flat</option>
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <div className="px-2">
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    step="100"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-full mb-2"
                  />
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$0</span>
                  <span>$5000</span>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Wifi', 'Parking', 'Kitchen', 'AC', 'Laundry', 'TV'].map((amenity) => (
                    <label key={amenity} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded text-indigo-600" />
                      <span className="text-sm text-gray-700">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => {
                  setSearch("");
                  setCity("");
                  setCategories("");
                  setPriceRange([0, 5000]);
                }}
                className="w-full py-2 text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition"
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1  p-6">
            <div className="flex justify-between items-center mb-8">
              <div className="pt-15">
                <h1 className="text-2xl font-bold text-gray-800">Find Your Perfect Space</h1>
                <p className="text-gray-600">{data.length} rooms available</p>
              </div>
              <div className="hidden md:block pt-15">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                  <option>Sort by: Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating: High to Low</option>
                </select>
              </div>
            </div>

            {/* Room Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.length > 0 ? (
                data.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    {/* Image with favorite button */}
                    <div className="relative">
                      <img
                        src={item.images[0] || 'https://via.placeholder.com/400x300'}
                        alt={item.roomtitle}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        onClick={() => navigate(`/rooms/${item._id}`)}
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(item._id);
                        }}
                        className="absolute top-3 right-3 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition"
                      >
                        {favorites.includes(item._id) ? (
                          <FaHeart className="text-red-500" />
                        ) : (
                          <FaRegHeart className="text-gray-600" />
                        )}
                      </button>
                      <div className="absolute bottom-3 left-3 bg-indigo-600 text-white px-2 py-1 rounded-md text-xs font-medium">
                        {item.categories}
                      </div>
                    </div>

                    {/* Room Details */}
                    <div className="p-5">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 
                            className="text-lg font-bold text-gray-800 mb-1 hover:text-indigo-600 transition cursor-pointer"
                            onClick={() => navigate(`/rooms/${item._id}`)}
                          >
                            {item.roomtitle}
                          </h3>
                          <div className="flex items-center text-sm text-gray-600 mb-2">
                            <FaLocationDot className="mr-1" />
                            <span>{item.city}, {item.country}</span>
                          </div>
                        </div>
                        <div className="flex items-center bg-gray-100 px-2 py-1 rounded">
                          <FaStar className="text-yellow-400 mr-1" />
                          <span className="font-medium">4.5</span>
                        </div>
                      </div>

                      {/* Amenities Icons */}
                      <div className="flex space-x-3 my-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <FaBed className="mr-1" /> 2
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <FaBath className="mr-1" /> 1
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <IoIosResize className="mr-1" /> 850 sqft
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.features.slice(0, 4).map((feature, i) => (
                          <span 
                            key={i} 
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Price and Button */}
                      <div className="flex justify-between items-center pt-3 border-t">
                        <div>
                          <span className="text-sm text-gray-500">From</span>
                          <p className="text-xl font-bold text-indigo-600">
                            ${item.room_price_monthly}
                            <span className="text-sm font-normal text-gray-500">/month</span>
                          </p>
                        </div>
                        <button 
                          onClick={() => navigate(`/rooms/${item._id}`)}
                          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <img 
                    src="https://cdn.dribbble.com/users/888330/screenshots/2653750/media/b7459526f1b4eb3a011e30d2ca3fb783.png" 
                    alt="No results found" 
                    className="w-64 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No rooms found</h3>
                  <p className="text-gray-500 mb-4">Try adjusting your filters or search term</p>
                  <button 
                    onClick={() => {
                      setSearch("");
                      setCity("");
                      setCategories("");
                      setPriceRange([0, 5000]);
                    }}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default RoomView;