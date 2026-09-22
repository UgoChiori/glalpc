import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CopyrightArticle: React.FC = () => {
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
        stagger: 0.05,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".article-content",
          start: "top 85%",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={pageRef} className="bg-[#f7f4ef] min-h-screen text-black">
 
      <div className="relative overflow-hidden border-b border-black/10">
        <div className="absolute inset-0 bg-gray-900 opacity-95"></div>

        <div className="article-hero relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 text-white">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] hover:text-yellow-300 transition mb-10"
          >
            <ArrowLeft size={16} />
            {t("copyright.back")}
          </Link>

          <p className="uppercase tracking-[0.3em] text-xs mb-5">
            {t("copyright.category")}
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight max-w-5xl uppercase">
            {t("copyright.title")}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-gray-300">
            <p>{t("copyright.author")}</p>

            <div className="flex items-center gap-2">
              <CalendarDays size={16} />
              <span>{t("copyright.date")}</span>
            </div>
          </div>

          <p className="mt-5 text-sm text-gray-400 max-w-xl">
            {t("copyright.subtitle")}
          </p>
        </div>
      </div>

  
      <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-14">
        <div className="article-image overflow-hidden rounded-3xl h-[300px] md:h-[550px] shadow-2xl">
          <img
            src="/images/team12.jpeg"
            alt="Copyright Law"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="article-content space-y-8 text-gray-800 leading-[2] text-[15px] md:text-[17px]">
          {(t("copyright.body", { returnObjects: true }) as string[]).map(
            (p: string, i: number) => (
              <p key={i}>{p}</p>
            ),
          )}

          <div className="border-l-4 border-gray-900 pl-6 py-2 italic text-lg bg-yellow-50 rounded-r-xl">
            {t("copyright.quote")}
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold pt-4">
            {t("copyright.section1Title")}
          </h2>

          {(t("copyright.section1", { returnObjects: true }) as string[]).map(
            (p: string, i: number) => (
              <p key={i}>{p}</p>
            ),
          )}

          <h2 className="text-2xl md:text-3xl font-semibold pt-4">
            {t("copyright.section2Title")}
          </h2>

          {(t("copyright.section2", { returnObjects: true }) as string[]).map(
            (p: string, i: number) => (
              <p key={i}>{p}</p>
            ),
          )}

          <h2 className="text-2xl md:text-3xl font-semibold pt-4">
            {t("copyright.section3Title")}
          </h2>

          {(t("copyright.section3", { returnObjects: true }) as string[]).map(
            (p: string, i: number) => (
              <p key={i}>{p}</p>
            ),
          )}

          <div className="border border-black/10 rounded-2xl p-6 bg-white italic text-sm">
            {t("copyright.disclaimer")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CopyrightArticle;
