import { useState } from "react"
import { useDispatch } from "react-redux";

import Navabar from "../navbar/navbar";
import Footer from "../footer/footer";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
export default function Updateroom() {
  const {id} = useParams()
  
  console.log(id)
  const dispatch = useDispatch()
   const [formData, setFormData] = useState({
      roomtitle: "",
      categories: "",
      roomsize: "",
      description: "",
      features: "",
      location: "",
      city: "",
      address: "",
      country: "Nepal",
      room_price_monthly: "",
      available_from: "",
    });
  
    const [files, setFiles] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleFileChange = (e) => {
        const Files = e.target.files;
        setFiles((prevFiles) => [...prevFiles, ...Files]);
      };
    const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (files.length === 0) {
          toast.error("Please upload at least one image");
          return;
        }
    
        const data = new FormData();
    
        
        for (const key in formData) {
          if (formData[key]) {
            data.append(key, formData[key]);
          }
        }
    
        
        files.forEach((file) => data.append("images", file));
    
        
    
        try {
         
          const res = await dispatch(updateroom({id,data}));
    
          if (updateroom.fulfilled.match(res)) {
            toast.success("Room added successfully!",{
               hideProgressBar:true,
        autoClose:2000,
        closeButton:false,
        draggable:false,
        pauseOnHover:false,
            });
            setFormData({
              roomtitle: "",
              categories: "",
              roomsize: "",
              description: "",
              features: "",
              location: "",
              city: "",
              address: "",
              country: "Nepal",
              room_price_monthly: "",
              available_from: "",
            });
            setFiles([]);
          } else {
            throw new Error(res.payload?.message || "Something went wrong");
          }
        } catch (err) {
          toast.error(err.message,{
            hideProgressBar:true,
        autoClose:2000,
        closeButton:false,
        draggable:false,
        pauseOnHover:false,
          });
        }
      console.log(files)
      console.log(formData)
      };
    

  
  return (
    <div>

   <Navabar/>
    <div className="h-full overflow-y-auto items-center flex justify-center rounded-md bg-white">

       <form action="" 
       onSubmit={handleSubmit}
       
       className="px-10 mb-4 shadow-md pb-4 rounded-md mt-10 shadow-slate-400">
          <h1 className="text-md font-medium  py-4 font-sans">Update Room info</h1>
          <div className="mt-2 ">
            <label htmlFor="" className="text-md font-medium">Roomtitle</label>
            <input type="text" 
            onChange={handleInputChange}
            name="roomtitle"
            value={formData.roomtitle}
            className="bg-slate-100 mt-2 w-full rounded-sm px-4 py-2" placeholder="enter suitable name for your properties"/>
          </div>
          <div className="mt-2 ">
            <label htmlFor="" className="text-md font-medium">Images</label>
            <input  
            type="file"
            name="files"
            multiple
            onChange={handleFileChange}
            className="bg-slate-100 mt-2 w-full rounded-sm px-4 py-2" placeholder="enter suitable name for your properties"/>
          <ul className="mt-2">
            {files.map((file, index) => (
              <li key={index} className="flex justify-between items-center text-sm">
                {file.name}
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-red-500 ml-2"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
          
          </div>


           <div className="mt-2 ">
            <label htmlFor="" className="text-md font-medium">About your properties</label>
            <textarea  
            onChange={handleInputChange}
            name="description"
            value={formData.description}
            className="bg-slate-100 mt-2 w-full rounded-sm px-4 py-2" id="" cols="30" rows="10"></textarea>
            
          </div>
           <div className="mt-2 flex items-center gap-10 justify-between">
            <div className="flex items-center gap-5">
          <label htmlFor="" className="text-md font-medium">Categories</label>
            <select name="categories"
            onChange={handleInputChange}
            
            value={formData.categories}
            id="" className="bg-slate-100 mt-2 w-full rounded-sm px-4 py-2">
              <option value="">select categories</option>
              <option value="single bed">Singlebed</option>
              <option value="double bed">double bed</option>
              <option value="office">office</option>
              <option value="flat">flat</option>
              <option value="apartment">apartment</option>
            </select>
            </div>


            <div className="flex items-center gap-5">
             <label htmlFor="" className="text-md font-medium">City</label>
            <select name="city"
            onChange={handleInputChange}
            
            value={formData.city}
             id="" className="bg-slate-100 mt-2 w-full rounded-sm px-4 py-2">
              <option value="">select city</option>
              <option value="Kathmandu">Kathmandu</option>
              <option value="Bhaktapur">Bhaktapur</option>
              <option value="Pokahara">Pokahara</option>
            </select>
            </div>
            

          </div>
           <div className="mt-2 ">
            <label htmlFor="" className="text-md font-medium">Roomsize</label>
            <input type="text"
            onChange={handleInputChange}
            name="roomsize"
            value={formData.roomsize}
            className="bg-slate-100 mt-2 w-full rounded-sm px-4 py-2" placeholder="22/24"/>
          </div>
           <div className="mt-2 ">
            <label htmlFor="" className="text-md font-medium">Features</label>
            <input type="text"
            onChange={handleInputChange}
            name="features"
            value={formData.features}
            className="bg-slate-100 mt-2 w-full rounded-sm px-4 py-2" placeholder="wifi, electricity and many more.."/>
          </div>

           <div className="mt-2 ">
            <label htmlFor="" className="text-md font-medium">Location</label>
            <input type="text"
            onChange={handleInputChange}
            name="location"
            value={formData.location}
            className="bg-slate-100 mt-2 w-full rounded-sm px-4 py-2" placeholder="existing location"/>
          </div>
           <div className="mt-2 ">
            <label htmlFor="" className="text-md font-medium">Address</label>
            <input type="text" 
            onChange={handleInputChange}
            name="address"
            value={formData.address}
            className="bg-slate-100 mt-2 w-full rounded-sm px-4 py-2" placeholder="existing Address"/>
          </div>

          <div className="mt-2 ">
            <label htmlFor="" className="text-md font-medium">Monthly Rate</label>
            <input type="number"
              onChange={handleInputChange}
            name="room_price_monthly"
            value={formData.room_price_monthly}
            className="bg-slate-100 mt-2 w-full rounded-sm px-4 py-2" placeholder="RS:2200"/>
          </div>
           <div className="mt-2 ">
            <label htmlFor="" className="text-md font-medium">Available from</label>
            <input type="date" 
             onChange={handleInputChange}
            name="available_from"
            value={formData.available_from}
               className="bg-slate-100 mt-2 w-full rounded-sm px-4 py-2" placeholder="RS:2200"/>
          </div>

           <div className="mt-3 flex justify-between items-center">
             <button type="submit" className="text-md font-medium bg-sky-200  px-5 py-2 rounded-md ">update room</button>
             <button  className="text-md font-medium bg-red-400 text-teal-50 px-5 py-2 rounded-md ">cancel update</button>
           </div>
        </form>

    </div>
   <Footer/>
     </div>
  )
}
