import { FaFacebookMessenger, FaKey, FaSearch } from "react-icons/fa";

function Landingpage2() {
  const data = [
    {
      id: 1,
      icons: <FaSearch size={30} color="blue" />,
      title: "Search Rooms",
      desc: "Browse through verified listings with detailed descriptions, photos, and reviews."
    },
    {
      id: 2,
      icons: <FaFacebookMessenger size={30} color="blue" />,
      title: "Connect and Chat",
      desc: "Message landlords directly, ask questions, and schedule viewings through our platform."
    },
    {
      id: 3,
      icons: <FaKey size={30} color="blue" />,
      title: "Book & Move In",
      desc: "Secure your room with online booking and payments, then move into your new space."
    }
  ];

  return (
    <div className="w-full bg-slate-200 py-12 px-4 sm:px-6 lg:px-20 flex flex-col items-center">
      <div className="max-w-4xl text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
          How <span className="text-blue-500">MeroRoom</span> Works
        </h1>
        <p className="text-md sm:text-lg mt-4 text-slate-700 font-medium">
          We make finding and booking rooms simple, whether you're a tenant or a landlord.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full max-w-6xl">
        {data.map(item => (
          <div key={item.id} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <div className="bg-blue-100 flex items-center justify-center rounded-full h-20 w-20">
              {item.icons}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mt-4">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-4">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Landingpage2;