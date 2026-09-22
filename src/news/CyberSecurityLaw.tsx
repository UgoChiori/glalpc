// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ArrowLeft, CalendarDays } from "lucide-react";
// import { Link } from "react-router-dom";

// const CyberSecurityLaw: React.FC = () => {
//   const pageRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const ctx = gsap.context(() => {
//       gsap.from(".article-hero > *", {
//         y: 40,
//         opacity: 0,
//         stagger: 0.2,
//         duration: 1,
//         ease: "power3.out",
//       });

//       gsap.from(".article-image", {
//         scale: 1.08,
//         opacity: 0,
//         duration: 1.3,
//         ease: "power3.out",
//       });

//       gsap.from(".article-content p", {
//         y: 20,
//         opacity: 0,
//         stagger: 0.05,
//         duration: 0.8,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: ".article-content",
//           start: "top 85%",
//         },
//       });
//     }, pageRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={pageRef}
//       className="bg-[#f7f4ef] min-h-screen text-black"
//     >
//       {/* HERO */}
//       <div className="relative overflow-hidden border-b border-black/10">
//         <div className="absolute inset-0 bg-gray-900 opacity-95"></div>

//         <div className="article-hero relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 text-white">
//           <Link
//             to="/"
//             className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white hover:text-yellow-300 transition mb-10"
//           >
//             <ArrowLeft size={16} />
//             Back to Home
//           </Link>

//           <p className="uppercase tracking-[0.3em] text-white text-xs mb-5">
//             Technology
//           </p>

//           <h1 className="text-3xl md:text-5xl font-semibold leading-tight max-w-5xl uppercase">
//             Emerging Trends In Cybersecurity Law And Data Privacy And Its Impact
//             On Individuals And Organizations
//           </h1>

//           <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-gray-300">
//             <p>By Omolade Olalemi Esq.</p>

//             <div className="flex items-center gap-2">
//               <CalendarDays size={16} />
//               <span>August 21, 2024</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FEATURED IMAGE */}
//       <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-14">
//         <div className="article-image overflow-hidden rounded-3xl h-[300px] md:h-[550px] shadow-2xl">
//           <img
//             src="/images/herosecthree.jpeg"
//             alt="Cybersecurity Law"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       {/* ARTICLE BODY */}
//       <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
//         <div className="article-content space-y-8 text-gray-800 leading-[2] text-[15px] md:text-[17px]">
//           <p>
//             The world as it is today could best be described as a digitally interconnected one. This is in light of the proliferation of digital services and methods, whereby concepts such as social media, e-commerce, and cloud computing have taken sway.
//           </p>

//           <p>
//             This has in turn led to the creation and storage of vast amounts of personal data which now give rise to cybersecurity and data privacy issues.
//           </p>

//           <p>
//             Consequently, governments worldwide have been actively creating cybersecurity laws and data privacy regulations to address these challenges.
//           </p>

//           <p>
//             Thus, as a whole, the legal landscape of cybersecurity and data privacy is rapidly changing, with increased regulation, evolving standards, and a growing emphasis on data protection.
//           </p>

//           <p>
//             Organizations are now grappling with cybersecurity threats to their IT systems and critical business data while also facing expanding consumer and legal demands to respect personal information privacy.
//           </p>

//           <div className="border-l-4 border-gray-900 pl-6 py-2 italic text-black text-lg leading-relaxed bg-yellow-50 rounded-r-xl">
//             “The exponential increase in data creation and processing has resulted in significant challenges in relation to the protection of sensitive information from cyber threats and ensuring digital privacy.”
//           </div>

//           <h2 className="text-2xl md:text-3xl font-semibold text-black pt-6">
//             Global Legal Framework
//           </h2>

//           <p>
//             On the global level, we have the General Data Protection Regulation (GDPR), as implemented by the European Union in 2018, which is one of the most comprehensive data protection laws, setting a precedent for other nations.
//           </p>

//           <p>
//             The GDPR mandates strict data handling practices, requiring businesses to protect user data with intense security measures.
//           </p>

//           <p>
//             Due largely to the GDPR, data privacy has emerged as a global priority, with countries enacting laws to safeguard personal information in an era where data breaches are alarmingly common.
//           </p>

