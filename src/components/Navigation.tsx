// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// const Navigation: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
    

 


//   return (



//       <nav className="bg-gray-400 border-b border-white/10 fixed top-0 w-full z-10 opacity-70" >
//       <div className="flex justify-between items-center px-6 md:px-8 h-20">
//         <Link to="/">
//           {/* Logo */}
//           <img
//             src="/images/glalpclogo.png"
//             alt="glalogo"
//             className="h-full max-h-40 w-auto object-contain"
//           />
//         </Link>
//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-3 font-sans text-sm tracking-widest uppercase">
//           <Link
//             to="/"
//             // className="transition-colors duration-300"
//             className="text-white/90 hover:text-white transition-colors duration-300"
//           >
//             Home
//           </Link>

//           <div className="flex items-center gap-3">
//             <Link to="/about" className="text-white/90 hover:text-white transition-colors duration-300">
//               About
//             </Link>
//             <Link to="/team" className="text-white/90 hover:text-white transition-colors duration-300">
//               team
//             </Link>
//             <Link to="/updates" className="text-white/90 hover:text-white transition-colors duration-300">
//               Updates
//             </Link>
//             <Link to="/contact" className="text-white/90 hover:text-white transition-colors duration-300">
//               Contact
//             </Link>
//           </div>
//         </div>
//       </div>
//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-gray-400 py-4 px-6 absolute top-full left-0 w-full ">
//           <div className="flex flex-col items-center gap-3 uppercase text-sm animated fadeIn">
//             <Link to="/" className="text-white hover:text-gray-300 font-sans">
//               Home
//             </Link>
//             <Link to="/about" className="text-white hover:text-gray-300 font-sans">
//               About
//             </Link>
//             <Link to="/team" className="text-white hover:text-gray-300 font-sans">
//               team
//             </Link>
//             <Link to="/updates" className="text-white hover:text-gray-300 font-sans">
//               Updates
//             </Link>
//             <Link to="/contact" className="text-white hover:text-gray-300 font-sans">
//               Contact
//             </Link>
//           </div>
//         </div>
//       )}
//       <button
//         className="md:hidden absolute top-4 right-4 text-white focus:outline-none cursor-pointer"
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//       >
//         {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>
//     </nav>
//   );
// };

// export default Navigation;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// const Navigation: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
    
//     <nav className="bg-gray-400/80 backdrop-blur-md border-b border-white/10 fixed top-0 w-full z-50">
//       <div className="flex justify-between items-center px-6 md:px-8 h-20">
//         <Link to="/">
//           <img
//             src="/images/glalpclogo.png"
//             alt="glalogo"
//             className="h-full max-h-40 w-auto object-contain"
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-3 font-sans text-sm tracking-widest uppercase">
//           <Link to="/" className="text-white/90 hover:text-white transition-colors duration-300">Home</Link>
//           <Link to="/about" className="text-white/90 hover:text-white transition-colors duration-300">About</Link>
//           <Link to="/team" className="text-white/90 hover:text-white transition-colors duration-300">Team</Link>
//           <Link to="/updates" className="text-white/90 hover:text-white transition-colors duration-300">Updates</Link>
//           <Link to="/contact" className="text-white/90 hover:text-white transition-colors duration-300">Contact</Link>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         /* Added bg-gray-500 (solid) and shadow to make it pop */
//         <div className="md:hidden bg-gray-400 py-6 px-6 absolute top-full left-0 w-full shadow-xl">
//           <div className="flex flex-col items-center gap-6 uppercase text-sm">
//             <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-gray-300 font-sans">Home</Link>
//             <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-gray-300 font-sans">About</Link>
//             <Link to="/team" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-gray-300 font-sans">Team</Link>
//             <Link to="/updates" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-gray-300 font-sans">Updates</Link>
//             <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-gray-300 font-sans">Contact</Link>
//           </div>
//         </div>
//       )}

//       {/* Mobile Toggle Button */}
//       <button
//         className="md:hidden absolute top-7 right-6 text-white focus:outline-none cursor-pointer"
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//       >
//         {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//       </button>
//     </nav>
//   );
// };

// export default Navigation;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// const Navigation: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const closeMenu = () => setIsMenuOpen(false);

