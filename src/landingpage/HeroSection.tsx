
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
     
      <div className="absolute inset-0 bg-black/75"></div>

  
      <div className="relative z-10 max-w-4xl text-center mt-10 px-4 md:px-0">
   
        <h1 className=" text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
          Strategic Legal Advisory for a Global Landscape
        </h1>

     
        <p className="font-sans text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          We provide world-class legal guidance, enabling clients to navigate
          complex cross-border transactions with clarity, confidence, and trust.
        </p>

     
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
  
          <a
            href="/contact"
            className="w-fit sm:w-auto px-8 py-3 border border-white text-white text-sm tracking-wider uppercase font-medium hover:bg-white hover:text-black transition-all duration-300"
          >
            Contact Us
          </a>

        
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




// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const Hero: React.FC = () => {
//   const heroRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".hero-image", {
//         x: -100,
//         opacity: 0,
//         duration: 1.2,
//         ease: "power3.out",
//       });

//       gsap.to(".blend-overlay", {
//         scaleX: 1,
//         duration: 1.5,
//         ease: "power3.out",
//         delay: 0.5,
//       });

//       gsap.from(".hero-text > *", {
//         y: 40,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.2,
//         delay: 0.6,
//         ease: "power3.out",
//       });
//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={heroRef} className="w-full py-8 sm:py-10 lg:py-14">
//       <div className="mx-auto w-full max-w-7xl  px-4 sm:px-6 lg:px-8">
//         {/* Top Bar */}
//         <div className="mb-5 sm:mb-6 flex items-center justify-between">
//           <h1 className="text-xs sm:text-sm tracking-widest font-semibold uppercase leading-relaxed">
//             G L A{" "}
//             <span className="text-yellow-600 whitespace-nowrap">
//               Legal Practitioners
//             </span>
//           </h1>
//         </div>

//         {/* Hero Content */}
//         <div className="grid grid-cols-1 overflow-hidden bg-gray-900 md:grid-cols-2">
//           {/* Left Image */}
//           <div className="hero-image relative h-[280px] sm:h-[360px] md:h-auto min-h-[360px] overflow-hidden">
//             <img
//               src="/images/about.png"
//               alt="Lawyer"
//               className="h-full w-full object-cover scale-105"
//             />

//             <div className="absolute inset-0 bg-black/20" />

//             <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-black" />

//             <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
//           </div>

//           {/* Right Content */}
//           <div
//             className="
//               hero-text flex flex-col justify-center text-white
//               px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-16
//               bg-gradient-to-br md:bg-gradient-to-r
//               from-black via-[#1a1a1a] to-yellow-600
//             "
//           >
//             <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs tracking-widest opacity-80 break-words">
//               WWW.GLALPC.COM
//             </p>

//             <div className="overflow-hidden">
//               <h2 className="mb-4 max-w-xl text-2xl sm:text-3xl lg:text-4xl xl:text-3xl font-bold uppercase leading-tight">
//                 Strategic Legal Advisory for a Global Landscape
//               </h2>
//             </div>

//             <p className="mb-7 sm:mb-8 max-w-md text-sm sm:text-base  leading-relaxed opacity-80">
//               We provide world-class legal guidance, enabling clients to navigate
//               complex cross-border transactions with clarity, confidence, and
//               trust.
//             </p>

//             <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
//               <button className="btn-outline w-full sm:w-auto uppercase cursor-pointer">
//                 About Us
//               </button>

//               <button className="btn-filled w-full sm:w-auto uppercase cursor-pointer">
//                 Contact Us
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
