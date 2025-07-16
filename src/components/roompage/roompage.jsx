import {  FaStar, FaBed, FaRulerCombined, FaWifi, FaBolt, FaTint, FaRegHeart, FaHeart, FaShare } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { CiChat1 } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import Loadinganimation from "../404page/loadinganimation";
import { showErrorToast, showSuccessToast, showWarningToast } from "../toastutils/toast";
import LeafletMap from "../404page/map";
import { useDispatch, useSelector } from "react-redux";
import { Addreview, getReviews } from "../redux/thunk/reviewthunk";
import Navabar from "../navbar/navbar";
import { FaLocationPin } from "react-icons/fa6";

function Roompage() {
  const dispatch = useDispatch()
  const { id } = useParams();
  const { review } = useSelector((state) => state.review)
  const [data, setdata] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [ismessageshow, setismessageshow] = useState(false);
  const [ownerdata, setownerdata] = useState(null)
  const [isFavorite, setIsFavorite] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    contact: '',
    moveInDate: '',
    message: ''
  });
  const [reviewdata, setreviewdata] = useState({
    comment: '',
    rating: 0
  })
  const { userdetails } = useSelector((state) => state.auth)

  const handlereview = async (e) => {
    e.preventDefault()
    if (reviewdata.rating === 0 || reviewdata.comment.trim() === "") {
      showWarningToast("Please rate and write your review")
    } else {
      const paylaod = {
        userid: userdetails.userid,
        comment: reviewdata.comment,
        rating: reviewdata.rating
      }
      dispatch(Addreview({ id, data: paylaod }))
      setreviewdata({ comment: '', rating: 0 })
    }
  }

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/room/rooms/${id}`);
        var userid = res.data.existroom.userid
        const ownerdetails = await axios.get(`http://localhost:5000/auth/users/${userid}`)
        dispatch(getReviews(id))
        if (res.data && ownerdetails.data.usersdata) {
          setdata(res.data.existroom);
          setownerdata(ownerdetails.data.usersdata)
        }
      } catch (error) {
        alert(error);
      }
    };
    fetchdata();
  }, [id, dispatch]);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (userdetails.role === "admin") {
        showWarningToast("Admins cannot book rooms")
        return;
      }
      const bookingPayload = {
        ownerid: data.userid,
        roomid: id,
        name: bookingData.name,
        contact: bookingData.contact,
        moveInDate: bookingData.moveInDate,
        message: bookingData.message
      };
      const res = await axios.post("http://localhost:5000/room/requestroom", bookingPayload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        showSuccessToast("Your booking request has been sent successfully!")
        setShowBookingForm(false);
      }
    } catch (error) {
      showErrorToast(error.response?.data?.message || "Booking failed")
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === data.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? data.images.length - 1 : prevIndex - 1
    );
  };

  const featureIcons = {
    'WiFi': <FaWifi className="text-blue-500" />,
    'Electricity': <FaBolt className="text-yellow-500" />,
    'Water': <FaTint className="text-blue-400" />
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navabar />
      {ismessageshow && <Messagebox setismessageshow={setismessageshow} owner={ownerdata} />}

      <div className="max-w-7xl md:pt-20 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {data ? (
          <div className="space-y-8">
            {/* Image Gallery Section */}
            <div className="relative group">
              <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg">
                <img
                  src={data.images[currentImageIndex]}
                  alt="Room"
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition hidden group-hover:block"
                >
                  <IoIosArrowBack className="text-gray-800" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition hidden group-hover:block"
                >
                  <IoIosArrowForward className="text-gray-800" />
                </button>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {data.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-2 w-2 rounded-full ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button 
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition"
                  >
                    {isFavorite ? (
                      <FaHeart className="text-red-500" />
                    ) : (
                      <FaRegHeart className="text-gray-700" />
                    )}
                  </button>
                  <button className="bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition">
                    <FaShare className="text-gray-700" />
                  </button>
                </div>
                {data.status === "booked" && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    Booked
                  </div>
                )}
              </div>
              <div className="flex mt-4 space-x-2 overflow-x-auto pb-2 scrollbar-hide">
                {data.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`flex-shrink-0 h-20 w-32 rounded-md overflow-hidden border-2 ${idx === currentImageIndex ? 'border-blue-500' : 'border-transparent'}`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Room Details */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">{data.roomtitle}</h1>
                      <div className="flex items-center mt-2 text-gray-600">
                        <FaLocationPin className="text-gray-500 mr-1" />
                        <span className="text-lg">{data.address}, {data.city}</span>
                      </div>
                    </div>
                    <div className="flex items-center bg-blue-100 px-3 py-1 rounded-full">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="font-medium">4.8</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3">About This Space</h2>
                    <p className="text-gray-700 leading-relaxed">
                      {data.description}
                    </p>
                    <p className="mt-4 text-gray-700">
                      <span className="font-semibold">Why you'll love it:</span> This {data.categories.toLowerCase()} offers the perfect blend of comfort and convenience, located in the heart of {data.city}. With modern amenities and a prime location, it's ideal for students and professionals alike.
                    </p>
                  </div>

                  <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Features & Amenities</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {data.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
                          {featureIcons[feature] || <IoIosArrowForward className="text-blue-500" />}
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Room Specifications */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Room Specifications</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <FaBed className="text-blue-600 text-xl" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Room Type</p>
                        <p className="font-medium">{data.categories}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <FaRulerCombined className="text-blue-600 text-xl" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Size</p>
                        <p className="font-medium">{data.roomsize} sq.ft</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location Map */}
                {data?.location && data.location.lat && data.location.lng && (
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Location</h2>
                    <p className="text-gray-700 mb-4">
                      Perfectly situated in {data.city}, this property offers easy access to public transport, shopping centers, and local attractions.
                    </p>
                    <div className="h-80 rounded-lg overflow-hidden">
                      <LeafletMap location={data.location} setLocation={() => {}} />
                    </div>
                  </div>
                )}

                {/* Reviews Section */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">What Others Say</h2>
                  
                  {/* Review Form */}
                  {userdetails && (
                    <div className="mb-8 bg-gray-50 p-5 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Share Your Experience</h3>
                      <div className="flex items-center mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setreviewdata({ ...reviewdata, rating: star })}
                            className={`text-2xl ${star <= reviewdata.rating ? "text-yellow-400" : "text-gray-300"}`}
                          >
                            ★
                          </button>
                        ))}
                        <span className="ml-2 text-gray-600 text-sm">{reviewdata.rating > 0 ? `You rated ${reviewdata.rating} star${reviewdata.rating > 1 ? 's' : ''}` : 'Rate this room'}</span>
                      </div>
                      <textarea
                        name="comment"
                        value={reviewdata.comment}
                        onChange={(e) => setreviewdata({ ...reviewdata, comment: e.target.value })}
                        rows="3"
                        className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        placeholder="Share details of your experience..."
                      ></textarea>
                      <button
                        onClick={handlereview}
                        className="mt-3 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition font-medium"
                      >
                        Submit Review
                      </button>
                    </div>
                  )}

                  {/* Reviews List */}
                  <div className="space-y-6">
                    {review.length > 0 ? (
                      review.map((review, index) => (
                        <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <img
                                src={review.profilepic || "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"}
                                className="h-12 w-12 rounded-full object-cover"
                                alt={review.username}
                              />
                              <div>
                                <h4 className="font-medium text-gray-900">{review.username}</h4>
                                <p className="text-sm text-gray-500">
                                  {new Date(review.time).toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric"
                                  })}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"}>
                                  ★
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="mt-3 text-gray-700">{review.comment}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 text-center py-6">No reviews yet. Be the first to review!</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column - Booking & Owner Info */}
              <div className="space-y-6">
                {/* Pricing Card */}
                <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-3xl font-bold text-gray-900">Rs. {data.room_price_monthly}</span>
                    <span className="text-gray-500">per month</span>
                  </div>
                  
                  {data.status === "available" ? (
                    <button
                      onClick={() => setShowBookingForm(true)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-md hover:shadow-lg"
                    >
                      Request to Book
                    </button>
                  ) : (
                    <button
                      className="w-full bg-gray-400 text-white font-medium py-3 px-4 rounded-lg cursor-not-allowed"
                      disabled
                    >
                      Currently Unavailable
                    </button>
                  )}

                  <div className="mt-4 text-center text-sm text-gray-500">
                    No booking fees. Secure your room today!
                  </div>

                  {/* Owner Info */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">About the Owner</h3>
                    <div className="flex items-center space-x-4">
                      <img
                        src={ownerdata?.profilepic || "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"}
                        className="h-14 w-14 rounded-full object-cover"
                        alt="Owner"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">{ownerdata?.name}</h4>
                        <p className="text-sm text-gray-500">Verified Landlord</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setismessageshow(true)}
                      className="mt-4 w-full flex items-center justify-center space-x-2 border border-blue-600 text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition"
                    >
                      <CiChat1 size={18} />
                      <span>Contact Owner</span>
                    </button>
                  </div>
                </div>

                {/* Why Book With Us */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Why Book With MeroRoom?</h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500">✓</span>
                      <span>Verified listings with real photos</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500">✓</span>
                      <span>Secure booking process</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500">✓</span>
                      <span>24/7 customer support</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500">✓</span>
                      <span>No hidden fees</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loadinganimation />
        )}
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            <button 
              onClick={() => setShowBookingForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <RxCross2 size={24} />
            </button>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Book This Room</h2>
            <p className="text-gray-600 mb-6">Complete this form to request a booking</p>
            
            <form onSubmit={handleBookingSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={bookingData.name}
                    onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                  <input
                    type="tel"
                    value={bookingData.contact}
                    onChange={(e) => setBookingData({...bookingData, contact: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Move-in Date</label>
                  <input
                    type="date"
                    value={bookingData.moveInDate}
                    onChange={(e) => setBookingData({...bookingData, moveInDate: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message to Owner (Optional)</label>
                  <textarea
                    value={bookingData.message}
                    onChange={(e) => setBookingData({...bookingData, message: e.target.value})}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell the owner about your plans..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  Submit Booking Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

const Messagebox = ({ setismessageshow, owner }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm interested in your room listing. Is it still available?", sender: "owner" },
    { text: "Yes, it's available! When would you like to move in?", sender: "me" }
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: "me" }]);
      setMessage("");
      // Simulate reply after 1 second
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Thanks for your message! I'll get back to you soon.", sender: "owner" }]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 w-96 bg-white rounded-xl shadow-xl flex flex-col z-50 overflow-hidden">
      <div className="bg-blue-600 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={owner?.profilepic || "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"}
            className="h-10 w-10 rounded-full object-cover"
            alt="Owner"
          />
          <div>
            <h3 className="text-white font-medium">{owner?.name || "Property Owner"}</h3>
            <p className="text-blue-100 text-xs">Typically replies within 1 hour</p>
          </div>
        </div>
        <button 
          onClick={() => setismessageshow(false)}
          className="text-white/80 hover:text-white"
        >
          <RxCross2 size={20} />
        </button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-3">
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            <div 
              className={`max-w-xs rounded-lg px-4 py-2 ${msg.sender === "me" ? "bg-blue-600 text-white" : "bg-white text-gray-800 shadow-sm"}`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-3 bg-white">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button 
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
          >
            <IoIosArrowForward size={18} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Roompage;