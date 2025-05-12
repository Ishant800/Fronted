import image  from '../images/image.jpg'
function Landingpage() {
  return (
    <div className="h-full  bg-slate-200 ">

     <div className="flex pb-20 flex-row items-center">
      {/* leftpart */}
      <div className="w-1/2 flex flex-col items-center justify-center">
      <div className='ml-[190px]'>
        <h1 className='text-4xl font-semibold'>Find A Perfect Room in <span className='text-5xl font-semibold text-blue-500'>RoomEase</span> </h1>
     <p className='text-[17px] text-gray-600 mt-7 font-medium w-[80%] '>Connect with landlords ,book stays, and find your ideal leaving space with <span>RoomEase</span> </p>
     
      </div>
     
      <div className='pt-15 justify-start w-1/2 gap-10 flex flex-row'>
       <button className='bg-blue-500 text-sm text-white font-medium px-5 py-3 rounded-sm'>Browse Rooms</button>
       <button className='border-blue-500 text-sm border-1 bg-white text-blue-500 font-medium px-5 py-3 rounded-sm'>List Your Rooms</button>
      </div>
     
      
      </div>

      {/* rightpart */}
      <div className="w-1/2 flex items-center">
        <img src={image} className='h-[400px] w-[400] shadow-2xl shadow-amber-100 mt-20 rounded-xl' alt="" />
      </div>

     


     </div>
    </div>
  )
}

export default Landingpage