
function Reviews() {
  return (
    <div className="py-10 px-4">
  <div className="max-w-2xl mx-auto space-y-8">

    <h1 className="text-2xl font-semibold text-gray-800">Reviews</h1>

 
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
      <h2 className="text-lg font-medium text-gray-700">Write a Review</h2>

      
      <div className="flex gap-1 text-yellow-400 text-xl">
        <button>★</button>
        <button>★</button>
        <button>★</button>
        <button>★</button>
        <button>★</button>
      </div>

  
      <textarea 
        rows="4"
        className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        placeholder="Write your honest feedback here..."
      ></textarea>

     
      <button
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        Submit Review
      </button>
    </div>

    <div className="bg-white shadow-md rounded-lg p-5 space-y-3">
      <div className="flex items-center gap-4">
        <img 
          src="https://static.vecteezy.com/system/resources/thumbnails/001/840/618/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
          className="h-12 w-12 rounded-full object-cover" alt=""
        />
        <div>
          <span className="text-base font-semibold text-gray-700 block">Alex Jenda</span>
          <span className="text-xs text-gray-500">24 June, 2025</span>
        </div>
      </div>

 
      <div className="flex items-center gap-1 text-yellow-400 text-lg">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span className="text-gray-300">★</span>
        <span className="text-sm text-gray-600 ml-2">4.0</span>
      </div>

      <p className="text-sm text-gray-700 leading-relaxed">
        Room is so good and affordable price with so many facilities. Recommended to everyone who wants to live here.
      </p>
    </div>
  </div>
</div>

  )
}

export default Reviews