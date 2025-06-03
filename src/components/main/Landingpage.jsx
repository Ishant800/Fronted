import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Landingpage() {
  return (
    <div className="min-h-screen bg-blue-100 text-black">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-6 md:px-10 lg:px-20 py-16 gap-10">
        
        
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Find A Perfect Room <span className="text-sky-400">In MeroRoom</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
            Discover comfortable accommodations with premium amenities for your next adventure. MeroRoom connects you with ideal living spaces that match your budget and lifestyle.
          </p>
          <div className="mt-8">
            <Link to="/rooms">
              <button className="bg-white text-sky-600 font-semibold px-6 py-3 rounded-md flex items-center gap-2 hover:bg-slate-100 transition-all mx-auto lg:mx-0">
                Browse Properties <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>

       
        <div
          className="w-full sm:w-[400px] h-[400px] lg:w-1/2 bg-no-repeat bg-contain bg-center"
          style={{
            backgroundImage: "url('/images/her.png')",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Landingpage;