//   return (
//     <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-gray-400/80 backdrop-blur-md">
//       <div className="flex h-20 items-center justify-between px-4 sm:px-6 md:px-8">
        
//         {/* LOGO - Aligned to the left */}
//         <Link to="/" onClick={closeMenu} className="flex-shrink-0">
//           <img
//             src="/images/glalpclogo.png"
//             alt="glalogo"
//             className="h-10 w-auto object-contain md:h-16 transition-all duration-300"
//           />
//         </Link>

//         {/* DESKTOP NAV (Hidden on mobile) */}
//         <div className="hidden items-center gap-6 font-sans text-xs tracking-widest uppercase md:flex lg:gap-8">
//           <Link to="/" className="text-white/90 transition-colors duration-300 hover:text-white">Home</Link>
//           <Link to="/about" className="text-white/90 transition-colors duration-300 hover:text-white">About</Link>
//           <Link to="/team" className="text-white/90 transition-colors duration-300 hover:text-white">Team</Link>
//           <Link to="/updates" className="text-white/90 transition-colors duration-300 hover:text-white">Updates</Link>
//           <Link to="/contact" className="text-white/90 transition-colors duration-300 hover:text-white">Contact</Link>
//         </div>

//         {/* MOBILE TOGGLE - Aligned to the right */}
//         <button
//           className="relative z-50 flex items-center justify-center text-white focus:outline-none md:hidden"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle Menu"
//         >
//           {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* MOBILE MENU DROPDOWN */}
//       <div
//         className={`${
//           isMenuOpen ? "flex" : "hidden"
//         } absolute top-full left-0 w-full flex-col items-start gap-6 bg-gray-500 py-10 px-8 shadow-2xl md:hidden`}
//       >
//         <Link to="/" onClick={closeMenu} className="font-sans text-sm tracking-[0.2em] text-white uppercase border-b border-white/5 w-full pb-3">
//           Home
//         </Link>
//         <Link to="/about" onClick={closeMenu} className="font-sans text-sm tracking-[0.2em] text-white uppercase border-b border-white/5 w-full pb-3">
//           About
//         </Link>
//         <Link to="/team" onClick={closeMenu} className="font-sans text-sm tracking-[0.2em] text-white uppercase border-b border-white/5 w-full pb-3">
//           Team
//         </Link>
//         <Link to="/updates" onClick={closeMenu} className="font-sans text-sm tracking-[0.2em] text-white uppercase border-b border-white/5 w-full pb-3">
//           Updates
//         </Link>
//         <Link to="/contact" onClick={closeMenu} className="font-sans text-sm tracking-[0.2em] text-white uppercase border-b border-white/5 w-full pb-3">
//           Contact
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-gray-400/80 backdrop-blur-md">
      <div className="flex h-24 items-center justify-between px-4 md:px-8">
        
        {/* LOGO - Now significantly larger on mobile */}
        <Link to="/" onClick={closeMenu} className="flex items-center">
          <img
            src="/images/glalpclogo.png"
            alt="glalogo"
            className="h-20 w-auto object-contain sm:h-20 md:h-34 transition-all duration-300"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-6 font-sans text-xs tracking-widest uppercase md:flex lg:gap-8">
          <Link to="/" className="text-white/90 transition-colors duration-300 hover:text-white">Home</Link>
          <Link to="/about" className="text-white/90 transition-colors duration-300 hover:text-white">About</Link>
          <Link to="/team" className="text-white/90 transition-colors duration-300 hover:text-white">Team</Link>
          <Link to="/updates" className="text-white/90 transition-colors duration-300 hover:text-white">Updates</Link>
          <Link to="/contact" className="text-white/90 transition-colors duration-300 hover:text-white">Contact</Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="relative z-50 flex items-center justify-center text-white focus:outline-none md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute top-full left-0 w-full flex-col items-start gap-6 bg-gray-500 py-10 px-8 shadow-2xl md:hidden`}
      >
        {["Home", "About", "Team", "Updates", "Contact"].map((item) => (
          <Link 
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
            onClick={closeMenu} 
            className="font-sans text-sm tracking-[0.2em] text-white uppercase border-b border-white/5 w-full pb-3"
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;