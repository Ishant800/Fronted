
function Categories() {
  const data = [{
    id:1,
    destinations:"pokhara",
    images:"https://www.ntpgroups.com/uploaded_files/thumb_cache/thumb_840_649_pokhara-tour-package.jpeg"
  },
{id:2,
  destinations:"kathmandu",
  images:"https://i.guim.co.uk/img/media/f399717f6fb80a54f8c8e8191e5ae94c8f2c80fc/0_100_3487_2092/master/3487.jpg?width=700&quality=85&auto=format&fit=max&s=0d4b88c7abe3c0011bb03f64203fa336"

},{
  id:3,
  destinations:"dharan",
  images:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqMWMfcyfl-BiK4f_ibly4pUlO-ELWBencwQ&s"

},{
id:4,
destinations:"biratnagar",
images:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0M1_Cxe_jxLxresD6QiHLyca8HRGdad6pzw&s"

} 

]
  return (
    <div className="container mx-auto px-20 py-8">
  
  <h2 className="text-2xl  font-bold mb-4 text-center">Popular Destinations</h2>

 
  <div className="flex space-x-4 px-10 py-4 items-center justify-center  pb-4">
    {data.map((item, index) => (
      <div
        className="relative flex-none w-82 h-60 rounded-xl shadow-xl overflow-hidden"
        key={index}
      >
       
        <img
          src={item.images}
          alt={item.destinations}
          className="w-full h-full hover:scale-120  object-cover opacity-90"
        />

       
        <div className="absolute bottom-0 left-0 w-full bg-opacity-50 text-white bg-slate-800 opacity-50 p-4">
          <h3 className="text-lg font-semibold">{item.destinations}</h3>
          <p className="text-sm">{item.properties} properties</p>
        </div>
      </div>
    ))}
  </div>
<div className="w-full flex items-center justify-center mt-5">
<button className="bg-sky-500 text-white px-6 rounded-md py-3">Explore more Destination</button>
</div>

</div>
  )
}

export default Categories