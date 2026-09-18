


import React from "react";
// import ThemeToggle from "../components/ThemeToggle";
import { useTranslation } from "react-i18next";
// import { Link }

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-6 md:px-12 lg:px-24 transition-colors duration-300 min-h-screen">
      <div className="mx-auto">

        {/* Theme Toggle */}
        <div className="flex justify-end mb-8">
          {/* <ThemeToggle /> */}
        </div>

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t("about.heading")}
          </h1>
          <div className="h-1 w-20 bg-gold-600 mx-auto mb-8"></div>
        </div>

        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-gray-100 mb-4">
              {t("about.heroTitle")}
            </h2>

            <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-6">
              {t("about.heroDesc")}
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-2 border-2 border-slate-200 dark:border-gray-700 rounded-lg translate-x-4 translate-y-4 -z-10 hidden md:block"></div>

              <img
                src="/images/about.jpg"
                alt="Our Legal Professionals"
                className="rounded-lg shadow-xl w-full object-cover h-64 md:h-96"
              />
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="max-w-none grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">

          <div className="space-y-6">
            <p className="text-slate-700 dark:text-gray-300 leading-relaxed">
              {t("about.body1")}
            </p>

            <p className="text-slate-700 dark:text-gray-300 leading-relaxed">
              {t("about.body2")}
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-slate-700 dark:text-gray-300 leading-relaxed">
              {t("about.body3")}
            </p>

            <p className="font-medium text-slate-900 dark:text-white bg-slate-50 dark:bg-gray-800 p-6 border-l-4 border-slate-800 dark:border-gold-600 italic">
              {t("about.callout")}
            </p>
          </div>

        </div>
      </div>
      {/* CSR SECTION */}
<div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
  <div className="space-y-6">
    <p className="text-slate-700 dark:text-gray-300 leading-relaxed">
      {t("about.body4")}
    </p>
  </div>

  <div className="space-y-4">
    <div className="bg-slate-50 dark:bg-gray-800 p-6 border border-slate-200 dark:border-gray-700 rounded-lg">
      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
        {t("about.csrLinksTitle")}
      </h3>

   <div className="flex flex-col gap-3 text-sm">
  <a
    href="https://www.linkedin.com/company/send-a-child-2-school-africa/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-700 dark:text-gray-300 hover:underline"
  >
    {t("about.csrLink1.label")}
  </a>

  <a
    href="https://www.linkedin.com/company/cross-border-legal-practice-ai/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-700 dark:text-gray-300 hover:underline"
  >
    {t("about.csrLink2.label")}
  </a>
</div>
    </div>
  </div>
</div>
    </section>
  );
};

export default About;