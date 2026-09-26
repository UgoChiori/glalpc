import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CyberSecurityLaw: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".article-hero > *", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".article-image", {
        scale: 1.08,
        opacity: 0,
        duration: 1.3,
        ease: "power3.out",
      });

      gsap.from(".article-content p", {
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

  const ndpa = t("cyber.ndpa", { returnObjects: true }) as string[];
  const challenges = t("cyber.challenges", { returnObjects: true }) as string[];
  const refs = t("cyber.references", { returnObjects: true }) as string[];

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
            {t("cyber.back")}
          </Link>

          <p className="uppercase tracking-[0.3em] text-xs mb-5">
            {t("cyber.category")}
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight max-w-5xl uppercase">
            {t("cyber.title")}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-gray-300">
            <p>{t("cyber.author")}</p>

            <div className="flex items-center gap-2">
              <CalendarDays size={16} />
              <span>{t("cyber.date")}</span>
            </div>
          </div>
        </div>
      </div>

    
      <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-14">
        <div className="article-image overflow-hidden rounded-3xl h-[300px] md:h-[550px] shadow-2xl">
          <img
            src="/images/herosecthree.jpeg"
            alt="Cybersecurity Law"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

   
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">

        <div className="article-content space-y-8 text-gray-800 leading-[2] text-[15px] md:text-[17px]">

          {(t("cyber.body", { returnObjects: true }) as string[]).map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}

          <div className="border-l-4 border-gray-900 pl-6 py-2 italic text-lg bg-yellow-50 rounded-r-xl">
            {t("cyber.quote")}
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold pt-6">
            {t("cyber.globalTitle")}
          </h2>

          {(t("cyber.global", { returnObjects: true }) as string[]).map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}

          <h2 className="text-2xl md:text-3xl font-semibold pt-6">
            {t("cyber.nigeriaTitle")}
          </h2>

          {(t("cyber.nigeria", { returnObjects: true }) as string[]).map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}

          <div className="grid md:grid-cols-2 gap-6 py-4">

            <div className="bg-white border border-black/10 rounded-2xl p-6">
              <h3 className="font-semibold text-xl mb-3">
                {t("cyber.ndpaTitle")}
              </h3>

              <ul className="space-y-3 text-sm text-gray-700 list-disc pl-5">
                {ndpa.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-black text-white rounded-2xl p-6">
              <h3 className="font-semibold text-xl mb-3">
                {t("cyber.challengesTitle")}
              </h3>

              <ul className="space-y-3 text-sm text-gray-300 list-disc pl-5">
                {challenges.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

          </div>

          <h2 className="text-2xl md:text-3xl font-semibold pt-6">
            {t("cyber.impactTitle")}
          </h2>

          {(t("cyber.impact", { returnObjects: true }) as string[]).map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}

          <div className="bg-yellow-100 border border-yellow-300 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              {t("cyber.statTitle")}
            </h3>
            <p>{t("cyber.statText")}</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold pt-6">
            {t("cyber.conclusionTitle")}
          </h2>

          {(t("cyber.conclusion", { returnObjects: true }) as string[]).map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}

        </div>

      
        <div className="mt-16 border-t border-black/10 pt-10">

          <h3 className="text-2xl font-semibold mb-6">
            {t("cyber.referencesTitle")}
          </h3>

          <div className="space-y-4 text-sm text-gray-700">
            {refs.map((r, i) => (
              <p key={i}>{r}</p>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default CyberSecurityLaw;