import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  {
    img: "/images/herosec1.jpeg",
    text: "Agbomoagan Hosts Ekiti Lawyers at the 2024 annual general conference",
    date: "August 28, 2024",
  },
  {
    img: "/images/herosec2.jpg",
    text: "G L Agbomoagan Attorneys felicitate with the Founder",
    date: "August 9, 2024",
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

const Editorials: React.FC = () => {
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
                  <p className="text-gray-700 text-sm md:text-base font-semibold capitalize">
                    {item.text}
                  </p>
                  <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-tighter">
                    {item.date}
                  </p>
                  <Link
                    to="/news/legal-tips"
                    className="flex items-center gap-2 text-gray-800 font-medium hover:gap-3 transition-all duration-300 w-fit"
                  >
                    Read more
                    {/* <ArrowRight size={18} /> */}
                    <ArrowUpRight size={18} className="animate-bounce" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

       
        <button
          onClick={prevSlide}
          title="Previous slide"
          aria-label="Previous slide"
          className={`absolute left-2 top-1/3 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 transition-opacity cursor-pointer ${
            index === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          title="Next slide"
          aria-label="Next slide"
          className={`absolute right-2 top-1/3 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 transition-opacity cursor-pointer ${
            index >= items.length - Math.floor(visibleItems)
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
          }`}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Editorials;
