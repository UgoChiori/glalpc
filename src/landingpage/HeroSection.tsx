
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
