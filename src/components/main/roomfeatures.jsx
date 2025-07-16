import React, { useState } from 'react';

const RoomFeatures = () => {
  const [comparedRooms, setComparedRooms] = useState([]);
  
  // Mock room data
  const rooms = [
    {
      id: 1,
      title: "Sunny Downtown Studio",
      price: "$1,150/mo",
      size: "450 sq ft",
      type: "Studio",
      amenities: ["Laundry", "Gym", "Parking"],
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "Arts District Loft",
      price: "$950/mo", 
      size: "Shared",
      type: "Private Room",
      amenities: ["Rooftop", "Bike Storage", "Pet Friendly"],
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      title: "University Heights Apartment",
      price: "$875/mo",
      size: "Shared",
      type: "Master Bedroom",
      amenities: ["Furnished", "Utilities Included", "Study Room"],
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  const toggleRoomComparison = (room) => {
    if (comparedRooms.some(r => r.id === room.id)) {
      setComparedRooms(comparedRooms.filter(r => r.id !== room.id));
    } else if (comparedRooms.length < 2) {
      setComparedRooms([...comparedRooms, room]);
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Compare Rooms Side-by-Side</h2>
      
      <div className="mb-8">
        <p className="text-gray-600 mb-4">Select 2 rooms to compare features and pricing</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {rooms.map(room => (
            <div 
              key={room.id}
              className={`bg-white rounded-lg shadow-sm border-2 overflow-hidden transition-all
                ${comparedRooms.some(r => r.id === room.id) ? 'border-indigo-500' : 'border-transparent hover:border-gray-200'}`}
            >
              <div className="h-40 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{room.title}</h3>
                <p className="text-indigo-600 font-medium">{room.price}</p>
                <button
                  className={`mt-3 w-full py-2 rounded-md text-sm font-medium transition
                    ${comparedRooms.some(r => r.id === room.id)
                      ? 'bg-gray-100 text-indigo-600 border border-indigo-300'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
                  onClick={() => toggleRoomComparison(room)}
                >
                  {comparedRooms.some(r => r.id === room.id) ? 'Remove' : 'Compare'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {comparedRooms.length === 2 && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-gray-200">
            {comparedRooms.map((room, index) => (
              <div key={index} className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{room.title}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-medium">{room.price}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-medium">{room.type}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Size:</span>
                    <span className="font-medium">{room.size}</span>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Amenities:</p>
                    <ul className="space-y-1">
                      {room.amenities.map((amenity, i) => (
                        <li key={i} className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button className="mt-6 w-full py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition">
                  View Full Details
                </button>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-4 border-t border-gray-200 flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Which one do you prefer?
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-green-100 text-green-700 rounded-md text-sm font-medium hover:bg-green-200 transition">
                Choose Option 1
              </button>
              <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-200 transition">
                Choose Option 2
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomFeatures;