

// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const items = [
//   {
//     img: "/images/herosec1.jpeg",
//     // title: "",
//     text: "AGBOMOAGAN HOSTS EKITI LAWYERS AT THE 2024 ANNUAL GENERAL CONFERENCE",
//     date: "August 28, 2024",
//   },
//   {
//     img: "/images/herosec2.jpg",
//     // title: "Our Mission",
//     text: "G L AGBOMOAGAN ATTORNEYS felicitate with the Founder",
//     date: " August 9, 2024",
//   },
//   {
//     img: "/images/herosecthree.jpeg",

//     text: "Emerging trends in Cybersecurity Law and Data Privacy and its impact on individuals and organizations. Omolade Olalemi Esq.",
//     date: "August 21, 2024",
//   },
//   {
//     img: "/images/herosecfour.jpg",
//     // title: "Our Vision",
//     text: "UNDERSTANDING COPYRIGHT FOR ARTISTIC WORKS IN NIGERIA",
//     date: "October 6, 2025",
//   },
// ];

// // const items = [
// //   {
// //     img: "/images/herosec1.jpeg",
// //     title: "Welcome to GLALPC",
// //     text: "Empowering the next generation of leaders in Africa through education, mentorship, and community.",
// //   },
// //   {
// //     img: "/images/herosec2.jpg",
// //     title: "Our Mission",
// //     text: "To provide young Africans with the skills, knowledge, and opportunities they need to succeed in the global economy.",
// //   },
// //   {
// //     img: "/images/herosecthree.jpeg",
// //     title: "Our Vision",
// //     text: "Building a future where African youth thrive globally with confidence and skill.",
// //   },
// //   {
// //     img: "/images/herosecfour.jpg",
// //     title: "Our Vision",
// //     text: "Building a future where African youth thrive globally with confidence and skill.",
// //   }
// // ];

// const HeroSection: React.FC = () => {
//   const [index, setIndex] = useState(0);

//   const nextSlide = () => {
//     if (index < items.length - 1) {
//       setIndex(index + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (index > 0) {
//       setIndex(index - 1);
//     }
//   };

//   return (
//     <div className="bg-gray-100 py-16 md:py-20 px-4 md:px-6">
//       <div className="relative max-w-6xl mx-auto">

//         {/* SLIDER */}
//         <div className="overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${index * 100}%)`,
//             }}
//           >
//             {items.map((item, i) => (
//               <div
//                 key={i}
//                 className="min-w-full md:min-w-1/2 px-3"
//               >
//                 {/* IMAGE */}
//                 {/* <div className="w-full h-64 md:h-72 bg-gray-50 rounded-lg shadow-md flex items-center justify-center overflow-hidden"> */}
//                   <img
//                     src={item.img}
//                     alt="hero images"
//                     className="w-full h-52 md:h-72 object-cover rounded-lg shadow-md"
//                   />
//                 {/* </div> */}

//                 {/* TEXT */}
//                 <div className="mt-4 text-center md:text-left">
//                   {/* <h3 className="font-serif text-xl md:text-2xl font-semibold text-gray-800 mb-2">
//                     {item.title}
//                   </h3> */}
//                   <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed">
//                     {item.text}
//                   </p>
//                     <p className="text-xs text-gray-500 mt-2">{item.date}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ARROWS */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft size={20} />
//         </button>

//         <button
//           onClick={nextSlide}
//           className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
//           aria-label="Next slide"
//         >
//           <ChevronRight size={20} />
//         </button>

//       </div>
//     </div>
//   );
// };

// export default HeroSection;
// // import React, { useState } from "react";
// // import { ChevronLeft, ChevronRight } from "lucide-react";

// // const items = [
// //   {
// //     img: "/images/herosec1.jpeg",
// //     // title: "Welcome to GLALPC",
// //     text: "Empowering the next generation of leaders in Africa through education, mentorship, and community.",
// //   },
// //   {
// //     img: "/images/herosec2.jpg",
// //     title: "Our Mission",
// //     text: "To provide young Africans with the skills, knowledge, and opportunities they need to succeed in the global economy.",
// //   },
// //   {
// //     img: "/images/herosecthree.jpeg",
// //     title: "Our Vision",
// //     text: "Building a future where African youth thrive globally with confidence and skill.",
// //   },
// // ];

// // const HeroSection: React.FC = () => {
// //   const [index, setIndex] = useState(0);
// //   const visibleItems = 2;

// //   const nextSlide = () => {
// //     if (index < items.length - visibleItems) {
// //       setIndex(index + 1);
// //     }
// //   };

// //   const prevSlide = () => {
// //     if (index > 0) {
// //       setIndex(index - 1);
// //     }
// //   };

