import React from 'react';
import { HomeAboutImg } from '../Assets';
import { FaCheckCircle } from 'react-icons/fa';

function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-16">
      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={HomeAboutImg}
            alt="About Us"
            className="w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-extrabold text-[#ff3131] mb-4">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            Welcome to our website! We are passionate about delivering top-quality logistics and transport solutions that respect your time and priorities.
            Our team is committed to innovation and excellence, ensuring each delivery is handled with care and efficiency. With a nationwide network, real-time tracking,
            e-billing, and a skilled customer service platform, we help grow your business.
            Transparency, integrity, and long-term relationships are at the heart of what we do.
            Thank you for choosing us as your trusted partner in logistics.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-r from-[#ff3131] to-[#ff6b6b] text-white p-8 rounded-lg shadow-md text-center">
        <h3 className="text-3xl font-semibold mb-4">Why Our Company is the Best</h3>
        <p className="text-lg leading-relaxed text-justify">
          We combine cutting-edge technology with deep industry expertise to deliver unmatched value.
          Our commitment to quality, innovation, and customer satisfaction sets us apart from the competition.
          Timely delivery, transparent communication, and continuous support ensure peace of mind for every shipment.
          Our 24/7 support system and real-time tracking keep you informed—anytime, anywhere.
        </p>
      </div>

      {/* Vision and Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h4 className="text-[#ff3131] text-2xl font-bold mb-2">Our Vision</h4>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            To be a global leader in logistics and transportation, driving positive change through innovation,
            sustainability, and a relentless commitment to excellence.
            We envision a future where our services empower businesses and communities to thrive.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h4 className="text-[#ff3131] text-2xl font-bold mb-2">Our Mission</h4>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            To deliver high-quality, customer-focused logistics solutions that solve real-world challenges.
            We aim to build lasting partnerships based on trust, transparency, and efficiency—supporting business growth through timely, reliable services.
          </p>
        </div>
      </div>

      {/* Know About Us & Priorities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Know About Us */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-[#ff3131] text-2xl font-bold mb-4">Know About Us</h3>
          <p className="text-gray-700 text-lg text-justify mb-4">
            Reliable and express logistics and transport solutions that don't waste your time!
            We are a one-stop logistics service provider for many industries.
            Grow your business with our nationwide network, on-time commitment, real-time tracking, e-billing, and skilled customer service platform.
          </p>
          <p className="text-gray-700 text-lg text-justify">
            We deliver your cargo on time and with care. With our tracking services and support channels, you’ll always know where your package is—any time, any day!
          </p>
        </div>

        {/* Prime Priorities */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-[#ff3131] text-2xl font-bold mb-4">Our Prime Priorities</h3>
          <ul className="space-y-3 text-gray-700 text-lg text-justify">
            {[
              'Customer and employee solutions are time-efficient.',
              'We accomplish our goals more efficiently.',
              'Transparent communication and proper collaboration.',
              'A roadmap to increased productivity.',
              'Providing independent and expert advice for your needs.',
              '24/7 support system available for uninterrupted service.',
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <FaCheckCircle className="text-[#ff3131] mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
