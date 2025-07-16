import { useState } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoHomeSharp, IoBedOutline } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";

function Landingpage() {
  const [formData, setFormData] = useState({
    location: "",
    priceRange: [0, 10000],
    roomType: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, priceRange: [0, parseInt(value) || 10000] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted:", formData);
  };

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('/images/r2.png')] bg-cover bg-center bg-no-repeat opacity-70"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-blue-900/60"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="text-center px-10 lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Find Your Perfect <span className="text-blue-400">Room</span> in Nepal
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 mb-8">
                Discover comfortable accommodations with premium amenities. MeroRoom connects you with ideal living spaces that match your budget and lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/rooms" className="inline-block">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-xl">
                    Browse Rooms <FaArrowRight />
                  </button>
                </Link>
                <Link to="/become-renter" className="inline-block">
                  <button className="bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-lg flex items-center gap-2 transition-all border border-white/30">
                    List Your Property
                  </button>
                </Link>
              </div>
            </div>

            {/* Search Form */}
            <div className="bg-white md:w-120 md:mx-10 rounded-xl shadow-2xl overflow-hidden">
              <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                <div className="flex items-center gap-3">
                  <IoHomeSharp size={28} />
                  <h2 className="text-2xl font-bold">Find Your Room</h2>
                </div>
                <p className="mt-1 text-blue-100">Search thousands of rooms across Nepal</p>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 sm:p-8">
                {/* Location Field */}
                <div className="mb-6">
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Where do you want to live?
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MdLocationPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Enter city or area"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700 mb-2">
                    Maximum Budget (per month)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <RiMoneyDollarCircleLine className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="number"
                      id="priceRange"
                      name="priceRange"
                      value={formData.priceRange[1]}
                      onChange={handlePriceChange}
                      placeholder="10000"
                      min="0"
                      max="50000"
                      step="500"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">NPR</span>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-gray-500">
                    <span>0</span>
                    <span>{formData.priceRange[1].toLocaleString()}</span>
                  </div>
                </div>

                {/* Room Type */}
                <div className="mb-8">
                  <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-2">
                    Room Type
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <IoBedOutline className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="roomType"
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                      required
                    >
                      <option value="" disabled>Select room type</option>
                      <option value="single">Single Room</option>
                      <option value="shared">Shared Room</option>
                      <option value="apartment">Apartment</option>
                      <option value="studio">Studio</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <FiChevronDown className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md hover:shadow-lg"
                >
                  <FaSearch /> Search Rooms
                </button>

                <p className="text-sm text-center text-gray-600 mt-4">
                  Want to list a room?{" "}
                  <Link to="/signup" className="text-blue-600 hover:underline font-medium">
                    Sign up as a landlord
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;