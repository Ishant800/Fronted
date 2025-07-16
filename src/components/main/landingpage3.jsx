import React from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Graphic Designer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'Found my dream apartment in just 3 days! The matching system understood exactly what I needed.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'As someone new to the city, this service saved me weeks of stressful searching. Highly recommend!',
    rating: 4
  },
  {
    name: 'Emma Rodriguez',
    role: 'Medical Student',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'The verified listings gave me peace of mind. No more worrying about scams or fake photos.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          What Our <span className="text-indigo-600">Users Say</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Don't just take our word for it. Hear from people who found their perfect living space with us.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;