// //   return (
// //     <div className="bg-gray-100 py-20 px-6">
// //       <div className="relative max-w-6xl mx-auto">
// //         {/* SLIDER */}
// //         <div className="overflow-hidden">
// //           <div
// //             className="flex gap-8 transition-transform duration-500"
// //             style={{
// //               transform: `translateX(-${index * (100 / visibleItems)}%)`,
// //             }}
// //           >
// //             {items.map((item, i) => (
// //               <div
// //                 key={i}
// //                 className="w-1/2 flex-shrink-0"
// //               >
// //                 {/* Image */}
// //                 <img
// //                   src={item.img}
// //                   alt={item.title}
// //                   className="w-full h-72 object-cover rounded-lg shadow-md"
// //                 />

// //                 {/* Text under image */}
// //                 <div className="mt-4">
// //                   <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-2">
// //                     {item.title}
// //                   </h3>
// //                   <p className="font-sans text-gray-600 text-sm leading-relaxed">
// //                     {item.text}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* LEFT ARROW */}
// //         <button
// //           onClick={prevSlide}
// //           className="absolute left-0 top-1/3 -translate-y-1/2 bg-white shadow p-2 rounded-full"
// //           title="Previous slide"
// //           aria-label="Previous slide"
// //         >
// //           <ChevronLeft size={20} />
// //         </button>

// //         {/* RIGHT ARROW */}
// //         <button
// //           onClick={nextSlide}
// //           className="absolute right-0 top-1/3 -translate-y-1/2 bg-white shadow p-2 rounded-full"
// //           title="Next slide"
// //           aria-label="Next slide"
// //         >
// //           <ChevronRight size={20} />
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HeroSection;

// // import React, { useState, useEffect } from "react";
// // import { ChevronLeft, ChevronRight } from "lucide-react";

// // const items = [
// //   {
// //     img: "/images/herosec1.jpeg",
// //     // title: "",
// //     text: "AGBOMOAGAN HOSTS EKITI LAWYERS AT THE 2024 ANNUAL GENERAL CONFERENCE",
// //     date: "August 28, 2024",
// //   },
// //   {
// //     img: "/images/herosec2.jpg",
// //     // title: "Our Mission",
// //     text: "G L AGBOMOAGAN ATTORNEYS felicitate with the Founder",
// //     date: " August 9, 2024",
// //   },
// //   {
// //     img: "/images/herosecthree.jpeg",

// //     text: "Emerging trends in Cybersecurity Law and Data Privacy and its impact on individuals and organizations. Omolade Olalemi Esq.",
// //     date: "August 21, 2024",
// //   },
// //   {
// //     img: "/images/herosecfour.jpg",
// //     // title: "Our Vision",
// //     text: "UNDERSTANDING COPYRIGHT FOR ARTISTIC WORKS IN NIGERIA",
// //     date: "October 6, 2025",
// //   },
// // ];

// // const HeroSection: React.FC = () => {
// //   const [index, setIndex] = useState(0);
// //   const [visibleItems, setVisibleItems] = useState(1);

// //   // Update visible items based on window width
// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.innerWidth >= 1024) {
// //         setVisibleItems(2);
// //       } else {
// //         setVisibleItems(1);
// //       }
// //     };

