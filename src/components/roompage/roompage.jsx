import { FaLocationDot } from "react-icons/fa6";
import Navabar from "../navbar/navbar";
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

function Roompage() {
  const dispatch = useDispatch()
  const { id } = useParams();
  const {review} = useSelector((state)=>state.review)
  console.log(review)
  const [data, setdata] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [ismessageshow, setismessageshow] = useState(false);
 const [ownerdata,setownerdata] = useState(null)
const [reviewdata,setreviewdata] = useState({
  comment:'',
  rating:0

})
const {userdetails} = useSelector((state)=>state.auth)

 const handlereview = async(e)=>{
 
  e.preventDefault()

  if(reviewdata.rating === 0 || reviewdata.comment.trim() === ""){
    showWarningToast("please rate and write comments")
  }
  else{
 const paylaod ={
    userid:userdetails.userid,
    comment:reviewdata.comment,
    rating:reviewdata.rating
  }
 dispatch(Addreview({id,data:paylaod}))
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
          setSelectedImage(res.data.existroom.images[0]);
        }
      } catch (error) {
        alert(error);
      }
    };
    fetchdata();
  }, [id,dispatch]);

  const handlesubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const bookingdata = {
        ownerid: data.userid,
        roomid: id,
      };
      const res = await axios.post("http://localhost:5000/room/requestroom", bookingdata, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
       showSuccessToast("thanks for request we will contact back soon.")
      }
    } catch (error) {
      showErrorToast(error)
    }
  };


  return (
    <div className="relative bg-blue-50">
      <Navabar />
      {ismessageshow && <Messagebox setismessageshow={setismessageshow} />}

      <div className="w-full px-4 md:px-10 lg:px-30 py-10">
        {data ? (
          <div className="gap-10">
   
            <div className="w-full overflow-y-hidden ">
             <img
           src={selectedImage}
            alt="Room"
           className="w-full h-[400px] object-cover rounded-md shadow-md"
            />

           
              <div className="flex flex-wrap gap-2 mt-4">
                {data.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`thumb-${idx}`}
                    onClick={() => setSelectedImage(img)}
                    className={`h-30 w-38 object-cover cursor-pointer rounded-md border ${img === selectedImage ? 'border-blue-500' : 'border-gray-300'}`}
                  />
                ))}
              </div>
            </div>

           
            <div className="mt-3 bg-white px-4 rounded-md overflow-y-scroll">
            
              <h1 className="text-xl  mt-6 font-semibold text-slate-900">{data.roomtitle}</h1>
              <div className="flex items-center  gap-1 mt-2 text-gray-600">
                <FaLocationDot color="black"/>
                <span className="text-lg font-semibold">{data.address}</span>
              </div>

              <div className="mt-6 ">
                <h2 className="text-xl font-semibold text-slate-800">About This Room:</h2>
                <p className="text-md font-medium text-gray-600 mt-2">{data.description}</p>
                <button className="text-md font-medium text-blue-500">Read more.. </button>
              
              </div>

              <div className="mt-6 ">
                <h2 className="text-xl font-semibold text-slate-800">Features:</h2>
                <div className="flex gap-3 flex-wrap mt-2">
                  {data.features.map((feature, i) => (
                    <span key={i} className="text-sm font-medium bg-gray-100 px-3 py-1 rounded-md text-gray-700">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

           {data?.location && data.location.lat && data.location.lng && (
  <div className="mt-6 relative bg-white p-4 rounded-md">
    <h3 className="text-lg font-semibold">Room Location on Map</h3>
    <LeafletMap location={data.location} setLocation={() => {}} />
   
  </div>
)}

           <h1 className="text-xl pt-4 font-medium text-slate-900">Landowners details:</h1>
              <div className=" mt-4 rounded-md flex items-center gap-4">
              
                <img
              src={ownerdata.profilepic}
                className="rounded-full h-14 object-cover w-14"
                />
                <div className="leading-3">
                  <span className="block font-medium text-slate-800 text-md">{ownerdata.name}</span>
                  <span className="text-sm font-medium text-gray-500">{ownerdata.email}</span>
                </div>
                <CiChat1 onClick={() => setismessageshow(true)} className="cursor-pointer" size={20} />
              </div>
            
            <button
                  onClick={handlesubmit}
                  className="text-sm mt-4 mb-5 px-6 py-2 font-medium bg-sky-500 text-white rounded-md hover:bg-sky-600 transition"
                >
                  Request to Book </button>
                


 <div className="py-10">
  <div className="max-w-full mx-auto space-y-8">

    <h1 className="text-2xl font-semibold text-gray-800">Reviews</h1>
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
      <h2 className="text-lg font-medium text-gray-700">Write a Review</h2>
      
     <div className="flex gap-1 text-yellow-400 text-xl">
  {[1, 2, 3, 4, 5].map((star) => (
    <button
      key={star}
      type="button"
      onClick={() => setreviewdata({ ...reviewdata, rating: star })}
      className={star <= reviewdata.rating ? "text-yellow-400" : "text-gray-300"}
    >
      ★
    </button>
  ))}
</div>

  
      <textarea 
      name="comment"
      value={reviewdata.comment}
      onChange={(e)=>setreviewdata({...reviewdata,comment:e.target.value})}
        rows="4"
        className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        placeholder="Write your honest feedback here..."
      ></textarea>

     
      <button
      onClick={handlereview}
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        Submit Review
      </button>
    </div>


          {review.map((review,index)=>(
             <div key={index} className="bg-white  shadow-md rounded-lg p-5 space-y-3">
      <div className="flex items-center gap-4">
        <img 
          src={review.profilepic}
          className="h-12 w-12 rounded-full object-cover" alt=""
        />
        <div>
          <span className="text-base font-semibold text-gray-700 block">{review.username}</span>
        <span className="text-xs text-gray-500">
  {new Date(review.time).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })}
</span>
        </div>
      </div>

 
      <div className="flex items-center gap-1 text-lg">
  {[...Array(5)].map((_, i) => (
    <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"}>
      ★
    </span>
  ))}
  <span className="text-sm text-gray-600 ml-2 font-medium">{review.rating}.0</span>
</div>


      <p className="text-sm font-medium text-gray-700 leading-relaxed">
        {review.comment}
      </p>
    </div>
          ))}
    </div>
   
    

  </div>
</div>




            </div>
     
        ) : (
          <Loadinganimation/>
        )}
        
      </div>
    </div>
  );
}

export default Roompage;



const Messagebox = ({ setismessageshow }) => {
  return (
    <div className="absolute bg-slate-100 shadow-md rounded-md right-1 bottom-2 w-96 h-96 flex flex-col">
      
      
      <div className="bg-blue-200 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://static-cse.canva.com/blob/1911653/tools_transparent-background_promo-showcase_01-AFTER.jpg"
            className="rounded-full h-10 w-10"
            alt=""
          />
          <div>
            <span className="block font-medium text-slate-800">Alex jenda</span>
            <span className="text-sm font-medium text-gray-500">alexjenda@gmail.com</span>
            <span className="text-sm font-medium text-green-500"> online</span>
          </div>
        </div>
        <RxCross2 onClick={() => setismessageshow(false)} size={20} color="red" className="cursor-pointer" />
      </div>

     
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
        <p className="text-slate-700 text-start">hi</p>
        <p className="text-blue-500 text-end">hello</p>
      </div>

     
      <div className="flex border-t border-gray-300 p-2">
        <input
          type="text"
          placeholder="type here ..."
          className="flex-1 px-4 py-2 border rounded-md outline-none"
        />
        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md font-medium">Send</button>
      </div>
    </div>
  );
};