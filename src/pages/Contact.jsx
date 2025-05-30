import React from "react";

function Contact() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto p-6">
        {/* Form on the left */}
        <div className="w-full md:w-1/2 bg-white p-6">
          <h2 className="text-[#ff3131] text-2xl font-semibold mb-4">
            Get A Free Quote Now
          </h2>
          <form className="flex flex-col gap-4">
            {/* Name and Mobile Number in one line */}
            <div className="flex flex-col md:flex-row gap-4 min-w-0">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#ff3131] min-w-0"
                required
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#ff3131] min-w-0"
                required
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#ff3131]"
              required
            />

            {/* From and To in one line */}
            <div className="flex flex-col md:flex-row gap-4 min-w-0">
              <input
                type="text"
                placeholder="From"
                className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#ff3131] min-w-0"
                required
              />
              <input
                type="text"
                placeholder="To"
                className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#ff3131] min-w-0"
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

        {/* Contact Info + Google Map on the right */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#ff3131] mb-4">
              Contact Us
            </h2>
            <div className="text-gray-700 space-y-2">
              <p>
                <span className="font-medium text-gray-900">Mobile:</span> +91
                8856904877
              </p>
              <p>
                <span className="font-medium text-gray-900">Email:</span>{" "}
                goodluckpackers@gmail.com
              </p>
              <p>
                <span className="font-medium text-gray-900">
                  Office Address:
                </span>{" "}
                Shop No. 11, Pratap Nagar SRA Building, Shivaji Nagar Kurar
                Village, Malad East
              </p>
            </div>
          </div>

          <div className="h-64 rounded-lg shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.12090313887!2d72.86141407466792!3d19.189920948387353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7a137588a21%3A0x8562b5288a629e43!2sPratap%20Nagar%20SRA!5e0!3m2!1sen!2sin!4v1748633616296!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
