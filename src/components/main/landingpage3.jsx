
function Landingpage3() {
  return (
    <div className='h-100 flex  flex-col justify-center items-center bg-sky-600 w-full'>
      <h1 className='text-white font-bold text-3xl '>Get Exclusive Offers
      </h1>
      <h2 className='text-slate-200 font-medium w-1/3 text-center pt-5 text-lg '>Subscribe to our newsletter and be the first to receive special promotions, travel tips, and seasonal discounts.</h2>

       <div className="flex mt-5 items-center gap-5 justify-center">
           <input type="text"
           className="px-5 py-3 rounded-sm outline-none w-80 bg-slate-50"
           placeholder="Subscribe for more information " />
           <button className="font-semibold rounded-sm px-5 py-3 bg-white">Subscribe</button>
       
       </div>
        <span className="text-md font-sm mt-3 text-white">By subscribing, you agree to our Privacy Policy and consent to receive updates from us.</span>
       

      

    </div>
  )
}

export default Landingpage3