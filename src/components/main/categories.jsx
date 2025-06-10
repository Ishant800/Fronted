function Categories() {
  const data = [
    {
      id: 1,
      destinations: "pokhara",
      images:
        "https://www.ntpgroups.com/uploaded_files/thumb_cache/thumb_840_649_pokhara-tour-package.jpeg",
    },
    {
      id: 2,
      destinations: "kathmandu",
      images:
        "https://i.guim.co.uk/img/media/f399717f6fb80a54f8c8e8191e5ae94c8f2c80fc/0_100_3487_2092/master/3487.jpg?width=700&quality=85&auto=format&fit=max&s=0d4b88c7abe3c0011bb03f64203fa336",
    },
    {
      id: 3,
      destinations: "Bhaktapur",
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqMWMfcyfl-BiK4f_ibly4pUlO-ELWBencwQ&s",
    },
    {
      id: 4,
      destinations: "biratnagar",
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0M1_Cxe_jxLxresD6QiHLyca8HRGdad6pzw&s",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-xl   md:text-2xl font-bold text-center mb-8">
        Popular Destinations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="relative w-full h-60 rounded-xl shadow-md overflow-hidden group"
          >
            <img
              src={item.images}
              alt={item.destinations}
              className="w-full h-2/3 object-cover transform duration-300 group-hover:scale-105"
            />
            <div className=" bottom-0 left-0 w-full p-3">
              <h3 className="text-lg text-black font-semibold capitalize">
                {item.destinations}
              </h3>
              <p className="text-sm text-black">10+ properties</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center mt-10">
        <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-md transition-all duration-300">
          Explore More Destinations
        </button>
      </div>
    </div>
  );
}

export default Categories;
