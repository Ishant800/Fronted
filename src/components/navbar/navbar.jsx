import { HiHomeModern } from "react-icons/hi2";
import { MdOutlineLogout, MdMenu, MdClose } from "react-icons/md";
import { useState, useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../redux/slices/authslice";

function Navabar() {
  const [popup, setPopup] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const {userdetails} = useSelector((state)=>state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/rooms', text: 'Rooms' },
    { to: '/about', text: 'About Us' },
    { to: '/become-renter', text: 'Become a Renter' },
    { to: '/contact', text: 'Contact us' }
  ];

  return (
    
    <header className={`fixed md:px-15 opacity-80 top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50">
            <HiHomeModern size={28} className={`${scrolled ? 'text-blue-600' : 'text-blue-500'}`} />
            <h1 className={`text-2xl font-bold ${scrolled ? 'text-blue-600' : 'text-blue-500'}`}>MeroRoom</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <NavLink 
                key={index}
                to={link.to}
                className={({ isActive }) => 
                  `font-medium transition-colors hover:text-blue-600 ${isActive ? 'text-blue-600' : scrolled ? 'text-gray-700' : 'text-black'}`
                }
              >
                {link.text}
              </NavLink>
            ))}
          </nav>

          {/* User/Auth Section */}
          <div className="flex items-center gap-4">
            {userdetails ? (
              <div className="relative">
                <img
                  onClick={() => setPopup(!popup)}
                  className="rounded-full object-cover h-10 w-10 cursor-pointer border-2 border-white shadow-sm"
                  src={userdetails.profilepic}
                  alt="profile"
                />
                {popup && (
                  <div
                    onMouseLeave={() => setPopup(false)}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-50 overflow-hidden"
                  >
                    <div className="p-4 border-b">
                      <p className="font-semibold text-gray-900">{userdetails.name}</p>
                      <p className="text-sm text-gray-500">{userdetails.email}</p>
                    </div>
                    <NavLink 
                      to="/dashboard/profile" 
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                    >
                      Profile
                    </NavLink>
                    <NavLink 
                      to="/dashboard"  
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                    >
                      Dashboard
                    </NavLink>
                    <NavLink 
                      to="/dashboard/settings" 
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                    >
                      Settings
                    </NavLink>
                    <button
                      onClick={() => dispatch(Logout())}
                      className="flex items-center gap-2 w-full px-4 py-3 text-red-500 hover:bg-gray-50 font-medium transition-colors border-t"
                    >
                      Logout <MdOutlineLogout size={18} />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden md:flex gap-4">
                <Link to='/login'>
                  <button className="px-5 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white border border-blue-600 text-blue-600">
                    Sign In
                  </button>
                </Link>
                <Link to='/signup'>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-all duration-300">
                    Sign Up
                  </button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden z-50 p-2 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <MdClose size={24} className={scrolled ? 'text-gray-800' : 'text-white'} />
              ) : (
                <MdMenu size={24} className={scrolled ? 'text-gray-800' : 'text-white'} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 bg-white z-40 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out pt-20 px-6`}>
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link, index) => (
              <NavLink 
                key={index}
                to={link.to}
                className={({ isActive }) => 
                  `text-xl font-medium py-2 ${isActive ? 'text-blue-600' : 'text-gray-700'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.text}
              </NavLink>
            ))}
            {!userdetails && (
              <div className="flex flex-col space-y-4 pt-4">
                <Link to='/login' onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full px-5 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white border border-blue-600 text-blue-600">
                    Sign In
                  </button>
                </Link>
                <Link to='/signup' onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium transition-all duration-300">
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
   
  );
}

export default Navabar;