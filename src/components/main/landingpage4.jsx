import landlord from '../images/landlord.jpg'
function Landingpage4() {
  return (
    <div className=" w-full flex">
      {/* left */}
      <div className="w-1/2 h-full">
        <div className=" px-36 py-20">
          <h1 className="text-2xl font-bold text-slate-900 ">Are You a Landlord?</h1>
          <h3 className="text-md pt-4 font-semibold text-gray-600">List your room, apartment, or property on MeroRoom and connect with verified tenants.</h3>

          <h5 className=" text-md pt-6 font-medium text-gray-800">- Create detailed listings with photos and amenities</h5>
          <h5 className=" text-md pt-6 font-medium text-gray-800">- Screen potential tenants and manage inquiries</h5>
          <h5 className="text-md pt-6 font-medium text-gray-800">- Secure payments and booking management</h5>
          <h5 className="text-md pt-6 font-medium text-gray-800">- 24/7 customer support for landlords</h5>
          <button className="text-[18px] px-5 py-3 rounded-md font-medium text-white mt-7 bg-blue-500">List Your Property</button>

        </div>
      </div>

      {/* right */}
      <div className="w-1/2">
        <img src={landlord} className='p-20  rounded-3xl object-fit h-full ' alt="" />
      </div>

    </div>
  )
}

export default Landingpage4