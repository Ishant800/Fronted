import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

function Landingpage() {
  return (
    <div className="lg:min-h-screen pb-4 bg-slate-200 bg-cover bg-[linear-gradient(rgba(0,0,0,0.7)),url(/images/hero.jpg)]">
      <div className="flex flex-col lg:flex-row w-full items-center justify-center px-4 md:px-10 lg:px-20">
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className='pt-12'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-slate-200'>
              Find A Perfect Room <span className='text-blue-500'>In MeroRoom</span>
            </h1>
            <p className='text-sm sm:text-md text-gray-300 mt-5 font-medium'>
              Discover comfortable accommodations with premium amenities for your next adventure. MeroRoom connects you with ideal living spaces that match your budget and lifestyle. Browse thousands of quality rooms and connect directly with landlords.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 mt-8">
            <button className="bg-sky-500 text-center hover:bg-blue-700 transition text-white font-medium px-5 py-3 flex items-center gap-2 rounded-md">
              Book Now
              <FaArrowRight />
            </button>

            <button className="bg-slate-50 text-center text-sky-500 font-medium px-5 py-3 flex items-center gap-2 rounded-md">
              Browse Properties
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <SearchRoom />
        </div>
      </div>
    </div>
  );
}

export default Landingpage;

function SearchRoom() {
  const [searchquery,setsearchquery] = useState({
    location:"",
    
  })
  return (
    <div className='bg-white w-full max-w-md mx-auto lg:mx-20 mt-10 shadow-sky-400 shadow-md rounded-lg'>
      <form className='px-6 sm:px-10 py-10'>
        <h1 className='text-xl font-bold text-slate-800 text-center'>Find Your Ideal Room</h1>

        <div className='flex flex-col gap-5 mt-6'>
          <div>
            <label className='text-lg mb-1 font-semibold block'>Location</label>
            <input
            
            type="text" placeholder='Search where you want to stay' className='px-4 py-2 outline-none border rounded-md border-gray-600 w-full shadow placeholder:text-slate-700'/>
          </div>

          <div>
            <label className='text-lg mb-1 font-semibold block'>Check In</label>
            <input type="date" className='px-4 py-2 w-full shadow outline-none border rounded-md border-gray-600'/>
          </div>

          <div>
            <label className='text-lg mb-1 font-semibold block'>Categories</label>
            <select className='px-4 py-2 w-full shadow outline-none border rounded-md border-gray-600'>
              <option value="">Select your categories --</option>
              <option value="single bed">Single Bed</option>
              <option value="double bed">Double Bed</option>
              <option value="apartment">Apartment</option>
              <option value="flat">Flat</option>
              <option value="office">Office</option>
            </select>
          </div>

          <button className='px-4 py-2 w-full bg-sky-500 text-white rounded-md mt-4'>Search Available Rooms</button>
        </div>
      </form>
    </div>
  );
}