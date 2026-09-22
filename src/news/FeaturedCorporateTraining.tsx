import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FeaturedCorporateTraining: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".article-hero > *", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".article-image", {
        scale: 1.05,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".article-content > *", {
        y: 25,
        opacity: 0,
        stagger: 0.04,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".article-content",
          start: "top 85%",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const conditions = t("corp.conditions", { returnObjects: true }) as string[];
  const drafting = t("corp.drafting", { returnObjects: true }) as string[];
  const safeguards = t("corp.safeguards", { returnObjects: true }) as string[];
  const references = t("corp.references", { returnObjects: true }) as string[];

  return (
    <section ref={pageRef} className="bg-[#f7f4ef] min-h-screen text-black">


      <div className="relative overflow-hidden border-b border-black/10">
        <div className="absolute inset-0 bg-gray-900"></div>

        <div className="article-hero relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 text-white">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] hover:text-yellow-300 transition mb-10"
          >
            <ArrowLeft size={16} />
            {t("corp.back")}
          </Link>

          <p className="uppercase tracking-[0.3em] text-xs mb-5">
            {t("corp.category")}
          </p>

          <h1 className="text-3xl md:text-6xl font-semibold leading-tight max-w-6xl uppercase">
            {t("corp.title")}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-gray-300">
            <p>{t("corp.author")}</p>

            <div className="flex items-center gap-2">
              <CalendarDays size={16} />
              <span>{t("corp.date")}</span>
            </div>
          </div>

          <p className="mt-5 text-sm text-gray-400 max-w-xl">
            {t("corp.subtitle")}
          </p>

        </div>
      </div>

    
      <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-14">
        <div className="article-image overflow-hidden rounded-3xl h-[300px] md:h-[550px] shadow-2xl">
          <img
            src="/images/herosec6.jpg"
            alt="Corporate Training"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

  
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">

        <div className="article-content space-y-8 text-gray-800 leading-[2] text-[15px] md:text-[17px]">

          <h2 className="text-2xl md:text-3xl font-semibold">
            {t("corp.introTitle")}
          </h2>

          <p>{t("corp.intro1")}</p>
          <p>{t("corp.intro2")}</p>
          <p>{t("corp.intro3")}</p>

          <div className="border-l-4 border-gray-900 pl-6 py-2 italic text-lg bg-yellow-50 rounded-r-xl">
            {t("corp.quote1")}
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold pt-4">
            {t("corp.section1Title")}
          </h2>

          <p>{t("corp.section1Text1")}</p>
          <p>{t("corp.section1Text2")}</p>

          <div className="bg-white border border-black/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4">
              {t("corp.simpleTitle")}
            </h3>
            <p>{t("corp.simpleText")}</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold pt-4">
            {t("corp.conditionsTitle")}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {conditions.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-black/10 rounded-2xl p-6"
              >
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold">
                    {i + 1}
                  </div>
                  <p>{item}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold pt-10">
            {t("corp.bestPracticesTitle")}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black text-white rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">
                {t("corp.draftingTitle")}
              </h3>
              <ul className="space-y-3 text-sm text-gray-300 list-disc pl-5">
                {drafting.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">
                {t("corp.safeguardsTitle")}
              </h3>
              <ul className="space-y-3 text-sm text-gray-700 list-disc pl-5">
                {safeguards.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold pt-10">
            {t("corp.clarityTitle")}
          </h2>

          <p>{t("corp.clarityText")}</p>

          <div className="bg-yellow-100 border border-yellow-300 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              {t("corp.exampleTitle")}
            </h3>
            <p>{t("corp.exampleText")}</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold pt-10">
            {t("corp.conclusionTitle")}
          </h2>

          <p>{t("corp.conclusion1")}</p>
          <p>{t("corp.conclusion2")}</p>
          <p>{t("corp.conclusion3")}</p>

      
          <div className="mt-16 border-t border-black/10 pt-10">
            <h3 className="text-2xl font-semibold mb-6">
              {t("corp.referencesTitle")}
            </h3>

            <div className="space-y-4 text-sm text-gray-700">
              {references.map((r, i) => (
                <p key={i}>{r}</p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedCorporateTraining;