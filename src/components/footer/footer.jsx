import { IoHomeSharp } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full overflow-hidden gap-5 bg-slate-800 ">
      <div className="pt-10 flex items-center justify-around">
        {/* firstpart */}
        <div className="flex flex-col">
          <div className="items-center flex gap-2">
            <IoHomeSharp size={26} color="white" />
            <h1 className="text-2xl font-medium  text-slate-200"> MeroRoom</h1>
          </div>

          <div className="mt-2 flex flex-col">
            <span className="inline-block text-slate-500 text-sm font-medium">Find your perfect room with MeroRoom.</span>
            <span className="inline-block text-slate-500 text-sm font-medium">Connect, book and move in. </span>
          </div>

          <div className="flex flex-row items-center mt-3 gap-6">
            <FaFacebookF size={20} color="white" />
            <FaInstagram size={20} color="white" />
            <FaTwitter size={20} color="white" />
            <FaLinkedin size={20} color="white" />
          </div>
        </div>

        {/* secondpart */}
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold text-slate-200">Quick Link</h1>
          <nav className="flex flex-col mt-3">
            <a className="text-sm font-medium text-gray-400 " href="">Find Rooms</a>
            <a className="text-sm font-medium text-gray-400 pt-2" href="">List Your Property</a>
            <a className="text-sm font-medium text-gray-400 pt-2" href="">How It Works</a>
            <a className="text-sm font-medium text-gray-400 pt-2" href="">Pricing</a>
            <a className="text-sm font-medium text-gray-400 pt-2" href="">FAQS</a>

          </nav>  
        </div>

        {/* third part */}

        <div className="flex flex-col">
          <h1 className="text-lg font-semibold text-slate-200">Resources</h1>
          <nav className="flex flex-col mt-3">
            <a className="text-sm text-gray-400 font-medium " href="">Renter's Giude</a>
            <a className="text-sm text-gray-400 font-medium pt-2" href="">Landlords Guide</a>
            <a className="text-sm text-gray-400  font-medium pt-2" href="">Saftey Tips</a>
            <a className="text-sm text-gray-400 font-medium pt-2" href="">Blog</a>
            <a className="text-sm text-gray-400 font-medium pt-2" href="">Support Center</a>

          </nav>
        </div>


        {/* fourth part */}
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold text-slate-200">Cotact us</h1>
          <nav className="flex flex-col mt-3">
            <a className="text-sm text-gray-400 font-medium " href="">Support@roomease.com</a>
            <a className="text-sm text-gray-400 font-medium pt-2" href="">+91 9800000000</a>
            <a className="text-sm text-gray-400 font-medium pt-2" href="">123 Mark Street ,Nepal</a>


          </nav>
        </div>

      </div>

      <hr className="border-spacing-0.5 mt-5 border-gray-700" />
      <footer className="flex flex-row items-center px-30 py-7 justify-between">
        <span className="text-sm font-medium text-gray-400 pt-2">@Copyright MeroRoom. All rights reserved.</span>
        <div className="">
          <a className="text-sm text-gray-400 font-medium p-5 pt-2" href="">Privacy policy</a>
          <a className="text-sm text-gray-400 font-medium p-5  pt-2" href="">Terms & services</a>
          <a className="text-sm text-gray-400 font-medium p-5 pt-2" href="">Cookie policy</a>
        </div>
      </footer>
    </div>
  )
}

export default Footer