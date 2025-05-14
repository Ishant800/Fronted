

function Landingpage1() {

  const data = [{
    id: 1,
    title: "Easy Search",
    desc: "Find rooms that match your exact requirements with our powerful search filters."
  },
  {
    id: 2,
    title: "Direct Communication",
    desc: "Chat directly with landlords to ask questions and arrange viewings."
  },
  {
    id: 3,
    title: "Secure Booking",
    desc: "Our secure payment system protects both tenants and landlords throughout the process."
  }]

  return (
    <div className="h-full flex justify-center items-center">


      <div className="p-10">
        <h1 className="text-center text-3xl font-medium">Why Choose Us?</h1>
        <p className="text-center text-md text-gray-600 font-medium pt-4 ">Our platform makes finding and booking your perfect room simple, secure, and stress-free.</p>
        <div className="flex flex-row items-center justify-around">
          {data.map(item => (
            <div key={item.id} className="m-10 flex flex-col items-center justify-center rounded-xl p-5 w-1/3 bg-blue-100  ">
              <div className="bg-blue-200 flex flex-col text-xl font-semibold text-gray-800 items-center justify-center rounded-full h-20 w-20 ">
                {item.id}
              </div>

              <p className="text-center text-[20px] pt-5 font-semibold text-gray-900">{item.title}</p>
              <p className="text-center text-[15px] font-medium text-gray-600 pt-8">{item.desc}</p>
            </div>
          ))}
        </div>


      </div>


    </div>
  )
}

export default Landingpage1