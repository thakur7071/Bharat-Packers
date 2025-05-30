import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import {domesticpacker,   localpackers, officebanner, warehouse } from '../../Assets'

const cards = [
  {
    image: domesticpacker,
    title: "Domestic packers and movers",
    description: "Good Luck Packers and Movers is a reputed name for world-class Packers and Movers services in Mira Road. We are the frontrunner in offering...",
    buttonText: "Read More",
  },
  {
    image: localpackers,
    title: "Local Packers & Movers",
    description: "A company that offers Packers and Movers has to be compliant with safety and legal norms. There are state-level and national-level regulations that need to be ...",
    buttonText: "Read More",
  },
  {
    image: officebanner,
    title:"Office & Industrial",
    description: "Infrastructure is the distinguishing element that decides the quality and perfection of a relocation company. What makes us special Packers and movers...",
    buttonText: "Read More",
  },
  {
    image: warehouse,
    title: "WareHousing",
    description: "You need a reliable and efficient carrier to relocate the valuable stuff timely, and impeccably. Good Luck Packers and Movers Mira Road fulfill both ...",
    buttonText: "Read More",
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
          <h1 className="text-lg font-bold mb-4 text-[#ff3131]">{title}</h1>
          <p className="text-sm mb-6 text-[#ff3131]">{description}</p>
          <button className="bg-white text-[#ff3131] px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
            {buttonText}
          </button>
        </div>
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 text-[#ff3131] rounded-full p-2 shadow-md"
          aria-label="Previous"
        >
          <FaArrowLeft size={12} />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 text-[#ff3131] rounded-full p-2 shadow-md"
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
          <div className="bg-white/50 backdrop-blur-sm p-8 md:p-10 rounded-xl shadow-md text-center max-w-xl">
            <h1 className="text-2xl md:text-4xl font-bold text-[#ff3131] mb-4">{title}</h1>
            <p className="text-sm md:text-base text-[#ff3131] mb-6">{description}</p>
            <button className="bg-[#ff3131] text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:bg-[#fdd7d6] hover:text-[#ff3131] transition">
              {buttonText}
            </button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-[#ff3131] rounded-full p-3 shadow-md transition"
          aria-label="Previous"
        >
          <FaArrowLeft size={12} />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-[#ff3131] rounded-full p-3 shadow-md transition"
          aria-label="Next"
        >
          <FaArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}

export default Hero;
