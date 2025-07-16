import { IoHomeSharp } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

function Footer() {
  return (
    <div className="w-full bg-slate-900 px-4 sm:px-6 lg:px-20 py-12 border-t border-slate-700">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <IoHomeSharp size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">
                <span className="text-indigo-400">Mero</span>Room
              </h1>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your trusted platform for finding and listing rooms. We connect renters with property owners seamlessly.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="bg-slate-700 hover:bg-indigo-600 p-2 rounded-full transition-all duration-300">
                <FaFacebookF size={16} className="text-white" />
              </a>
              <a href="#" className="bg-slate-700 hover:bg-pink-600 p-2 rounded-full transition-all duration-300">
                <FaInstagram size={16} className="text-white" />
              </a>
              <a href="#" className="bg-slate-700 hover:bg-blue-400 p-2 rounded-full transition-all duration-300">
                <FaTwitter size={16} className="text-white" />
              </a>
              <a href="#" className="bg-slate-700 hover:bg-blue-700 p-2 rounded-full transition-all duration-300">
                <FaLinkedin size={16} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <RiCustomerService2Fill className="text-indigo-400" />
              Quick Links
            </h2>
            <ul className="space-y-3">
              {[
                { text: "Find Rooms", href: "#" },
                { text: "List Property", href: "#" },
                { text: "How It Works", href: "#" },
                { text: "Pricing Plans", href: "#" },
                { text: "Testimonials", href: "#" }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-slate-400 hover:text-indigo-400 text-sm transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-lg font-bold text-white mb-4">Resources</h2>
            <ul className="space-y-3">
              {[
                { text: "Renter's Guide", href: "#" },
                { text: "Landlord's Guide", href: "#" },
                { text: "Safety Tips", href: "#" },
                { text: "Blog Articles", href: "#" },
                { text: "Moving Checklist", href: "#" }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-slate-400 hover:text-indigo-400 text-sm transition-colors duration-300"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-bold text-white mb-4">Contact Us</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-indigo-400 mt-1 flex-shrink-0" />
                <span className="text-sm text-slate-400">
                  123 Kathmandu Street,<br />
                  Nepal, 44600
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-indigo-400" />
                <a href="tel:+9779800000000" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                  +977 9800000000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-indigo-400" />
                <a href="mailto:hello@meroroom.com" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                  hello@meroroom.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-white mb-2">Subscribe to our newsletter</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-slate-800 text-white text-sm px-3 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full"
                />
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-md text-sm font-medium transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8"></div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-slate-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MeroRoom. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-6">
            <a href="#" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">Cookie Policy</a>
            <a href="#" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>

      {/* Floating help button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110">
          <RiCustomerService2Fill size={20} />
          <span className="ml-2 text-sm font-medium hidden sm:inline">Need Help?</span>
        </button>
      </div>
    </div>
  );
}

export default Footer;