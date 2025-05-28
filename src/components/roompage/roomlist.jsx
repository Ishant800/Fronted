import { useState, useEffect } from "react";
import Addroom from "./addroom";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { deleteroom, fetchuserrooms } from "../redux/roomredux";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Roomlist() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { userrooms } = useSelector(state => state.room)
  const [isShowed, setIsShowed] = useState(false);
 

  const handledelete = async (id) => {
    try {
      const res = await dispatch(deleteroom(id))
      console.log('res from roomlist jsx ', res)
      if (deleteroom.fulfilled.match(res)) {
        toast.success("room deleted sucessfully", {
          hideProgressBar: true,
          autoClose: 2000,
          closeButton: false,
          draggable: false,
          pauseOnHover: false,
        })
      } else {
        toast.error('failed to delete room', {
          hideProgressBar: true,
          autoClose: 2000,
          closeButton: false,
          draggable: false,
          pauseOnHover: false,
        })
      }

    } catch (error) {
      toast.error("Error deleting room", {
        hideProgressBar: true,
        autoClose: 2000,
        closeButton: false,
        draggable: false,
        pauseOnHover: false,
      });
    }



  }
  useEffect(() => {

    if (userrooms.length === 0)
      dispatch(fetchuserrooms())


  }, [dispatch]);

  return (
    <div className="bg-gray-100 relative mx-auto h-screen overflow-x-hidden font-sans ">
       
      <div className="w-full py-5 px-10">

          

        <div className="flex-row justify-between mb-3 w-full">
          <h1 className="text-xl font-medium ">Your properties</h1>
          <div className="flex justify-between mt-2 mb-3 w-full">
            <input
              type="text"
              placeholder="Search room"
              className="px-5 py-2 rounded-sm outline-none bg-white border w-80"
            />
            <button
              onClick={() => setIsShowed(true)}
              className="text-sm font-medium px-2 py-1 rounded-sm text-white bg-black"
            >
              Add Room
            </button>
          </div>

        </div>
        

        {isShowed && (
          <div className="ml-50 absolute right-3 mb-10 top-20 left-20">
            <Addroom setIsShowed={setIsShowed}/>
            
          </div>
        )}

        <div className="grid grid-cols-5 bg-blue-50  gap-5 py-2">
          <div className="text-md font-semibold capitalize">Room ID</div>
          <div className="text-md font-semibold capitalize">Room Title</div>
          <div className="text-md font-semibold capitalize">Alloted Price</div>
          <div className="text-md font-semibold capitalize">Status</div>
          <div className="text-md font-semibold capitalize">Actions</div>

        </div>

        

        <div className="mt-4 space-y-3 ">
          {userrooms.length > 0 ? (
            userrooms.map((item, index) => (
              <div key={index} className=" gap-10 overflow-y-auto hover:bg-blue-100 grid grid-cols-5  nth-[even]:bg-slate-200 mb-2 py-2">
                <div
                onClick={()=>navigate(`/rooms/${item._id}`)}
                 className="cursor-pointer ">{item._id.slice(0, 8)}...</div>
                <div className="">{item.roomtitle}</div>
                <div>Rs {item.room_price_monthly}</div>
                <div
                  className={
                    item.status === "available" ? "text-gray-800" : "text-red-600"
                  }
                >
                  {item.status}
                </div>
                <div className="flex flex-row gap-5">
                  <div onClick={()=>{navigate(`/updaterooms/${item._id}`)
                    }}>
                    <FiEdit size={17} />

                  </div>

                  <div onClick={() => handledelete(item._id)}>
                    <MdDelete color="red" size={20} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-red-500">No properties found</p>
          )}
          {
            userrooms.length > 9 ? (
            <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-gray-600 font-medium">Total items: {userrooms.length}</p>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Previous</button>
              <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">1</button>
              <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">2</button>
              <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Next</button>
            </div>
          </div>) :''
          }
          
        </div>
      </div>
    </div>
  );
}

export default Roomlist;