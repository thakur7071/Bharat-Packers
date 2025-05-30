import React from 'react';
import {
  FaHome,
  FaTruck,
  FaGlobeAmericas,
  FaCarSide,
  FaWarehouse,
  FaShieldAlt,
} from 'react-icons/fa';
import { MdBusinessCenter } from 'react-icons/md';

const services = [
  { icon: <FaHome size={30} />, title: "Local Household Shifting" },
  { icon: <FaTruck size={30} />, title: "Domestic Shifting Services" },
  { icon: <MdBusinessCenter size={30} />, title: "Corporate Relocation" },
  { icon: <FaGlobeAmericas size={30} />, title: "International Transport" },
  { icon: <FaCarSide size={30} />, title: "Car & Bike Transportation" },
  { icon: <FaWarehouse size={30} />, title: "Warehouse Services" },
  { icon: <FaShieldAlt size={30} />, title: "Insurance Services" },
];

function HomePageServices() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-[#ff3131] mb-8 text-center">
        Popular Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <div className="text-[#ff3131] mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-4">{service.title}</h3>
            <button className="mt-auto bg-[#ff3131] text-white px-4 py-2 rounded-md hover:bg-red-600 transition whitespace-nowrap">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePageServices;
