


import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const EntrepreneurLegalTips: React.FC = () => {
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
        y: 20,
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

  const tips = t("article.tips", { returnObjects: true }) as {
    title: string;
    text: string;
  }[];

  return (
    <section ref={pageRef} className="bg-[#f7f4ef] min-h-screen text-black">

    
      <div className="relative overflow-hidden border-b border-black/10">
        <div className="absolute inset-0 bg-gray-900 opacity-95"></div>

        <div className="article-hero relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 text-white">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white hover:text-yellow-300 transition mb-10"
          >
            <ArrowLeft size={16} />
            {t("article.back")}
          </Link>

          <p className="uppercase tracking-[0.3em] text-white text-xs mb-5">
            {t("article.category")}
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight max-w-6xl uppercase">
            {t("article.title")}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-gray-300">
            <p>{t("article.author")}</p>

            <div className="flex items-center gap-2">
              <CalendarDays size={16} />
              <span>{t("article.date")}</span>
            </div>
          </div>

          <p className="mt-5 text-sm text-gray-400 max-w-xl">
            {t("article.subtitle")}
          </p>

        </div>
      </div>

 
      <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-14">
        <div className="article-image overflow-hidden rounded-3xl h-[300px] md:h-[550px] shadow-2xl">
          <img
            src="/images/herosec5.jpg"
            alt="Entrepreneurship"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">

        <div className="article-content space-y-8 text-gray-800 leading-[2] text-[15px] md:text-[17px]">

          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            {t("article.introTitle")}
          </h2>

          <p>{t("article.intro1")}</p>
          <p>{t("article.intro2")}</p>
          <p>{t("article.intro3")}</p>

          <div className="border-l-4 border-gray-900 pl-6 py-2 italic text-black text-lg leading-relaxed bg-yellow-50 rounded-r-xl">
            {t("article.quote1")}
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-black pt-4">
            {t("article.tipsTitle")}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 pt-4">
            {tips.map((tip, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                  index % 2 === 0
                    ? "bg-white border-black/10"
                    : "bg-black text-white border-black"
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                      index % 2 === 0
                        ? "bg-gray-200 text-black"
                        : "bg-white text-black"
                    }`}
                  >
                    {index + 1}
                  </div>

                  <h3 className="text-lg font-semibold leading-snug">
                    {tip.title}
                  </h3>
                </div>

                <p className={`text-sm leading-relaxed ${
                  index % 2 === 0 ? "text-gray-700" : "text-gray-300"
                }`}>
                  {tip.text}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-black pt-10">
            {t("article.structureTitle")}
          </h2>

          <p>{t("article.structureText")}</p>

          <h2 className="text-2xl md:text-3xl font-semibold text-black pt-10">
            {t("article.taxTitle")}
          </h2>

          <p>{t("article.taxText1")}</p>
          <p>{t("article.taxText2")}</p>

          <h2 className="text-2xl md:text-3xl font-semibold text-black pt-10">
            {t("article.ipTitle")}
          </h2>

          <p>{t("article.ipText1")}</p>
          <p>{t("article.ipText2")}</p>

          <h2 className="text-2xl md:text-3xl font-semibold text-black pt-10">
            {t("article.conclusionTitle")}
          </h2>

          <p>{t("article.conclusion1")}</p>
          <p>{t("article.conclusion2")}</p>
          <p>{t("article.conclusion3")}</p>

        </div>
      </div>
    </section>
  );
};

export default EntrepreneurLegalTips;
