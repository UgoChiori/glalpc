

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MoreNews: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800 md:text-3xl">
        {t("moreNews.heading")}
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

        <div className="overflow-hidden rounded-lg bg-gray-100 shadow-sm">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <img
              src="/images/janeesq.jpeg"
              alt="Legal tips"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="p-5">
            <h3 className="mb-2 text-lg font-semibold tracking-wide text-gray-800">
              {t("moreNews.card1Title")}
            </h3>

            <p className="mb-4 text-sm leading-relaxed text-gray-600">
              {t("moreNews.card1Desc")}
            </p>

            <p className="mb-4 text-xs text-gray-500">
              {t("moreNews.card1Author")}
            </p>

            <Link
              to="/news/legal-entrepreneur"
              className="flex w-fit items-center gap-2 font-medium text-gray-800 transition-all duration-300 hover:gap-3"
            >
              {t("moreNews.readMore")}
              <ArrowUpRight size={18} className="animate-bounce" />
            </Link>
          </div>
        </div>

     
        <div className="overflow-hidden rounded-lg bg-gray-100 shadow-sm">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <img
              src="/images/team13.jpg"
              alt="Corporate training"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="p-5">
            <h3 className="mb-2 text-lg font-semibold uppercase tracking-wide text-gray-800">
              {t("moreNews.card2Title")}
            </h3>

            <p className="mb-4 text-sm leading-relaxed text-gray-600">
              {t("moreNews.card2Desc")}
            </p>

            <Link
              to="/news/corporate-training"
              className="flex w-fit items-center gap-2 font-medium text-gray-800 transition-all duration-300 hover:gap-3"
            >
              {t("moreNews.readMore")}
              <ArrowUpRight size={18} className="animate-bounce" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreNews;