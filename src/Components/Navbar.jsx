import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logo } from "../Assets";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "Our Services",
    subLinks: [
      { href: "/household-shifting", label: "Household Shifting" },
      { href: "/business-relocation", label: "Business Relocation" },
      { href: "/vehicle-transportation", label: "Vehicle Transportation" },
      { href: "/packing", label: "Packing" },
      { href: "/local-moving", label: "Local Moving" },
      { href: "/long-distance", label: "Long Distance Moving" },
    ],
  },
  { href: "/aboutus", label: "About Us" },
  { href: "/servicearea", label: "Service Area" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpenDesktop, setServicesOpenDesktop] = useState(false);
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return (
    <>
      {/* Topbar */}
      <div className="bg-[#0047AB] p-1 text-white text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <span>Support: +91-9876543210</span>
          <div className="flex gap-3 text-base md:text-lg">
            <FaFacebookF className="cursor-pointer hover:text-gray-300" />
            <FaTwitter className="cursor-pointer hover:text-gray-300" />
            <FaInstagram className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-200 p-2 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-14 max-w-[180px]" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-black font-medium text-sm md:text-base lg:text-lg relative">
            {navLinks.map((link, i) =>
              link.subLinks ? (
                <div key={i} className="relative">
                  <button
                    onClick={() => setServicesOpenDesktop(!servicesOpenDesktop)}
                    className="flex items-center gap-2 hover:underline focus:outline-none"
                    aria-haspopup="true"
                    aria-expanded={servicesOpenDesktop}
                  >
                    {link.label}
                    {servicesOpenDesktop ? (
                      <FaChevronUp className="text-xs md:text-sm" />
                    ) : (
                      <FaChevronDown className="text-xs md:text-sm" />
                    )}
                  </button>

                  {servicesOpenDesktop && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white border rounded-md shadow-lg py-2 z-50">
                      {link.subLinks.map((sublink, j) => (
                        <Link
                          key={j}
                          to={sublink.href}
                          onClick={() => setServicesOpenDesktop(false)}
                          className="block px-4 py-2 text-xs md:text-sm lg:text-base text-gray-800 hover:bg-gray-100"
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={i}
                  to={link.href}
                  className="hover:underline text-sm md:text-base lg:text-lg"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
              setServicesOpenMobile(false);
            }}
            className="md:hidden text-2xl text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMounted && menuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-white z-40 p-6 space-y-6 overflow-y-auto ">
            <div className="flex justify-between items-center border-b pb-4">
              <span className="text-lg font-bold">Menu</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-2xl text-black focus:outline-none"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            {navLinks.map((link, i) =>
              link.subLinks ? (
                <div key={i}>
                  <button
                    onClick={() => setServicesOpenMobile(!servicesOpenMobile)}
                    className="flex justify-between w-full text-left font-semibold text-black focus:outline-none text-base"
                    aria-haspopup="true"
                    aria-expanded={servicesOpenMobile}
                  >
                    {link.label}
                    {servicesOpenMobile ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {servicesOpenMobile && (
                    <div className="pl-4 mt-2 space-y-2">
                      {link.subLinks.map((sublink, j) => (
                        <Link
                          key={j}
                          to={sublink.href}
                          onClick={() => setMenuOpen(false)}
                          className="block text-black hover:underline text-base"
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={i}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-black hover:underline text-base"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        )}
      </nav>
    </>
  );
}
