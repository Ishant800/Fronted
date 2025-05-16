import { FaArrowRight } from 'react-icons/fa'
import { FaLocationDot } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import { FaBed } from "react-icons/fa";
function Landingpage() {
  return (
    <div className="h-screen  bg-slate-200 bg-cover bg-[linear-gradient(rgba(0,0,100,0.5)),url(/images/hero.jpg)]  ">

      <div className="flex px-20 py-20 flex-row ">

        <div className="w-1/2 flex flex-col">
          <div className='mt-10'>
            <h1 className='text-5xl font-bold leading-tight text-gray-900'>Find A Perfect Room <br /> <span className='text-blue-500'>In MeroRoom</span> </h1>
            <p className=' max-w-md text-lg text-gray-400  mt-7 font-medium w-[80%] '>MeroRoom connects you with ideal living spaces that match your budget and lifestyle. Browse thousands of quality rooms and connect directly with landlords.</p>

          </div>

          <div className="pt-15 justify-start flex flex-row gap-10">
            <div className="flex flex-row">
              <button className="bg-blue-500 hover:bg-blue-700 transition text-md text-white font-medium px-5 py-3 flex flex-row items-center gap-2 rounded-sm">
                Browse room
                <FaArrowRight />
              </button>
            </div>

            <div className="flex flex-row">
              <button className=" bg-slate-50 border text-md text-blue-500 font-medium px-5 py-3 flex flex-row items-center gap-2 rounded-sm">
                Learn more
                <FaArrowRight />
              </button>
            </div>
          </div>

              <div className="mt-10">
        
        <div className="flex flex-row">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" alt="" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTH4dlV0UI27TlS52PbJ2N78hINGV4m43mKg&s" alt="" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
          <img src="https://static.vecteezy.com/system/resources/thumbnails/057/704/776/small/young-woman-with-glasses-smiles-confidently-during-classroom-session-photo.jpg" alt="" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
          <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpg" alt="" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
        </div>
        <span className="text-sm font-medium font-mono  text-gray-300">Trusted by 1,000+ people</span>
      </div>



         </div>

         <form action="" className=" w-120 ml-40  bg-slate-100 rounded-2xl">
          <div className="px-10 py-10">
            <h1 className="text-2xl font-medium  text-gray-800">Find Room Near Your Location</h1>
          </div>

          <div className="mt-3 px-10  flex flex-col">
            <label className="text-md font-medium text-gray-600" htmlFor="">Location</label>
            <div className="mt-2 flex flex-row items-center bg-slate-50 shadow-gray-300 rounded-md shadow-sm ">
              <span className="pl-3">
                <FaLocationDot size={22} color="gray" aria-hidden="true" />
              </span>
              <input
                type="text"
                className="p-3 w-full bg-transparent text-sm font-medium placeholder-gray-400 outline-none"
                placeholder="Where do you want to stay?"
                aria-label="Search for a location to stay"
              />
            </div>
          </div>


          <div className="mt-3 px-10  flex flex-col">
            <label className="text-md font-medium text-gray-600" htmlFor="">Budget</label>
            <div className="mt-2 flex flex-row items-center bg-slate-50 shadow-gray-300 rounded-md shadow-sm ">
              <span className="pl-3">
                <MdAttachMoney size={22} color="gray" aria-hidden="true" />
              </span>
              <input
                type="text"
                className="p-3 w-full bg-transparent text-sm font-medium placeholder-gray-400 outline-none"
                placeholder="Enter your budget range"
                aria-label="budget"
              />
            </div>
          </div>


          <div className="mt-3 px-10  flex flex-col">
            <label className="text-md font-medium text-gray-600" htmlFor="">Room Type</label>
            <div className="mt-2 flex flex-row items-center bg-slate-50 shadow-gray-300 rounded-md shadow-sm ">
              <span className="pl-3">
                <FaBed size={22} color="gray" aria-hidden="true" />
              </span>
              <input
                type="text"
                className="p-3 w-full bg-transparent text-sm font-medium placeholder-gray-400 outline-none"
                placeholder="Select room type"
                aria-label="budget"
              />
            </div>
          </div>


          <div className="px-10 py-5">
            <button className="text-md w-full p-3 rounded-xl font-medium text-white bg-blue-500">Search available room</button>
          </div>



        </form>



      </div>
    </div>
  )
}

export default Landingpage