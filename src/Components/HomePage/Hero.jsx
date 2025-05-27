import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import herobanner1 from '../../Assets/herobanner1.jpg';
import herobanner2 from '../../Assets/herobanner2.jpg';
import herobanner3 from '../../Assets/herobanner3.jpg';
import herobanner4 from '../../Assets/herobanner4.jpg';
import herobanner5 from '../../Assets/herobanner5.jpg';

const cards = [
  {
    image: herobanner1,
    title: "Office Relocation Service",
    description: "We have professionally trained commercial packers and movers team. We can relocate your office with minimum business downtime.",
    buttonText: "Our Moving Services",
  },
  {
    image: herobanner2,
    title: "Car Transportation Service",
    description: "We can shift your car and two-wheeler to anywhere in India at a very economical cost. We are leading vehicle transport company in Mumbai.",
    buttonText: "Our Moving Services",
  },
  {
    image: herobanner3,
    title: "Safe Transportation",
    description: "We have our own fleet of moving trucks equipped with all safety features and extra padding. We can safely transport your goods to anywhere in India.",
    buttonText: "Our Moving Services",
  },
  {
    image: herobanner4,
    title: "Packers and Movers Mumbai",
    description: "We are fully licensed and insured packers and movers Mumbai offering professional local and long-distance moving services.",
    buttonText: "Our Moving Services",
  },
  {
    image: herobanner5,
    title: "Household Moving Service",
    description: "We are experts in Household shifting. We can pack your household goods and relocate them to the destination safely and on time.",
    buttonText: "Our Moving Services",
  },
];

function Hero() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex(index === 0 ? cards.length - 1 : index - 1);
  const next = () => setIndex(index === cards.length - 1 ? 0 : index + 1);

  const { image, title, description, buttonText } = cards[index];

  return (
    <div className="w-full mb-10 overflow-hidden">
      {/* Mobile View */}
      <div className="relative block sm:hidden">
        <img src={image} alt={title} className="w-full object-cover" />
        <div className="bg-gray-300 p-6 text-center w-full rounded-md shadow-md text-white">
          <h1 className="text-lg font-bold mb-4 text-[#0047AB]">{title}</h1>
          <p className="text-sm mb-6 text-[#0047AB]">{description}</p>
          <button className="bg-white text-[#0047AB] px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
            {buttonText}
          </button>
        </div>
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 text-[#0047AB] rounded-full p-2 shadow-md"
          aria-label="Previous"
        >
          <FaArrowLeft size={12} />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 text-[#0047AB] rounded-full p-2 shadow-md"
          aria-label="Next"
        >
          <FaArrowRight size={12} />
        </button>
      </div>

      {/* Desktop View */}
      <div className="hidden sm:block relative w-full h-[90vh]">
        <img src={image} alt={title} className="w-full h-full object-cover" />

        {/* Centered Overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="bg-white/30 backdrop-blur-sm p-8 md:p-10 rounded-xl shadow-md text-center max-w-xl">
            <h1 className="text-2xl md:text-4xl font-bold text-[#0047AB] mb-4">{title}</h1>
            <p className="text-sm md:text-base text-[#0047AB] mb-6">{description}</p>
            <button className="bg-[#0047AB] text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:bg-[#003680] transition">
              {buttonText}
            </button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-[#0047AB] rounded-full p-3 shadow-md transition"
          aria-label="Previous"
        >
          <FaArrowLeft size={12} />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-[#0047AB] rounded-full p-3 shadow-md transition"
          aria-label="Next"
        >
          <FaArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}

export default Hero;