// //     handleResize(); // Initial check
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   const nextSlide = () => {
// //     if (index < items.length - visibleItems) {
// //       setIndex(index + 1);
// //     }
// //   };

// //   const prevSlide = () => {
// //     if (index > 0) {
// //       setIndex(index - 1);
// //     }
// //   };

// //   return (
// //     <div className="bg-gray-100 py-12 md:py-20 px-4 md:px-12">
// //       <div className="relative max-w-6xl mx-auto">
// //         <div className="overflow-hidden">
// //           <div
// //             className="flex transition-transform duration-500 ease-in-out"
// //             style={{
// //               transform: `translateX(-${index * (100 / visibleItems)}%)`,
// //             }}
// //           >
// //             {items.map((item, i) => (
// //               <div
// //                 key={i}
// //                 className="flex-shrink-0 px-2"
// //                 style={{ width: `${100 / visibleItems}%` }}
// //               >
// //                 <img
// //                   src={item.img}
// //                   alt="hero images"
// //                   className="w-full h-52 md:h-72 object-cover rounded-lg shadow-md"
// //                 />
// //                 <div className="mt-4">
// //                   <h3 className="font-serif text-xl md:text-2xl font-semibold text-gray-800 mb-2">
// //                     {/* {item.title} */}
// //                   </h3>
// //                   <p className="font-sans text-gray-600 text-sm font-semibold leading-relaxed">
// //                     {item.text}
// //                   </p>
// //                   <p className="text-xs text-gray-500 mt-2">{item.date}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Navigation Buttons - Hidden if items fit on screen */}
// //         {items.length > visibleItems && (
// //           <>
// //             <button
// //               onClick={prevSlide}
// //               disabled={index === 0}
// //               className={`absolute left-0 top-1/3 -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-white shadow-lg p-2 rounded-full transition-opacity ${
// //                 index === 0 ? "opacity-30 cursor-not-allowed" : "opacity-100"
// //               }`}
// //               aria-label="Previous slide"
// //             >
// //               <ChevronLeft size={24} />
// //             </button>

// //             <button
// //               onClick={nextSlide}
// //               disabled={index >= items.length - visibleItems}
// //               className={`absolute right-0 top-1/3 -translate-y-1/2 translate-x-2 md:translate-x-6 bg-white shadow-lg p-2 rounded-full transition-opacity ${
// //                 index >= items.length - visibleItems
// //                   ? "opacity-30 cursor-not-allowed"
// //                   : "opacity-100"
// //               }`}
// //               aria-label="Next slide"
// //             >
// //               <ChevronRight size={24} />
// //             </button>
// //           </>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default HeroSection;


// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const items = [
//   {
//     img: "/images/herosec1.jpeg",
//     // title: "Welcome to GLALPC",
//     text: "Empowering the next generation of leaders in Africa through education, mentorship, and community.",
//     date: "August 28, 2024",
//   },
//   {
//     img: "/images/herosec2.jpg",
//     // title: "Our Mission",
//     text: "To provide young Africans with the skills, knowledge, and opportunities they need to succeed in the global economy.",
//     date: "August 28, 2024",
//   },
//   {
//     img: "/images/herosecthree.jpeg",
//     // title: "Our Vision",
//     text: "Building a future where African youth thrive globally with confidence and skill.",
//     date: "August 28, 2024",
//   },
//   {
//     img: "/images/herosec4.jpg",
//     // title: "Welcome to GLALPC",
//     text: "Empowering the next generation of leaders in Africa through education, mentorship, and community.",
//     date: "August 28, 2024",
//   },
// ];

// const HeroSection: React.FC = () => {
//   const [index, setIndex] = useState(0);
//   const visibleItems = 2;

//   const nextSlide = () => {
//     if (index < items.length - visibleItems) {
//       setIndex(index + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (index > 0) {
//       setIndex(index - 1);
//     }
//   };

//   return (
//     <div className="bg-gray-100 py-20 px-6">
//       <div className="relative max-w-6xl mx-auto">
//         {/* SLIDER */}
//         <div className="overflow-hidden">
//           <div
//             className="flex gap-8 transition-transform duration-500"
//             style={{
//               transform: `translateX(-${index * (100 / visibleItems)}%)`,
//             }}
//           >
//             {items.map((item, i) => (
//               <div
//                 key={i}
//                 className="w-1/2 flex-shrink-0"
//               >
//                 {/* Image */}
//                 <img
//                   src={item.img}
//                   alt="hero images"
//                   className="w-full h-72 object-cover rounded-lg shadow-md"
//                 />

//                 {/* Text under image */}
//                 <div className="mt-4">
//                   <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-2">
//                     {/* {item.title} */}
//                   </h3>
//                   <p className="font-sans text-gray-600 text-sm leading-relaxed">
//                     {item.text}
//                   </p>
//                     <p className="text-xs text-gray-500 mt-2">{item.date}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* LEFT ARROW */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-0 top-1/3 -translate-y-1/2 bg-white shadow p-2 rounded-full"
//           title="Previous slide"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft size={20} />
//         </button>

//         {/* RIGHT ARROW */}
//         <button
//           onClick={nextSlide}
//           className="absolute right-0 top-1/3 -translate-y-1/2 bg-white shadow p-2 rounded-full"
//           title="Next slide"
//           aria-label="Next slide"
//         >
//           <ChevronRight size={20} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    img: "/images/herosec1.jpeg",
    text: "Empowering the next generation of leaders in Africa through education, mentorship, and community.",
    date: "August 28, 2024",
  },
  {
    img: "/images/herosec2.jpg",
    text: "To provide young Africans with the skills, knowledge, and opportunities they need to succeed in the global economy.",
    date: "August 28, 2024",
  },
  {
    img: "/images/herosecthree.jpeg",
    text: "Building a future where African youth thrive globally with confidence and skill.",
    date: "August 28, 2024",
  },
  {
    img: "/images/herosecfour.jpg",
    text: "Empowering the next generation of leaders in Africa through education, mentorship, and community.",
    date: "August 28, 2024",
  },
];

const HeroSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleItems(2);
      else setVisibleItems(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (index < items.length - Math.floor(visibleItems)) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="bg-gray-100 py-10 md:py-20 px-4 overflow-hidden"> 
      <div className="relative max-w-6xl mx-auto">
        
        {/* Main Viewport */}
        <div className="overflow-hidden w-full rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / visibleItems)}%)`,
            }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / visibleItems}%` }}
              >
                <img
                  src={item.img}
                  alt="Slide"
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-sm"
                />
                <div className="mt-4 pb-4">
                  <p className="text-gray-700 text-sm md:text-base leading-snug">
                    {item.text}
                  </p>
                  <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-tighter">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons - Repositioned inside the padding for mobile safety */}
        <button
          onClick={prevSlide}
          title="Previous slide"
          aria-label="Previous slide"
          className={`absolute left-2 top-1/3 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 transition-opacity ${index === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          title="Next slide"
          aria-label="Next slide"
          className={`absolute right-2 top-1/3 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 transition-opacity ${index >= items.length - Math.floor(visibleItems) ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;