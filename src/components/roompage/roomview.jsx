import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { FaLocationDot, FaStar } from "react-icons/fa6"
import { FaDollarSign } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { fetchRoom } from "../redux/roomredux"
function Roomview() {
   const dispatch = useDispatch()
   const { room } = useSelector(state => state.room)
   const [data, setdata] = useState([])
   const [search, setsearch] = useState("")
   const [categories, setcategories] = useState("")
   const [city, setcity] = useState("")

   const navigate = useNavigate()
   useEffect(() => {

      if (room.length === 0) {
         dispatch(fetchRoom())
      }
      else {
         setdata(room)
      }

   }, [room, dispatch])


   useEffect(() => {
      if (search || categories || city) {
         let updatedata = [...room]

         if (search) {
            updatedata = updatedata.filter(f =>
               f.city.toLowerCase().includes(search.toLowerCase()) || f.categories.toLowerCase().includes(search.toLowerCase()))

         }

         if (city) {
            updatedata = updatedata.filter(f => f.city.toLowerCase().includes(city.toLowerCase()))

         }
         if (categories) {
            updatedata = updatedata.filter(f => f.categories.toLowerCase().includes(categories.toLowerCase()))

         }
         setdata(updatedata)
      } else {
         setdata(room)
      }
   }, [search, categories, city, room])
   return (
      <div className="overflow-hidden px-20 bg-gray-50">

         <div className="pt-10 items-center  sticky top-0 flex justify-between">
            <h1 className="text-2xl font-bold  text-gray-800"> Featured Properties</h1>
            <input type="text"
               value={search}
               onChange={e => setsearch(e.target.value)}
               className="px-4 py-2 rounded-sm border-2 w-1/3"
               placeholder="enter location where you wanna stay." />

            <div className="flex">

               <div className="">
                  <label htmlFor="" className="text-md font-medium px-2">Sort By City</label>
                  <select
                     value={city}
                     onChange={e => setcity(e.target.value)}
                     className="px-2 py-1 border-1 rounded-sm">
                     <option value="" className="font-medium">select city</option>
                     <option value="Kathmandu" className="font-medium">Kathmandu</option>
                     <option value="Pokhara" className="font-medium">pokhara</option>
                     <option value="Bhaktapur" className="font-medium">Bhaktapur</option>

                  </select>

               </div>
               <div className="">
                  <label htmlFor="" className="text-md font-medium px-2">Apply Categories</label>
                  <select
                     value={categories}
                     onChange={e => setcategories(e.target.value)}
                     className="px-2 py-1 border-1 rounded-sm">
                     <option value="" className="font-medium">Select categories</option>
                     <option value="single bed" className="font-medium">Single bed</option>
                     <option value="double bed" className="font-medium">Double bed</option>
                     <option value="apartment" className="font-medium">Apartment</option>
                     <option value="office" className="font-medium">Office</option>
                     <option value="flat" className="font-medium">Flat</option>
                  </select>

               </div>
            </div>

         </div>

         <div className="py-10  justify-center flex  items-center flex-wrap gap-10">
            {data && data.length > 0 ? (data.map((item, index) => (


               <div onClick={() => navigate(`/rooms/${item._id}`)} key={index} className=" shadow-sm object-contain rounded-md shadow-gray-400 w-90 h-full" >
                  <div className="">

                     <img src={item.images[0]} alt="" className="h-50 rounded-t-md  w-full" />

                  </div>


                  <div className="px-3 py-2 flex items-center gap-4 justify-between">
                     <span className="text-xl text-sky-500 block font-medium capitalaize">{item.roomtitle}</span>
                     <span className="flex "><FaStar color="orange" size={24} /> 4.0</span>
                  </div>


                  <div className="px-3 flex justify-between items-center py-2">
                     <div className="flex gap-2">
                        <FaLocationDot color="gray " size={24} />
                        <span className="font-medium text-gray-700 text-md">{item.city} ,<span>{item.country}</span> </span>

                     </div>

                     <div className="flex">
                        <span className="text-md capitalize font-medium">{item.categories}</span>
                     </div>
                  </div>

                  <div className="px-3 flex gap-2 items-center py-2">
                     <span className="font-medium capitalize text-gray-500 text-sm">{item.features[0]} ,</span>
                     <span className="font-medium capitalize text-gray-500 text-sm">{item.features[1]}, </span>
                     <span className="font-medium capitalize text-gray-500 text-sm">{item.features[2]} </span>

                  </div>



                  <div className="px-3 flex gap-2  justify-between items-center pb-2">
                     <span className=" text-sm font-medium capitalaize flex text-gray-600 items-center">Available from: {item.createdAt.slice(0,10)}</span>

                     <span className=" tetx-lg font-semibold capitalaize flex items-center"><FaDollarSign /> {item.room_price_monthly}<span className='text-gray-600 font-medium text-md'>/Month</span></span>


                  </div>



               </div>

            ))) : (<p className="text-xl font-medium text-slate-800">No Data Found</p>)}
         </div>

      </div>
   )
}

export default Roomview 