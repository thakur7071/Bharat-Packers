import { useState, useEffect, useRef } from "react";
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const closeOnClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) setDropdownOpen(false);
      if (!menuRef.current?.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", closeOnClickOutside);
    return () => document.removeEventListener("mousedown", closeOnClickOutside);
  }, []);

  return (
    <>
      {/* Topbar */}
      <div className="bg-[#0047AB] p-1 text-white text-xs md:text-sm">
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
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-14 max-w-[180px]" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-sm md:text-base lg:text-lg font-medium">
            {navLinks.map((link, i) =>
              link.subLinks ? (
                <div key={i} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    {link.label}
                    {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {dropdownOpen && (
                    <div className="absolute bg-white border shadow-md mt-2 w-64 rounded z-50 py-2">
                      {link.subLinks.map((s, j) => (
                        <Link
                          key={j}
                          to={s.href}
                          className="block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={i} to={link.href} className="cursor-pointer">
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div ref={menuRef} className="fixed inset-0 bg-white z-40 p-6 space-y-6 overflow-y-auto">
            <div className="flex justify-between border-b pb-4">
              <span className="font-bold text-lg">Menu</span>
              <button onClick={() => setMenuOpen(false)} className="text-2xl">
                <FaTimes />
              </button>
            </div>

            {navLinks.map((link, i) =>
              link.subLinks ? (
                <DropdownMenu
                  key={i}
                  label={link.label}
                  links={link.subLinks}
                  onClose={() => setMenuOpen(false)}
                />
              ) : (
                <Link
                  key={i}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-base cursor-pointer"
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

function DropdownMenu({ label, links, onClose }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex justify-between w-full font-semibold text-base cursor-pointer"
      >
        {label}
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {open && (
        <div className="pl-4 mt-2 space-y-2">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.href}
              onClick={onClose}
              className="block text-base cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
