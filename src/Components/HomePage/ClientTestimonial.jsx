import React from 'react';
import { FaBox, FaSmile, FaWeightHanging, FaStar } from 'react-icons/fa';

const stats = [
  {
    icon: <FaBox size={40} className="text-white mb-2" />,
    value: "10K+",
    label: "Packages Delivered"
  },
  {
    icon: <FaSmile size={40} className="text-white mb-2" />,
    value: "8K+",
    label: "Satisfied Clients"
  },
  {
    icon: <FaWeightHanging size={40} className="text-white mb-2" />,
    value: "500+",
    label: "Tons of Goods"
  }
];

const testimonials = [
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Ravi Kumar",
    location: "Delhi, India",
    feedback: "Excellent service! My household items were delivered safely and on time.",
    rating: 5
  },
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Anita Sharma",
    location: "Mumbai, India",
    feedback: "Very professional team. I'm fully satisfied with the relocation process.",
    rating: 4
  }
];

function ClientTestimonial() {
  return (
    <>
      {/* Stats Section */}
      <div className="bg-[#ff7f7f] py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8">
            {stats.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {item.icon}
                <h3 className="text-2xl font-bold text-white">{item.value}</h3>
                <p className="text-gray-200">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#ff3131] mb-10">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((client, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-md p-6"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={client.img}
                    alt={client.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">{client.name}</h4>
                    <p className="text-sm text-gray-500">{client.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{client.feedback}</p>
                <div className="flex">
                  {Array(client.rating).fill().map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 mr-1" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientTestimonial;
