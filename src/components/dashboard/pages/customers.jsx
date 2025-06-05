import { useEffect, useState } from "react";
import axios from "axios";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Customers() {
  const [customersList, setCustomersList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/room/customers", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const bookedCustomers = res.data.requestdata.filter(
          (item) => item.status !== "booked"
        );
        console.log(bookedCustomers)
        setCustomersList(bookedCustomers);
      } catch (error) {
        console.error("Failed to fetch customer data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 min-h-screen bg-blue-100">
      <h1 className="text-xl font-medium mb-6 text-gray-800">Booked Customers</h1>

      <div className="grid grid-cols-7 gap-5 bg-blue-100 text-gray-700 py-3 px-4 font-semibold rounded-md">
        <div>Room ID</div>
        <div>Location</div>
        <div>User ID</div>
        <div>Email</div>
        <div>Name</div>
        <div>Contact</div>
        <div>Connect</div>
      </div>

      {customersList.length === 0 && (
        <div className="text-center text-gray-500 mt-6">No booked customers found.</div>
      )}

      {customersList.map((item, index) => (
        <div
          key={index}
          className={`grid grid-cols-7 gap-5 py-3 px-4 ${
            index % 2 === 0 ? "bg-white" : "bg-gray-100"
          } text-sm items-center rounded-md shadow-sm`}
        >
          <div className="truncate text-gray-600">{item.roomid?.slice(0, 10)}..</div>
          <div className="truncate text-gray-600">{item.roomlocation || "N/A"}</div>
          <div className="truncate text-gray-600">
            {item.userid ? item.userid.slice(0, 10) + ".." : "N/A"}
          </div>
          <div className="truncate text-gray-600">{item.useremail || "N/A"}</div>
          <div className="truncate text-gray-600">{item.username || "N/A"}</div>
          <div className="truncate text-gray-600">{item.contactno || "N/A"}</div>
          <div className="flex gap-3">
            <a
              href={`mailto:${item.useremail}`}
              className="text-blue-600 hover:text-blue-800"
              title="Email"
            >
              <FaEnvelope />
            </a>
            {item.contactno && (
              <a
                href={`tel:${item.contactno}`}
                className="text-green-600 hover:text-green-800"
                title="Call"
              >
                <FaPhoneAlt />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Customers;
