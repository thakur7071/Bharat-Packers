import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../Assets";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/aboutus", label: "About Us" },
  { href: "/our-services", label: "Our Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Topbar */}
      <div className="bg-[#ff3131] p-1 text-white text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex justify-between px-4">
          <span>Support: +91-9876543210</span>
          <div className="flex gap-3 text-base md:text-lg">
            {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, i) => (
              <Icon key={i} className="cursor-pointer hover:text-gray-300" />
            ))}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-sm p-2 sticky top-0 z-50">
        <div className="max-w-7xl h-18 mx-auto flex justify-between items-center px-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-28" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-sm md:text-base lg:text-lg font-medium">
            {navLinks.map((link, i) => (
              <Link key={i} to={link.href} className="cursor-pointer">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-white z-40 p-6 space-y-6 overflow-y-auto">
            <div className="flex justify-between border-b pb-4">
              <span className="font-bold text-lg">Menu</span>
              <button onClick={() => setMenuOpen(false)} className="text-2xl">
                <FaTimes />
              </button>
            </div>

            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-base cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
