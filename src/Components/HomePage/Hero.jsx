import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import your images
import herobanner1 from '../../Assets/herobanner1.jpg';
import herobanner2 from '../../Assets/herobanner2.jpg';
import herobanner3 from '../../Assets/herobanner3.jpg';
import herobanner4 from '../../Assets/herobanner4.jpg';
import herobanner5 from '../../Assets/herobanner5.jpg';

const cards = [
  {
    image: herobanner1,
    title: "Office Relocation Service",
    description:
      "We have professionally trained commercial packers and movers team. We can relocate your office with minimum business downtime.",
    buttonText: "Our Moving Services",
  },
  {
    image: herobanner2,
    title: "Car Transportation Service",
    description:
      "We can shift your car and two-wheeler to anywhere in India at a very economical cost. We are leading vehicle transport company in Mumbai.",
    buttonText: "Our Moving Services",
  },
  {
    image: herobanner3,
    title: "Safe Transportation",
    description:
      "We have our own fleet of moving trucks equipped with all safety features and extra padding. We can safely transport your goods to anywhere in India.",
    buttonText: "Our Moving Services",
  },
  {
    image: herobanner4,
    title: "Packers and Movers Mumbai",
    description:
      "We are fully licensed and insured packers and movers Mumbai offering professional local and long-distance moving services.",
    buttonText: "Our Moving Services",
  },
  {
    image: herobanner5,
    title: "Household Moving Service",
    description:
      "We are experts in Household shifting. We can pack your household goods and relocate them to the destination safely and on time.",
    buttonText: "Our Moving Services",
  },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const card = cards[currentIndex];

  return (
    <div className="w-full mb-10 overflow-hidden">
      {/* Mobile Layout */}
      <div className="relative block sm:hidden">
        <img
          src={card.image}
          alt={card.title}
          className="w-full  object-cover"
        />
        <div className="bg-white/30 backdrop-blur-sm p-6 text-center w-full">
          <h1 className="text-lg font-bold text-[#0047AB] mb-4">{card.title}</h1>
          <p className="text-sm text-[#0047AB] mb-6">{card.description}</p>
          <button className="bg-[#0047AB] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#003680] transition">
            {card.buttonText}
          </button>
        </div>

        {/* Mobile Arrows */}
        <button
          onClick={prevCard}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 text-[#0047AB] rounded-full p-2 shadow-md"
        >
          <FaArrowLeft size={12} />
        </button>
        <button
          onClick={nextCard}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 text-[#0047AB] rounded-full p-2 shadow-md"
        >
          <FaArrowRight size={12} />
        </button>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:block relative w-full min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] xl:min-h-screen">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover"
        />

        {/* Overlay card */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div
            className="bg-white/30 backdrop-blur-sm p-8 md:p-10 rounded-xl shadow-md text-center max-w-xl"
            style={{ maxHeight: '50vh', overflowY: 'auto' }}
          >
            <h1 className="text-2xl md:text-4xl font-bold text-[#0047AB] mb-4">
              {card.title}
            </h1>
            <p className="text-sm md:text-base text-[#0047AB] mb-6">
              {card.description}
            </p>
            <button className="bg-[#0047AB] text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:bg-[#003680] transition">
              {card.buttonText}
            </button>
          </div>
        </div>

        {/* Desktop Arrows */}
        <button
          onClick={prevCard}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-[#0047AB] rounded-full p-3 shadow-md transition"
        >
          <FaArrowLeft size={12} />
        </button>
        <button
          onClick={nextCard}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-[#0047AB] rounded-full p-3 shadow-md transition"
        >
          <FaArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}

export default Hero;
