import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const MoreNews: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">

      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
        More News
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* CARD 1 */}
        <div className="bg-gray-100 rounded-lg shadow-sm overflow-hidden">

          <img
            src="/images/herosec5.jpg"
            alt="Legal tips"
            className="w-full h-56 md:h-64 object-cover rounded-md"
          />

          <div className="p-5">

            <h3 className=" text-lg font-semibold text-gray-800 mb-2 tracking-wide">
              LEGAL TIPS FOR ENTREPRENEURS
            </h3>

            <p className="font-sans text-sm text-gray-600 mb-4 leading-relaxed">
              Vital tips to consider when starting a business in Nigeria.
              Understanding legal structure, registration, and compliance can
              protect your business from future risks.
            </p>

            <p className="text-xs text-gray-500 mb-4">
              Jane Nwabuoku Esq.
            </p>

            {/* READ MORE */}
            <Link
              to="/news/legal-tips"
              className="flex items-center gap-2 text-gray-800 font-medium hover:gap-3 transition-all duration-300 w-fit"
            >
              Read more
              <ArrowUpRight size={18} className="animate-bounce"/>
            </Link>

          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-gray-100 rounded-lg shadow-sm overflow-hidden">

          <img
            src="/images/herosec6.jpg"
            alt="Corporate training"
            className="w-full h-56 md:h-64 object-cover"
          />

          <div className="p-5">

            <h3 className="font-sans text-lg font-semibold text-gray-800 mb-2 uppercase tracking-wide">
              Corporate Training and Employment Bond: Safeguarding The Investment
            </h3>

            <p className="font-sans text-sm text-gray-600 mb-4 leading-relaxed">
              By Oluwasegun Afolabi Ezra
            </p>

            {/* READ MORE */}
            <Link
              to="/news/corporate-training"
              className="flex items-center gap-2 text-gray-800 font-medium hover:gap-3 transition-all duration-300 w-fit"
            >
              Read more
              <ArrowUpRight size={18} className="animate-bounce" />
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
};

export default MoreNews;