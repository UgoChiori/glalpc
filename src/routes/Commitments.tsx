import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";

const Commitments: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-950 px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 max-w-3xl">
          {/* <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
            Our Commitments
          </p> */}

          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {t("about.heading2")}
          </h1>

          <div className="mt-5 h-1 w-16 rounded-full bg-yellow-600" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          {/* Main text */}
          <div className="flex items-start">
            <p className="max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              {t("about.body4")}
            </p>
          </div>

          {/* CSR Links */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-6 shadow-xl md:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white">
                {t("about.csrLinksTitle")}
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Explore the initiatives and organisations we support.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/company/send-a-child-2-school-africa/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-gray-800 bg-gray-950 px-5 py-4 transition-all duration-300 hover:border-yellow-700 hover:bg-gray-900"
              >
                <span className="text-sm font-medium text-gray-200 transition-colors group-hover:text-yellow-600">
                  {t("about.csrLink1.label")}
                </span>

                <ArrowUpRight
                  size={18}
                  className="text-gray-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-yellow-600"
                />
              </a>

              <a
                href="https://www.linkedin.com/company/cross-border-legal-practice-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-gray-800 bg-gray-950 px-5 py-4 transition-all duration-300 hover:border-yellow-700 hover:bg-gray-900"
              >
                <span className="text-sm font-medium text-gray-200 transition-colors group-hover:text-yellow-600">
                  {t("about.csrLink2.label")}
                </span>

                <ArrowUpRight
                  size={18}
                  className="text-gray-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-yellow-600"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitments;