import { IoHomeSharp } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-slate-800 px-4 sm:px-6 lg:px-20 py-10">
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* firstpart */}
        <div>
          <div className="flex items-center gap-2">
            <IoHomeSharp size={26} color="white" />
            <h1 className="text-2xl font-medium text-slate-200">MeroRoom</h1>
          </div>

          <p className="mt-2 text-sm text-slate-400">Find your perfect room with MeroRoom.</p>
          <p className="text-sm text-slate-400">Connect, book and move in.</p>

          <div className="flex gap-4 mt-4">
            <FaFacebookF size={20} color="white" />
            <FaInstagram size={20} color="white" />
            <FaTwitter size={20} color="white" />
            <FaLinkedin size={20} color="white" />
          </div>
        </div>

        {/* secondpart */}
        <div className="">
          <h1 className="text-lg font-semibold text-slate-200">Quick Links</h1>
          <nav className="flex flex-col mt-3 space-y-2">
            <a className="text-sm text-gray-400 font-medium" href="">Find Rooms</a>
            <a className="text-sm text-gray-400 font-medium" href="">List Your Property</a>
            <a className="text-sm text-gray-400 font-medium" href="">How It Works</a>
            <a className="text-sm text-gray-400 font-medium" href="">Pricing</a>
            <a className="text-sm text-gray-400 font-medium" href="">FAQs</a>
          </nav>
        </div>

        {/* third part */}
        <div className="">
          <h1 className="text-lg font-semibold text-slate-200">Resources</h1>
          <nav className="flex flex-col mt-3 space-y-2">
            <a className="text-sm text-gray-400 font-medium" href="">Renter's Guide</a>
            <a className="text-sm text-gray-400 font-medium" href="">Landlord's Guide</a>
            <a className="text-sm text-gray-400 font-medium" href="">Safety Tips</a>
            <a className="text-sm text-gray-400 font-medium" href="">Blog</a>
            <a className="text-sm text-gray-400 font-medium" href="">Support Center</a>
          </nav>
        </div>

        {/* fourth part */}
        <div className="">
          <h1 className="text-lg font-semibold text-slate-200">Contact Us</h1>
          <nav className="flex flex-col mt-3 space-y-2">
            <a className="text-sm text-gray-400 font-medium" href="">support@roomease.com</a>
            <a className="text-sm text-gray-400 font-medium" href="">+91 9800000000</a>
            <a className="text-sm text-gray-400 font-medium" href="">123 Mark Street, Nepal</a>
          </nav>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      <footer className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
        <span className="mb-4 sm:mb-0">&copy; {new Date().getFullYear()} MeroRoom. All rights reserved.</span>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="">Privacy Policy</a>
          <a href="">Terms & Services</a>
          <a href="">Cookie Policy</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;