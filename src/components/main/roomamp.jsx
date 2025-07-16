import React, { useState } from 'react';

const RoomMap = () => {
  const [activeNeighborhood, setActiveNeighborhood] = useState(null);
  
  // Mock neighborhood data
  const neighborhoods = [
    { id: 1, name: "Downtown", rooms: 28, avgPrice: "$1,200", topFeature: "Best for professionals" },
    { id: 2, name: "Arts District", rooms: 15, avgPrice: "$950", topFeature: "Creative community" },
    { id: 3, name: "University Heights", rooms: 42, avgPrice: "$850", topFeature: "Student-friendly" },
    { id: 4, name: "Riverside", rooms: 19, avgPrice: "$1,050", topFeature: "Scenic views" },
    { id: 5, name: "Market Square", rooms: 23, avgPrice: "$1,100", topFeature: "Food & nightlife" }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Map visualization (simplified) */}
        <div className="md:w-2/3 bg-blue-50 p-6 relative min-h-64">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-md mx-auto">
              {/* Neighborhood "hotspots" */}
              {neighborhoods.map((area, index) => {
                const positions = [
                  { top: "20%", left: "30%" },
                  { top: "35%", left: "60%" },
                  { top: "60%", left: "40%" },
                  { top: "70%", left: "20%" },
                  { top: "45%", left: "15%" }
                ];
                
                return (
                  <button
                    key={area.id}
                    className={`absolute w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all duration-200
                      ${activeNeighborhood === area.id 
                        ? 'bg-indigo-600 text-white transform scale-125' 
                        : 'bg-white text-indigo-600 hover:bg-indigo-100'}`}
                    style={{
                      top: positions[index].top,
                      left: positions[index].left
                    }}
                    onClick={() => setActiveNeighborhood(area.id)}
                  >
                    {area.id}
                  </button>
                );
              })}
              
              {/* Simple city illustration */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-300">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Neighborhood info panel */}
        <div className="md:w-1/3 bg-gray-50 p-6 border-l border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Explore Neighborhoods</h3>
          
          {activeNeighborhood ? (
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg mb-2">
                {neighborhoods.find(n => n.id === activeNeighborhood).name}
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-indigo-600 font-medium mr-2">{neighborhoods.find(n => n.id === activeNeighborhood).rooms}</span>
                  <span className="text-gray-600">available rooms</span>
                </div>
                <div className="flex items-center">
                  <span className="text-indigo-600 font-medium mr-2">{neighborhoods.find(n => n.id === activeNeighborhood).avgPrice}</span>
                  <span className="text-gray-600">average price</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Top feature:</span> {neighborhoods.find(n => n.id === activeNeighborhood).topFeature}
                </div>
              </div>
              <button className="mt-4 w-full py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 transition">
                View Rooms in This Area
              </button>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <p>Click on a neighborhood to see available rooms</p>
            </div>
          )}
          
          <div className="mt-6">
            <h4 className="font-medium text-gray-700 mb-2">Quick Search Areas:</h4>
            <div className="flex flex-wrap gap-2">
              {neighborhoods.map(area => (
                <button
                  key={area.id}
                  className={`px-3 py-1 text-xs rounded-full transition
                    ${activeNeighborhood === area.id 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-white border border-gray-300 hover:border-indigo-300'}`}
                  onClick={() => setActiveNeighborhood(area.id)}
                >
                  {area.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomMap;