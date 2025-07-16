import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaHeart, FaRegHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaLocationDot, FaStar, FaBed, FaRulerCombined } from "react-icons/fa6";
import { FaDollarSign, FaWifi, FaBolt, FaTint } from "react-icons/fa";
import { fetchRooms } from '../redux/thunk/roomthunks';

function FeaturedRooms() {
  const { rooms } = useSelector((state) => state.room);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (rooms.length === 0) {
      dispatch(fetchRooms());
    } else {
      setData(rooms);
    }
  }, [rooms, dispatch]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const formatFeatures = (features) => {
    if (!features) return [];
    if (Array.isArray(features)) return features;
    return features.split(',').map(f => f.trim());
  };

  const scrollLeft = () => {
    const container = document.getElementById('featuredRoomsContainer');
    container.scrollLeft -= 300;
    setScrollPosition(container.scrollLeft);
  };

  const scrollRight = () => {
    const container = document.getElementById('featuredRoomsContainer');
    container.scrollLeft += 300;
    setScrollPosition(container.scrollLeft);
  };

  return (
    <div className='lg:px-20 px-4 py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        {/* Catchy Header Section */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-3'>
            Discover Your <span className="text-blue-600">Perfect Space</span>
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Handpicked accommodations that blend comfort, style, and affordability. 
            Your ideal room is just a click away!
          </p>
        </div>

        {/* Scrollable Rooms Section */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition hidden md:block"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition hidden md:block"
            aria-label="Scroll right"
          >
            <FaChevronRight className="text-gray-700" />
          </button>

          {/* Featured Rooms Container */}
          <div 
            id="featuredRoomsContainer"
            className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollBehavior: 'smooth' }}
          >
            {data && data.length > 0 ? (
              data.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 mx-3 bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col snap-start"
                >
                  {/* Image with favorite button */}
                  <div className="relative">
                    <img
                      src={item.images?.[0] || "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                      alt={item.roomtitle}
                      className="h-56 w-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                      onClick={() => navigate(`/rooms/${item._id}`)}
                    />
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(item._id);
                      }}
                      className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                      aria-label="Add to favorites"
                    >
                      {favorites.includes(item._id) ? (
                        <FaHeart className="text-red-500" />
                      ) : (
                        <FaRegHeart className="text-gray-600" />
                      )}
                    </button>
                    {item.status === "booked" && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        Booked
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    {/* Price and rating */}
                    <div className="flex justify-between items-start mb-3">
                      <span className="flex items-center font-bold text-xl text-gray-900">
                        <FaDollarSign className="mr-1 text-gray-500" />
                        {item.room_price_monthly}
                        <span className="text-gray-500 text-sm font-normal ml-1">/month</span>
                      </span>
                      <div className="flex items-center gap-1 bg-blue-100 px-2 py-1 rounded-full">
                        <FaStar className="text-yellow-400" />
                        <span className="text-sm font-medium">4.0</span>
                      </div>
                    </div>

                    {/* Title and location */}
                    <h3 
                      className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer transition-colors"
                      onClick={() => navigate(`/rooms/${item._id}`)}
                    >
                      {item.roomtitle}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <FaLocationDot className="mr-1 text-gray-400" />
                      <span className="text-sm"> {item.city}</span>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {formatFeatures(item.features).map((feature, i) => (
                          <span key={i} className="flex items-center text-xs bg-gray-100 px-2 py-1 rounded-full">
                            {feature.includes('WiFi') && <FaWifi className="mr-1 text-blue-500" />}
                            {feature.includes('Electricity') && <FaBolt className="mr-1 text-yellow-500" />}
                            {feature.includes('Water') && <FaTint className="mr-1 text-blue-500" />}
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex text-sm text-gray-600 gap-4">
                        <span className="flex items-center">
                          <FaBed className="mr-1 text-gray-400" />
                          {item.categories}
                        </span>
                        <span className="flex items-center">
                          <FaRulerCombined className="mr-1 text-gray-400" />
                          {item.roomsize} sq.ft
                        </span>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <button 
                      onClick={() => navigate(`/rooms/${item._id}`)}
                      className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors shadow-md hover:shadow-lg"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10 w-full">
                <p className="text-xl font-medium text-gray-700">No featured rooms available</p>
                <p className="text-gray-500 mt-2">We're adding new properties daily. Check back soon!</p>
              </div>
            )}
          </div>
        </div>

        {/* View More Button Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Haven't found your perfect match?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Explore our full collection of premium accommodations across Nepal
          </p>
          <button 
            onClick={() => navigate("/rooms")} 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            Browse All Listings <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedRooms;