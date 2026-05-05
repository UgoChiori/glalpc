import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-600 border-b border-white/10 sticky top-0 w-full z-10">
      <div className="flex justify-between items-center px-6 md:px-8 h-20">
        <Link to="/">
          {/* Logo */}
          <img
            src="/images/glalpclogo.png"
            alt="glalogo"
            className="h-full max-h-40 w-auto object-contain"
          />
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-3 font-sans text-sm tracking-widest uppercase">
          <Link
            to="/"
            className="text-white/90 hover:text-white transition-colors duration-300"
          >
            Home
          </Link>

          <div className="flex items-center gap-3">
            <Link to="/about" className="text-white/90 hover:text-white transition-colors duration-300">
              About
            </Link>
            <Link to="/team" className="text-white/90 hover:text-white transition-colors duration-300">
              team
            </Link>
            <Link to="/updates" className="text-white/90 hover:text-white transition-colors duration-300">
              Updates
            </Link>
            <Link to="/contact" className="text-white/90 hover:text-white transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-600 py-4 px-6 absolute top-full left-0 w-full">
          <div className="flex flex-col items-center gap-3 uppercase text-sm animated fadeIn">
            <Link to="/" className="text-white hover:text-gray-300 font-sans">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300 font-sans">
              About
            </Link>
            <Link to="/team" className="text-white hover:text-gray-300 font-sans">
              team
            </Link>
            <Link to="/updates" className="text-white hover:text-gray-300 font-sans">
              Updates
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-300 font-sans">
              Contact
            </Link>
          </div>
        </div>
      )}
      <button
        className="md:hidden absolute top-4 right-4 text-white focus:outline-none cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
};

export default Navigation;
