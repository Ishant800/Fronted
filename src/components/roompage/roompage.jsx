import { FaLocationDot, FaMessage, FaPhone } from "react-icons/fa6"
import roompage from '../images/image.jpg'
import landlord from '../images/landlord.jpg'
import Navabar from "../navbar/navbar"
import Footer from "../footer/footer"
function Roompage() {
  return (
    <div>
      <Navabar />
      <div className="h-full overflow-hidden px-20 pt-10 w-full">

        <div>
          <h1 className="text-3xl font-bold text-slate-900">Cozy Studio Apartment in Downtown</h1>
          <div className="flex py-5 gap-2 items-center">
            <FaLocationDot color="grey" />
            <span className="text-lg font-semibold ">123 Main Street, Downtown, New York, NY 10001</span>
          </div>

          <div className="grid items-center grid-cols-3 gap-10">
            <img src={roompage} alt="" className="col-span-2  row-span-2 rounded-xl " />
            <img src={roompage} alt="" className="col-span-1  rounded-xl" />
            <img src={roompage} alt="" className="col-span-1  rounded-xl" />
          </div>

          <div className="flex gap-4 mt-4 bg-slate-200 rounded-xl py-2 items-center w-1/4 ">
            <img src={landlord} alt="" className="rounded-full ml-3 h-10 w-10" />

            <div className="flex flex-col">
              <span className="text-xl capitalize font-semibold">John doe</span>
              <span className="text-sm text-gray-700 capitalize font-medium">johndoe@gmail.com</span>

            </div>

            <div className="flex flex-row pl-5 gap-5">
              <FaPhone color="green" size={22} />
              <FaMessage color="blue" size={22} />
            </div>


          </div>

          <div className="grid grid-cols-3 gap-10 py-10">
            <div className="items-center col-span-2 row-span-2">
              <span className="text-2xl py-5 font-semibold text-slate-800"> About This Room: </span>
              <p className="text-md py-2 font-medium text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nihil, voluptate impedit, nesciunt laboriosam nobis consequatur ipsam architecto ratione obcaecati id praesentium dolor libero rem provident, voluptatem sit modi a voluptatum? Recusandae itaque praesentium aperiam ullam ab amet veniam ducimus sunt nemo. Culpa est magnam dolorum vero corrupti eum, corporis amet cum consectetur assumenda officiis harum labore quo molestias ex in? Quas non architecto deserunt impedit incidunt et, numquam expedita corporis, eos dignissimos vero accusamus officiis recusandae ex ut veniam fugit sequi nisi maxime odio quae, natus unde! Facere deleniti exercitationem quibusdam laborum totam obcaecati nam qui impedit recusandae iusto.</p>
            </div>


            <form action="" className="px-10 col-span-1 shadow-md bg-white">
              <div className="py-5">
                <p className=" font-medium text-gray-700 text-start overflow-hidden">Are you interested in this property then request to booking by clicking below button</p>
                <span className="text-xl mt-2 font-medium text-slate-800">90$/month</span>

              </div>

              <div className="py-5">
                <button className="text-md w-full rounded-md px-5 py-2 font-medium bg-blue-400 text-white">Request to book</button>
              </div>

            </form>
          </div>

          <div className="mt-2">
            <div className="">
              <h1 className="text-xl font-semibold text-slate-900">Features: </h1>
            </div>
            <div className="flex gap-2">
              <span className="text-md text-gray-700 font-medium">Wifi,</span>
              <span className="text-md text-gray-700 font-medium">Electricity,</span>
              <span className="text-md text-gray-700 font-medium">Water, </span>
              <span className="text-md text-gray-700 font-medium">CCTV</span>

            </div>
          </div>

          <div className="mt-5 mb-5">
            <h1 className="text-xl font-semibold text-slate-900 mb-4">Google Map Location:</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.991741477402!2d77.76101617500902!3d30.008393520278947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ec88c479bdbdb%3A0x30485550e6060b54!2sQuantum%20University!5e0!3m2!1sen!2sin!4v1747739146654!5m2!1sen!2sin"
              width="50%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            />


          </div>


        </div>
      </div>
<Footer/>
    </div>

  )
}

export default Roompage