//           <h2 className="text-2xl md:text-3xl font-semibold text-black pt-6">
//             The Nigerian Legal Framework
//           </h2>

//           <p>
//             The primary legislation addressing cybersecurity in Nigeria is the Cybercrimes (Prohibition, Prevention, Etc.) Act, 2015.
//           </p>

//           <p>
//             The Act criminalizes various cyber offenses, including identity theft, cyberstalking, and cyberbullying, while also prescribing penalties for these offenses.
//           </p>

//           <p>
//             Taking it a step further, we look at the recently enacted Nigerian Data Protection Act (NDPA) 2023, which is a key development in the country’s data protection legal framework.
//           </p>

//           <p>
//             It should be mentioned that in Nigeria, data protection is founded on the constitutional right to privacy under Section 37 of the Constitution of the Federal Republic of Nigeria 1999 (as amended).
//           </p>

//           <div className="grid md:grid-cols-2 gap-6 py-4">
//             <div className="bg-white border border-black/10 rounded-2xl p-6">
//               <h3 className="font-semibold text-xl mb-3">
//                 Key NDPA Principles
//               </h3>

//               <ul className="space-y-3 text-sm leading-relaxed text-gray-700 list-disc pl-5">
//                 <li>Data minimization</li>
//                 <li>User consent</li>
//                 <li>Right to be forgotten</li>
//                 <li>Data access and correction rights</li>
//                 <li>Compliance obligations</li>
//               </ul>
//             </div>

//             <div className="bg-black text-white rounded-2xl p-6">
//               <h3 className="font-semibold text-xl mb-3 text-white">
//                 Organizational Challenges
//               </h3>

//               <ul className="space-y-3 text-sm leading-relaxed text-gray-300 list-disc pl-5">
//                 <li>Complex regulatory compliance</li>
//                 <li>Cross-border data issues</li>
//                 <li>Cybersecurity threats</li>
//                 <li>Financial penalties</li>
//                 <li>Reputational risks</li>
//               </ul>
//             </div>
//           </div>

//           <h2 className="text-2xl md:text-3xl font-semibold text-black pt-6">
//             Impact On Individuals And Organizations
//           </h2>

//           <p>
//             These laws provide individuals with greater control over their personal data, including rights to access, correct, and delete information.
//           </p>

//           <p>
//             Organizations, on the other hand, must navigate increasingly complex compliance obligations while ensuring strong cybersecurity practices.
//           </p>

//           <p>
//             Non-compliance can result in significant fines, legal exposure, and reputational damage.
//           </p>

//           <div className="bg-yellow-100 border border-yellow-300 rounded-2xl p-6 text-black">
//             <h3 className="text-xl font-semibold mb-3">
//               Important Statistic
//             </h3>

//             <p className="leading-relaxed">
//               Reports indicate that over 81% of companies have exposed sensitive data due to inadequate oversight and governance.
//             </p>
//           </div>

//           <h2 className="text-2xl md:text-3xl font-semibold text-black pt-6">
//             Conclusion
//           </h2>

//           <p>
//             As technology continues to evolve, so also will the legal framework governing cybersecurity and data privacy.
//           </p>

//           <p>
//             Emerging technologies such as artificial intelligence, blockchain, and the Internet of Things (IoT) present new challenges and opportunities for data protection.
//           </p>

//           <p>
//             For organizations, proactive compliance with cybersecurity and data privacy laws should be viewed not merely as a legal obligation, but as a strategic necessity.
//           </p>
//         </div>

//         {/* REFERENCES */}
//         <div className="mt-16 border-t border-black/10 pt-10">
//           <h3 className="text-2xl font-semibold mb-6">
//             References
//           </h3>

//           <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
//             <p>
//               1. General Data Protection Regulation (GDPR), Regulation (EU)
//               2016/679.
//             </p>

//             <p>
//               2. Cybercrimes (Prohibition, Prevention, Etc.) Act, 2015.
//             </p>

//             <p>
//               3. Nigerian Data Protection Act (NDPA) 2023.
//             </p>

//             <p>
//               4. Constitution of the Federal Republic of Nigeria 1999 (as amended).
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CyberSecurityLaw;
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