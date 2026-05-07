

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// const Navigation: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const closeMenu = () => setIsMenuOpen(false);

//   return (
//     <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-gray-900/90 backdrop-blur-md">
//       <div className="flex h-24 items-center justify-between px-4 md:px-8">
        
//         {/* LOGO - Now significantly larger on mobile */}
//         <Link to="/" onClick={closeMenu} className="flex items-center">
//           <img
//             src="/images/glalpclogo.png"
//             alt="glalogo"
//             className="h-20 w-auto object-contain sm:h-20 md:h-34 transition-all duration-300"
//           />
//         </Link>

//         {/* DESKTOP NAV */}
//         <div className="hidden items-center gap-6 font-sans text-xs tracking-widest uppercase md:flex lg:gap-8">
//           <Link to="/" className="text-white/90 transition-colors duration-300 hover:text-white">Home</Link>
//           <Link to="/about" className="text-white/90 transition-colors duration-300 hover:text-white">About</Link>
//           <Link to="/team" className="text-white/90 transition-colors duration-300 hover:text-white">Team</Link>
//           <Link to="/updates" className="text-white/90 transition-colors duration-300 hover:text-white">Updates</Link>
//           <Link to="/contact" className="text-white/90 transition-colors duration-300 hover:text-white">Contact</Link>
//         </div>

//         {/* MOBILE TOGGLE */}
//         <button
//           className="relative z-50 flex items-center justify-center text-white focus:outline-none md:hidden"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
//         </button>
//       </div>

//       {/* MOBILE MENU DROPDOWN */}
//       <div
//         className={`${
//           isMenuOpen ? "flex" : "hidden"
//         } absolute top-full left-0 w-full flex-col items-start gap-6 bg-gray-800 py-10 px-8 shadow-2xl md:hidden`}
//       >
//         {["Home", "About", "Team", "Updates", "Contact"].map((item) => (
//           <Link 
//             key={item}
//             to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
//             onClick={closeMenu} 
//             className="font-sans text-sm tracking-[0.2em] text-white uppercase border-b border-white/5 w-full pb-3"
//           >
//             {item}
//           </Link>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // ALWAYS show navbar at top
      if (currentScrollY <= 10) {
        setShowNav(true);
      } 
      // Hide when scrolling down
      else if (currentScrollY > lastScrollY) {
        setShowNav(false);
      } 
      // Show when scrolling up
      else {
        setShowNav(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b border-white/10 
      bg-gray-900/90 backdrop-blur-md transition-all duration-500
      ${
        showNav
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="flex h-24 items-center justify-between px-4 md:px-8">

        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center"
        >
          <img
            src="/images/glalpclogo.png"
            alt="glalogo"
            className="h-20 w-auto object-contain sm:h-20 md:h-34 transition-all duration-300"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-6 font-sans text-xs tracking-widest uppercase md:flex lg:gap-8">
          
          <Link
            to="/"
            className="text-white/90 transition-colors duration-300 hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-white/90 transition-colors duration-300 hover:text-white"
          >
            About
          </Link>

          <Link
            to="/team"
            className="text-white/90 transition-colors duration-300 hover:text-white"
          >
            Team
          </Link>

          <Link
            to="/updates"
            className="text-white/90 transition-colors duration-300 hover:text-white"
          >
            Updates
          </Link>

          <Link
            to="/contact"
            className="text-white/90 transition-colors duration-300 hover:text-white"
          >
            Contact
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="relative z-50 flex items-center justify-center text-white focus:outline-none md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute top-full left-0 w-full flex-col items-start gap-6 bg-gray-800 py-10 px-8 shadow-2xl md:hidden`}
      >
        {["Home", "About", "Team", "Updates", "Contact"].map(
          (item) => (
            <Link
              key={item}
              to={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase()}`
              }
              onClick={closeMenu}
              className="font-sans text-sm tracking-[0.2em] text-white uppercase border-b border-white/5 w-full pb-3"
            >
              {item}
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default Navigation;