import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedNews: React.FC = () => {
  return (
    <section className="px-4 md:px-8 py-16">

      {/* SECTION TITLE */}
      <h2 className=" text-3xl md:text-4xl font-semibold text-gray-800 mb-10">
        Insights & Legal Updates
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* ================= FEATURED ARTICLE (LEFT - 2 COLUMNS) ================= */}
        <div className="lg:col-span-2 bg-gray-100 rounded-xl overflow-hidden shadow-sm">

          <img
            src="/images/featured.jpg"
            alt="Featured article"
            className="w-full h-80 md:h-[420px] object-cover"
          />

          <div className="p-6 md:p-8">

            <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
              Featured Article
            </p>

            <h3 className=" text-2xl md:text-3xl font-semibold text-gray-800 mb-4 leading-snug">
              Corporate Training and Employment Bond: Safeguarding The Investment
            </h3>

            <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed mb-6">
              In today’s competitive corporate environment, organizations invest heavily in employee training.
              This article explores how employment bonds can protect that investment while maintaining fairness
              and legal compliance in Nigeria.
            </p>

            <Link
              to="/news/featured-corporate-training"
              className="flex items-center gap-2 font-medium text-gray-900 hover:gap-3 transition-all duration-300 w-fit"
            >
              Read full article
              <ArrowRight size={18} />
            </Link>

          </div>
        </div>

        {/* ================= SIDE NEWS LIST (RIGHT) ================= */}
        <div className="flex flex-col gap-6">

          {/* ITEM 1 */}
          <div className="border-b border-gray-200 pb-4">

            <p className="text-xs text-gray-500 mb-1">Legal Update</p>

            <h4 className="text-lg font-medium text-gray-800 mb-2 leading-snug">
              Legal Tips for Entrepreneurs in Nigeria
            </h4>

            <Link
              to="/news/legal-tips"
              className="flex items-center gap-2 text-sm text-gray-700 hover:gap-3 transition-all duration-300 w-fit"
            >
              Read more
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* ITEM 2 */}
          <div className="border-b border-gray-200 pb-4">

            <p className="text-xs text-gray-500 mb-1">Corporate Law</p>

            <h4 className=" text-lg font-medium text-gray-800 mb-2 leading-snug">
              Understanding Employment Contracts in Modern Workplaces
            </h4>

            <Link
              to="/news/employment-contracts"
              className="flex items-center gap-2 text-sm text-gray-700 hover:gap-3 transition-all duration-300 w-fit"
            >
              Read more
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* ITEM 3 */}
          <div className="border-b border-gray-200 pb-4">

            <p className="text-xs text-gray-500 mb-1">Business Law</p>

            <h4 className=" text-lg font-medium text-gray-800 mb-2 leading-snug">
              Key Compliance Requirements for New Businesses
            </h4>

            <Link
              to="/news/compliance-requirements"
              className="flex items-center gap-2 text-sm text-gray-700 hover:gap-3 transition-all duration-300 w-fit"
            >
              Read more
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedNews;