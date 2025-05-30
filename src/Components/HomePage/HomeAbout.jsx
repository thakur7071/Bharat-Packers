import React from 'react';
import { HomeAboutImg } from '../../Assets';

function HomeAbout() {
  return (

    <>
        
      <div >
   
      <div className="max-w-3xl mx-auto bg-white p-2 rounded-lg shadow-md">
        <h2 className="text-[#ff3131] text-2xl font-semibold mb-4">Get A Free Quote Now</h2>
        <form className="flex flex-col gap-4">
          {/* Name, Mobile Number, City in one line */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#ff3131]"
              required
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#ff3131]"
              required
            />
            <input
              type="text"
              placeholder="email"
              className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#ff3131]"
              required
            />
          </div>

          {/* From and To in one line */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="From"
              className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#ff3131]"
              required
            />
            <input
              type="text"
              placeholder="To"
              className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#ff3131]"
              required
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="Message"
            rows="4"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#ff3131]"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-white text-[#ff3131] py-2 border border-[#ff3131] rounded-md hover:bg-[#ff3131] hover:text-white transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>

<div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row items-center gap-6 p-4">
  {/* Left Content */}
  <div className="md:w-1/2 text-center md:text-left">
    <h2 className="text-2xl md:text-3xl font-bold text-[#ff3131] mb-2">
      Why Choose Our Service?
    </h2>
 <p className="text-gray-700 mb-2">
  We provide fast, reliable, and affordable transportation solutions across the country.
  Get your goods moved safely and quickly with our experienced team and modern vehicles.
  Our services are tailored to meet your unique logistics needs, no matter the distance.
  We offer 24/7 customer support to ensure your peace of mind at every step.
  From local deliveries to interstate moves, we handle it all with precision.
  Trust us for timely pickups, secure handling, and on-time deliveries every time.
</p>

  </div>

  {/* Right Image */}
  <div className="md:w-1/2">
    <img src={HomeAboutImg} alt="About Us" className="w-full h-auto " />
  </div>
</div>


    </>

  );
}

export default HomeAbout;
