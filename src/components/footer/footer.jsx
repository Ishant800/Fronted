import { IoHomeSharp } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full overflow-hidden bg-slate-800 px-4 sm:px-6 lg:px-20 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10">
     
        <div>
          <div className="flex items-center gap-2">
            <IoHomeSharp size={24} className="text-white" />
            <h1 className="text-xl font-semibold text-slate-200">MeroRoom</h1>
          </div>
          <p className="mt-2 text-xs text-slate-400 leading-tight">
            Find your perfect room with MeroRoom. Connect, book and move in.
          </p>
          <div className="flex gap-3 mt-3">
            <FaFacebookF size={16} className="text-white" />
            <FaInstagram size={16} className="text-white" />
            <FaTwitter size={16} className="text-white" />
            <FaLinkedin size={16} className="text-white" />
          </div>
        </div>

        
        <div>
          <h2 className="text-md font-semibold text-slate-200 mb-2">Quick Links</h2>
          <ul className="text-sm font-medium text-slate-400 space-y-1">
            <li><a href="#">Find Rooms</a></li>
            <li><a href="#">List Property</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

       
        <div>
          <h2 className="text-md font-semibold text-slate-200 mb-2">Resources</h2>
          <ul className="text-sm font-medium text-slate-400 space-y-1">
            <li><a href="#">Renter's Guide</a></li>
            <li><a href="#">Landlord's Guide</a></li>
            <li><a href="#">Safety Tips</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

     
        <div>
          <h2 className="text-md font-semibold text-slate-200 mb-2">Contact</h2>
          <ul className="text-sm font-medium text-slate-400 space-y-1">
            <li><a href="#">support@roomease.com</a></li>
            <li><a href="#">+91 9800000000</a></li>
            <li><a href="#">123 Mark Street, Nepal</a></li>
          </ul>
        </div>
      </div>

      <hr className="my-4 border-gray-700" />

      <footer className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 space-y-2 sm:space-y-0">
        <span>&copy; {new Date().getFullYear()} MeroRoom. All rights reserved.</span>
        <div className="flex flex-wrap gap-3">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
