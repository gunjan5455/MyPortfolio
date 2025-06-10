import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const Navbar = ({ refs }) => {
  const [active, setActive] = useState("Profile");
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["Profile", "Projects", "Skills", "Contact Me"];
  const { theme } = useContext(ThemeContext);

  const handleScroll = (key) => {
    if (key === "Contact Me") key = "Contact";
    refs[key]?.current?.scrollIntoView({ behavior: "smooth" });
    setActive(key);
    setMenuOpen(false); // close mobile menu on click
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center px-5 py-4  md:justify-center">
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-xs md:text-base uppercase">
          {navItems.map((item, index) => (
            <div
              onClick={() => handleScroll(item)}
              key={index}
              className="cursor-pointer relative group"
            >
              {item}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 w-full ${
                  theme === "light" ? "bg-black" : "bg-white"
                } scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              />
            </div>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="flex flex-col items-start px-5 py-3 gap-4 md:hidden">
          {navItems.map((item, index) => (
            <div
              onClick={() => handleScroll(item)}
              key={index}
              className="uppercase text-sm cursor-pointer relative group"
            >
              {item}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 w-full ${
                  theme === "light" ? "bg-black" : "bg-white"
                } scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
