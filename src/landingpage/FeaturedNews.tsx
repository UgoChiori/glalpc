import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FeaturedNews: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="px-4 md:px-8 py-16 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-10">
        {t("featuredNews.heading")}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
    
<div className="overflow-hidden rounded-xl bg-gray-100 shadow-sm lg:col-span-2">
  <img
    src="/images/herosecthree.jpeg"
    alt="Featured article"
    className="block h-auto w-full"
  />

  <div className="p-6 md:p-8">
    <p className="mb-3 text-xs uppercase tracking-widest text-gray-500">
      {t("featuredNews.featuredLabel")}
    </p>

    <h3 className="mb-4 text-2xl font-semibold leading-snug text-gray-800 md:text-3xl">
      {t("featuredNews.featuredTitle")}
    </h3>

    <p className="mb-6 text-sm leading-relaxed text-gray-600 md:text-base">
      {t("featuredNews.featuredDesc")}
      <br />
      <strong>Omolade Olalemi Esq.</strong>
    </p>

    <Link
      to="/news/cyber-security-law"
      className="flex w-fit items-center gap-2 font-medium text-gray-900 transition-all duration-300 hover:gap-3"
    >
      {t("featuredNews.readFull")}
      <ArrowRight size={18} />
    </Link>
  </div>
</div>

 
      
   
        <div className="flex flex-col gap-6">
          <div className="border-b border-gray-200 pb-4">
            <p className="text-xs text-gray-500 mb-1">Legal Update</p>

            <h4 className="text-lg font-medium text-gray-800 mb-2 leading-snug">
              {t("featuredNews.item1Title")}
            </h4>

            <Link
              to="/news/legal-tips"
              className="flex items-center gap-2 text-sm text-gray-700 hover:gap-3 transition-all duration-300 w-fit"
            >
              {t("featuredNews.readMore")}
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <p className="text-xs text-gray-500 mb-1">Corporate Law</p>

            <h4 className="text-lg font-medium text-gray-800 mb-2 leading-snug">
              {t("featuredNews.item2Title")}
            </h4>

            <Link
              to="/news/employment-contracts"
              className="flex items-center gap-2 text-sm text-gray-700 hover:gap-3 transition-all duration-300 w-fit"
            >
              {t("featuredNews.readMore")}
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <p className="text-xs text-gray-500 mb-1">Business Law</p>

            <h4 className="text-lg font-medium text-gray-800 mb-2 leading-snug">
              {t("featuredNews.item3Title")}
            </h4>

            <Link
              to="/news/compliance-requirements"
              className="flex items-center gap-2 text-sm text-gray-700 hover:gap-3 transition-all duration-300 w-fit"
            >
              {t("featuredNews.readMore")}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
