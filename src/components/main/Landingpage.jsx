import { FaArrowRight } from 'react-icons/fa'
import image  from '../images/image.jpg'
function Landingpage() {
  return (
    <div className="h-full  bg-slate-200 ">

     <div className="flex pb-20 flex-row items-center">
      {/* leftpart */}
      <div className="w-1/2 flex flex-col items-center justify-center">
      <div className='ml-[190px]'>
        <h1 className='text-5xl font-semibold'>Find A Perfect Room in <span className='text-6xl font-semibold text-blue-500'>RoomEase</span> </h1>
     <p className='text-[17px] text-gray-600 mt-7 font-medium w-[80%] '>RoomEase connects you with ideal living spaces that match your budget and lifestyle. Browse thousands of quality rooms and connect directly with landlords.</p>
     
      </div>
     
     <div className="pt-15 justify-start w-1/2 flex flex-row gap-10">
  <div className="flex flex-row">
    <button className="bg-blue-500 text-sm text-white font-medium px-5 py-3 flex flex-row items-center gap-2 rounded-sm">
      Browse Rooms
      <FaArrowRight />
    </button>
  </div>

  <div className="flex flex-row">
    <button className="border-blue-500 border text-sm text-blue-500 font-medium px-5 py-3 flex flex-row items-center gap-2 rounded-sm">
      Visit us
      <FaArrowRight />
    </button>
  </div>
</div>
      


      </div>
      
     

      {/* rightpart */}
      <div className="w-1/2 flex items-center">
        <img src={image} className='h-[400px] w-[400] shadow-2xl shadow-white mt-20 rounded-xl' alt="" />
      </div>

     


     </div>
    </div>
  )
}

export default Landingpage