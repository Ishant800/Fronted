import { useState } from 'react';
import Navabar from '../navbar/navbar';
import Footer from '../footer/footer';

export default function AboutPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How does RoomFinder verify listings?",
      answer: "We manually check each new listing for accuracy and require landlords to provide proof of ownership or management rights."
    },
    {
      question: "Is there a fee for tenants to use RoomFinder?",
      answer: "No, RoomFinder is completely free for tenants. Landlords pay a small fee only when they successfully rent their property through our platform."
    },
    {
      question: "How do I report a suspicious listing?",
      answer: "Click the 'Report' button on any listing page or email us directly at safety@roomfinder.com. We investigate all reports within 24 hours."
    },
    {
      question: "Can I schedule viewings through the app?",
      answer: "Yes! Our built-in scheduling tool allows you to request and confirm viewing appointments directly with landlords."
    }
  ];

  return (

    <div className="min-h-screen bg-gray-50">
        <Navabar/>
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white py-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About RoomFinder</h1>
          <p className="text-xl md:text-2xl">Your perfect room, just a search away</p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            RoomFinder was born in 2023 out of frustration with the traditional rental search process. 
            Our founders experienced firsthand how difficult it was to find quality rentals that matched their needs. 
            We set out to create a platform that makes finding and listing rooms simple, transparent, and efficient for everyone.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-indigo-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            To connect tenants with their ideal living spaces and help landlords find quality tenants - 
            all through an intuitive, stress-free platform that saves everyone time and hassle.
          </p>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose RoomFinder</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Smart Matching",
                description: "Advanced algorithms connect tenants with ideal properties",
                icon: "🔍"
              },
              {
                title: "Verified Listings",
                description: "All properties are checked for accuracy",
                icon: "✅"
              },
              {
                title: "Secure Communication",
                description: "Built-in messaging keeps your contact info private",
                icon: "🔒"
              },
              {
                title: "Digital Applications",
                description: "Apply for multiple properties with one profile",
                icon: "📝"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium text-left">{faq.question}</span>
                  <span className="text-indigo-600 text-xl">
                    {activeFaq === index ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === index && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}