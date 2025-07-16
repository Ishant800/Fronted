import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: '🔍',
      title: 'Smart Matching',
      description: 'Our AI finds rooms that match your lifestyle, budget, and preferences perfectly.'
    },
    {
      icon: '💰',
      title: 'No Hidden Fees',
      description: 'Transparent pricing with no surprises. What you see is what you pay.'
    },
    {
      icon: '🛡️',
      title: 'Verified Listings',
      description: 'Every room is personally verified by our team to ensure quality.'
    },
    {
      icon: '📱',
      title: 'Instant Updates',
      description: 'Get real-time notifications when new rooms match your criteria.'
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Why <span className="text-indigo-600">Choose Us</span>?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
            Find Your Perfect Room Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;