// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const items = [
//   {
//     img: "/images/herosec1.jpeg",
//     text: "Agbomoagan Hosts Ekiti Lawyers at the 2024 annual general conference",
//     date: "August 28, 2024",
//   },
//   {
//     img: "/images/herosec2.jpg",
//     text: "G L Agbomoagan Attorneys felicitate with the Founder",
//     date: "August 9, 2024",
//   },
//   {
//     img: "/images/herosecthree.jpeg",
//     text: "Building a future where African youth thrive globally with confidence and skill.",
//     date: "August 28, 2024",
//   },
//   {
//     img: "/images/herosecfour.jpg",
//     text: "Empowering the next generation of leaders in Africa through education, mentorship, and community.",
//     date: "August 28, 2024",
//   },
// ];

// const HeroSection: React.FC = () => {
//   const [index, setIndex] = useState(0);
//   const [visibleItems, setVisibleItems] = useState(1);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) setVisibleItems(2);
//       else setVisibleItems(1);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const nextSlide = () => {
//     if (index < items.length - Math.floor(visibleItems)) {
//       setIndex(index + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (index > 0) {
//       setIndex(index - 1);
//     }
//   };

//   return (
//     <div className="bg-gray-100 py-10 md:py-20 px-4 overflow-hidden">
//       <div className="relative max-w-6xl mx-auto">
//         {/* Main Viewport */}
//         <div className="overflow-hidden w-full rounded-lg">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${index * (100 / visibleItems)}%)`,
//             }}
//           >
//             {items.map((item, i) => (
//               <div
//                 key={i}
//                 className="flex-shrink-0 px-2"
//                 style={{ width: `${100 / visibleItems}%` }}
//               >
//                 <img
//                   src={item.img}
//                   alt="Slide"
//                   className="w-full h-64 md:h-80 object-cover rounded-lg shadow-sm"
//                 />
//                 <div className="mt-4 pb-4">
//                   <p className="text-gray-700 text-sm md:text-base font-semibold capitalize">
//                     {item.text}
//                   </p>
//                   <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-tighter">
//                     {item.date}
//                   </p>
//                   <Link
//                     to="/news/legal-tips"
//                     className="flex items-center gap-2 text-gray-800 font-medium hover:gap-3 transition-all duration-300 w-fit"
//                   >
//                     Read more
//                     {/* <ArrowRight size={18} /> */}
//                     <ArrowUpRight size={18} className="animate-bounce" />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Buttons - Repositioned inside the padding for mobile safety */}
//         <button
//           onClick={prevSlide}
//           title="Previous slide"
//           aria-label="Previous slide"
//           className={`absolute left-2 top-1/3 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 transition-opacity cursor-pointer ${
//             index === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
//           }`}
//         >
//           <ChevronLeft size={20} />
//         </button>

//         <button
//           onClick={nextSlide}
//           title="Next slide"
//           aria-label="Next slide"
//           className={`absolute right-2 top-1/3 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 transition-opacity cursor-pointer ${
//             index >= items.length - Math.floor(visibleItems)
//               ? "opacity-0 pointer-events-none"
//               : "opacity-100"
//           }`}
//         >
//           <ChevronRight size={20} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// import React from "react";

// const HeroSection: React.FC = () => {
//   const backgroundImageUrl = "/images/about.jpg";
//   return (
//     <div className="bg-gray-100 py-10 md:py-20 px-4 md:px-6 overflow-hidden">
//       <section
//         className="relative w-full h-[70vh] md:h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 "
//         style={{
//           backgroundImage: `url(${backgroundImageUrl})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-black opacity-75 pointer-events-none"></div>
//         <div className="relative z-10 max-w-5xl">
//           <h1 className="text-4xl md:text-3xl font-bold text-gray-300 mb-4 my_header">
//             To provide world-class legal advisory and strategic guidance,
//             enabling clients to succeed across jurisdictions with clarity,
//             confidence, and trust.
//           </h1>
//           <p className="mt-4 text-md md:text-md text-gray-300">
//             To be a globally respected law firm at the forefront of cross-border
//             legal excellence and innovation.
//           </p>
//           <a
//             href="/contact"
//             className="mt-6 inline-block bg-gray-300 text-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300"
//           >
//             CONTACT US
//           </a>
//           <a
//             href="/about"
//             className="mt-6 inline-block text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 hover:text-black transition-all duration-300"
//           >
//             LEARN MORE
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HeroSection;

import React from "react";

const HeroSection: React.FC = () => {
  const backgroundImageUrl = "/images/about.jpg";

  return (
    <section
      className="relative w-full h-[70vh] md:h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 "
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl text-center mt-10 px-4 md:px-0">
        {/* HEADLINE */}
        <h1 className=" text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
          Strategic Legal Advisory for a Global Landscape
        </h1>

        {/* SUBTEXT */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          We provide world-class legal guidance, enabling clients to navigate
          complex cross-border transactions with clarity, confidence, and trust.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* PRIMARY BUTTON */}
          <a
            href="/contact"
            className="w-fit sm:w-auto px-8 py-3 border border-white text-white text-sm tracking-wider uppercase font-medium hover:bg-white hover:text-black transition-all duration-300"
          >
            Contact Us
          </a>

          {/* SECONDARY BUTTON */}
          <a
            href="/about"
            className="w-fit sm:w-auto px-8 py-3 border border-gray-400 text-gray-300 text-sm tracking-wider uppercase font-medium hover:border-white hover:text-white transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
