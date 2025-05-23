import { FaFacebookMessenger, FaKey, FaSearch } from "react-icons/fa"

function Landingpage2() {
  const data = [
    {
      id: 1,
      icons: <FaSearch size={30} color="blue" />,
      title: "Search Rooms",
      desc: "Browse through verified listings with detailed descriptions, photos, and reviews."
    }, {
      id: 2,
      icons: <FaFacebookMessenger size={30} color="blue" />,
      title: "Connects and Chat",
      desc: "Message landlords directly, ask questions, and schedule viewings through our platform."

    },
    {
      id: 3,
      icons: <FaKey size={30} color="blue" />,
      title: "Book & Move In",
      desc: "Secure your room with online booking and payments, then move into your new space."
    }]
  return (
    <div className="h-full bg-slate-200 flex items-center flex-col">
      <div className="mt-10 leading-20">
        <h1 className="text-3xl text-center font-bold text-slate-800">How <span className="text-3xl text-blue-400 font-bold">MeroRoom </span>Works</h1>
        <span className="text-lg text-center mt-10 font-medium  text-slate-700">We make finding and booking rooms simple, whether you're a tenant or a landlord.
        </span>
      </div>

      <div className="flex flex-row items-center mx-20 gap-10 my-10 justify-around">
        {data.map(item => (
          <div key={item.id} className=" flex flex-col items-center justify-center rounded-xl p-5  bg-slate-100  ">
            <div className="bg-blue-100 flex flex-col items-center justify-center rounded-full h-20 w-20 ">
              {item.icons}
            </div>

            <p className="text-center text-[20px] pt-5 font-semibold text-gray-900">{item.title}</p>
            <p className="text-center text-[15px] font-medium text-gray-600 pt-8">{item.desc}</p>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Landingpage2