import { FaArrowRight } from 'react-icons/fa'

function Landingpage() {
  return (
    <div className="min-h-screen  bg-slate-200 bg-cover bg-[linear-gradient(rgba(0,0,0,0.7)),url(/images/hero.jpg)]  ">

      <div className="flex pt-20 items-center justify-center flex-row ">

        <div className=" flex flex-col">
          <div className='pt-30 px-30 '>
            <h1 className='text-5xl font-bold text-slate-200'>Find A Perfect Room  <span className='text-blue-500'>In MeroRoom</span> </h1>
            <p className='max-w-2/3 text-lg text-gray-300  mt-7 font-medium  '>Discover comfortable accommodations with premium amenities for your next adventure MeroRoom connects you with ideal living spaces that match your budget and lifestyle. Browse thousands of quality rooms and connect directly with landlords.</p>

          </div>
           <div className=" flex px-30 py-10 flex-row  gap-10">
            <div className="flex flex-row">
              <button className="bg-sky-500 hover:bg-blue-700 transition  text-white font-medium px-5 py-3 flex flex-row items-center gap-2 rounded-md">
                Book Now
                <FaArrowRight />
              </button>
            </div>

            <div className="flex flex-row">
              <button className=" bg-slate-50  text-sky-500 font-medium px-5 py-3 flex flex-row items-center gap-2 rounded-md">
                Browse Properties
                <FaArrowRight />
              </button>
            </div>
          </div>
          </div> 
      </div>
         <SearchRoom/>

    </div>
  )
}

export default Landingpage


function SearchRoom (){
  return(
    <div className='bg-white mx-20 mt-20 shadow-sky-400 shadow-md rounded-lg  '>

      <form action="" className='px-20 w-full py-10'>
        <h1 className='text-xl font-bold text-slate-800'>Find Your Ideal Room</h1>
      
      <div className='flex-col w-full items-center justify-center'>
       
        <div className='flex flex-row w-full gap-10' >
          
          <div className='flex pt-3 flex-col'>
            <span className='text-lg mb-2 font-semibold'>Location</span>
            <input type="text" placeholder='Search where you want to stay' 
            className='px-4 py-2 outline-none border rounded-md border-gray-600 w-70 shadow placeholder:text-slate-700'/>
          </div>

          <div className='flex pt-3 flex-col'>
            <span className='text-lg mb-2 font-semibold'>Check In</span>
            <input type="date"  
            className='px-4 py-2 w-70 shadow outline-none border rounded-md border-gray-600'/>
          </div>

          <div className='flex pt-3   flex-col'>
            <span className='text-lg mb-2 font-semibold'>Check Out</span>
            <input type='date'  
            className='px-4 py-2 w-70 shadow outline-none border rounded-md border-gray-600'/>
          </div>

          <div className='flex pt-3 flex-col'>
            <span className='text-lg mb-2 font-semibold'>Categories</span>
            <input type="text"  
            className='px-4 py-2 w-70 shadow outline-none border rounded-md border-gray-600'/>
          </div>
      </div>

       <div className='justify-center mt-9 ml-130'>
        <button className='px-4 py-2 bg-sky-500 text-white rounded-md'> Search Available Rooms</button>
        </div>
      </div>
      </form>

    </div>
  )
}