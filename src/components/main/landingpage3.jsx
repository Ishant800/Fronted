function Landingpage3() {
  return (
    <div className='w-full bg-sky-600 py-10 px-4 sm:px-6 lg:px-20 flex flex-col items-center text-center'>
      <h1 className='text-white font-bold text-2xl sm:text-3xl'>Get Exclusive Offers</h1>
      <h2 className='text-slate-200 font-medium max-w-2xl mt-4 text-base sm:text-lg'>
        Subscribe to our newsletter and be the first to receive special promotions, travel tips, and seasonal discounts.
      </h2>

      <div className="flex flex-col sm:flex-row mt-6 items-center gap-4 w-full max-w-md">
        <input
          type="text"
          className="px-5 py-3 rounded-sm outline-none w-full sm:w-auto flex-1 bg-slate-50"
          placeholder="Subscribe for more information"
        />
        <button className="font-semibold rounded-sm px-6 py-3 bg-white text-sky-600 hover:bg-sky-100 transition">
          Subscribe
        </button>
      </div>

      <span className="text-sm text-white mt-4 max-w-xl">
        By subscribing, you agree to our Privacy Policy and consent to receive updates from us.
      </span>
    </div>
  );
}

export default Landingpage3;
