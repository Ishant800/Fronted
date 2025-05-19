

function Roomlist() {

    return (
    <div className="w-full">
             <div className="w-3/5 py-5 px-10">
             <div className="flex justify-between">
           <h1 className="text-xl font-bold text-gray-700"> your room list:</h1>
           <input type="text" placeholder="search room" className="px-5 py-2 rounded-sm outline-none bg-slate-50 w-80"/>
             <button className="text-md font-semibold px-3 py-2 rounded-sm bg-white">Add Room</button>
             </div>

            <div className="flex items-center gap-10">
               <div className="text-md font-semibold capitalize">roomid</div>
               <div className="text-md font-semibold capitalize">room title</div>
              <div className="text-md font-semibold capitalize">alloted price</div>
              <div className="text-md font-semibold capitalize">status</div>
              
            </div>

             </div>

    </div>
  )
}

export default Roomlist