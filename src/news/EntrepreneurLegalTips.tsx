// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ArrowLeft, CalendarDays } from "lucide-react";
// import { Link } from "react-router-dom";

// const EntrepreneurLegalTips: React.FC = () => {
//   const pageRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const ctx = gsap.context(() => {
//       gsap.from(".article-hero > *", {
//         y: 40,
//         opacity: 0,
//         stagger: 0.15,
//         duration: 1,
//         ease: "power3.out",
//       });

//       gsap.from(".article-image", {
//         scale: 1.05,
//         opacity: 0,
//         duration: 1.2,
//         ease: "power3.out",
//       });

//       gsap.from(".article-content > *", {
//         y: 20,
//         opacity: 0,
//         stagger: 0.04,
//         duration: 0.7,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: ".article-content",
//           start: "top 85%",
//         },
//       });
//     }, pageRef);

//     return () => ctx.revert();
//   }, []);

//   const tips = [
//     {
//       title: "Choose The Right Business Structure",
//       text: "Selecting the appropriate business structure determines tax obligations, liability exposure, and your ability to raise funding.",
//     },
//     {
//       title: "Register Your Business Properly",
//       text: "Ensure your business is registered with the Corporate Affairs Commission (CAC) and obtain all required certificates and documentation.",
//     },
//     {
//       title: "Understand Your Tax Obligations",
//       text: "Businesses must comply with Nigerian tax laws including VAT, PAYE, Companies Income Tax, and withholding tax requirements.",
//     },
//     {
//       title: "Draft Clear Contracts",
//       text: "Well-drafted agreements help prevent disputes and protect your business relationships and obligations.",
//     },
//     {
//       title: "Protect Your Intellectual Property",
//       text: "Register trademarks, copyrights, and patents to safeguard your brand identity and innovations.",
//     },
//     {
//       title: "Comply With Industry Regulations",
//       text: "Different industries require specific permits, licenses, and approvals from regulatory agencies.",
//     },
//     {
//       title: "Understand Employment Laws",
//       text: "Employment contracts and staff policies should align with Nigerian labour laws and employee rights.",
//     },
//     {
//       title: "Implement Data Protection Measures",
//       text: "Businesses handling personal data must comply with the Nigeria Data Protection Act 2023.",
//     },
//     {
//       title: "Plan For Dispute Resolution",
//       text: "Including mediation and arbitration clauses in contracts can reduce expensive litigation risks.",
//     },
//     {
//       title: "Engage Legal Counsel Early",
//       text: "Working with a legal practitioner from the beginning helps businesses avoid costly legal mistakes.",
//     },
//   ];

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
//         Entrepreneurship
//           </p>

//           <h1 className="text-3xl md:text-5xl font-semibold leading-tight max-w-6xl uppercase">
//             Legal Tips For Entrepreneurs — Vital Tips To Consider When Starting A Business In Nigeria
//           </h1>

//           <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-gray-300">

//             <p>
//               By Jane Nwabuoku Esq.
//             </p>

//             <div className="flex items-center gap-2">
//               <CalendarDays size={16} />
//               <span>September 1, 2024</span>
//             </div>

//           </div>

//           <p className="mt-5 text-sm text-gray-400 max-w-xl">
//             International & Domestic Commercial Law
//           </p>

//         </div>
//       </div>

//       {/* IMAGE */}
//       <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-14">

//         <div className="article-image overflow-hidden rounded-3xl h-[300px] md:h-[550px] shadow-2xl">
//           <img
//             src="/images/herosec5.jpg"
//             alt="Entrepreneurship"
//             className="w-full h-full object-cover"
//           />
//         </div>

//       </div>

//       {/* BODY */}
//       <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">

//         <div className="article-content space-y-8 text-gray-800 leading-[2] text-[15px] md:text-[17px]">

//           <h2 className="text-2xl md:text-3xl font-semibold text-black">
//             Introduction
//           </h2>

//           <p>
//             As an entrepreneur in Nigeria, understanding the legal framework
//             is crucial for business success.
//           </p>

//           <p>
//             Starting and running a business in Nigeria comes with both
//             opportunities and challenges, especially in navigating the legal
//             landscape.
//           </p>

//           <p>
//             Ensuring your business is legally compliant not only protects you
//             from potential pitfalls but also lays the foundation for long-term
//             sustainability and growth.
//           </p>

//           <div className="border-l-4 border-gray-900 pl-6 py-2 italic text-black text-lg leading-relaxed bg-yellow-50 rounded-r-xl">
//             “Entrepreneurship in Nigeria requires more than business acumen —
//             it requires legal awareness and strategic compliance.”
//           </div>

//           <h2 className="text-2xl md:text-3xl font-semibold text-black pt-4">
//             Essential Legal Tips For Entrepreneurs
//           </h2>

//           <div className="grid md:grid-cols-2 gap-6 pt-4">

//             {tips.map((tip, index) => (
//               <div
//                 key={index}
//                 className={`rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
//                   index % 2 === 0
//                     ? "bg-white border-black/10"
//                     : "bg-black text-white border-black"
//                 }`}
//               >
//                 <div className="flex items-center gap-4 mb-4">

//                   <div
//                     className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
//                       index % 2 === 0
//                         ? "bg-gray-200 text-black"
//                         : "bg-white text-black"
//                     }`}
//                   >
//                     {index + 1}
//                   </div>

//                   <h3 className="text-lg font-semibold leading-snug">
//                     {tip.title}
//                   </h3>

//                 </div>

//                 <p
//                   className={`text-sm leading-relaxed ${
//                     index % 2 === 0
//                       ? "text-gray-700"
//                       : "text-gray-300"
//                   }`}
//                 >
//                   {tip.text}
//                 </p>

//               </div>
//             ))}

//           </div>

//           <h2 className="text-2xl md:text-3xl font-semibold text-black pt-10">
//             Choosing The Right Business Structure
//           </h2>

//           <p>
//             Selecting the proper legal structure affects liability,
//             taxation, compliance obligations, and funding opportunities.
//           </p>

//           <div className="grid md:grid-cols-2 gap-6 py-4">

//             <div className="bg-white border border-black/10 rounded-2xl p-6">

//               <h3 className="font-semibold text-xl mb-4">
//                 Common Structures Under CAMA 2020
//               </h3>

//               <ul className="space-y-3 text-sm leading-relaxed text-gray-700 list-disc pl-5">
//                 <li>Business Name</li>
//                 <li>Limited Liability Partnership</li>
//                 <li>Limited Partnership</li>
//                 <li>Private Company Limited by Shares</li>
//                 <li>Public Company Limited by Shares</li>
//                 <li>Unlimited Company</li>
//                 <li>Incorporated Trustees</li>
//                 <li>Company Limited by Guarantee</li>
//               </ul>

//             </div>

//             <div className="bg-black text-white rounded-2xl p-6">

//               <h3 className="font-semibold text-xl mb-4 text-white">
//                 Key CAMA 2020 Innovations
//               </h3>

//               <ul className="space-y-3 text-sm leading-relaxed text-gray-300 list-disc pl-5">
//                 <li>Single-member companies</li>
//                 <li>Reduced minimum share capital</li>
//                 <li>Electronic filing systems</li>
//                 <li>Electronic meetings</li>
//                 <li>Digital share transfers</li>
//               </ul>

//             </div>

//           </div>

//           <div className="bg-gray-200 border border-gray-300 rounded-2xl p-6 text-black">

//             <h3 className="text-xl font-semibold mb-3">
//               Practical Tip
//             </h3>

//             <p className="leading-relaxed">
//               Consider registering as a private limited liability company
//               for stronger asset protection and easier access to funding.
//             </p>

//           </div>

//           <h2 className="text-2xl md:text-3xl font-semibold text-black pt-10">
//             Understanding Tax Obligations
//           </h2>

//           <p>
//             Entrepreneurs must remain compliant with Nigeria’s tax system
//             to avoid penalties and business disruptions.
//           </p>

//           <p>
//             Businesses may be required to pay VAT, PAYE, Companies Income
//             Tax, Withholding Tax, and other statutory taxes depending on
//             their operations.
//           </p>

//           <div className="border border-black/10 rounded-2xl p-6 bg-white">

//             <h3 className="text-xl font-semibold mb-4">
//               Important Note
//             </h3>

//             <p className="text-gray-700 leading-relaxed">
//               Small companies with annual turnover below ₦25 million are
//               exempt from Companies Income Tax under recent Finance Act
//               reforms.
//             </p>

//           </div>

//           <h2 className="text-2xl md:text-3xl font-semibold text-black pt-10">
//             Intellectual Property Protection
//           </h2>

//           <p>
//             Intellectual Property protection remains essential for modern
//             businesses, particularly startups and innovation-driven brands.
//           </p>

//           <p>
//             Entrepreneurs should register trademarks, copyrights, and
//             patents to prevent unauthorized use and brand infringement.
//           </p>

//           <div className="border-l-4 border-black pl-6 py-2 bg-neutral-100 rounded-r-xl">

//             <p className="italic text-gray-800 leading-relaxed">
//               “A business that protects its intellectual property protects
//               its future value.”
//             </p>

//           </div>

//           <h2 className="text-2xl md:text-3xl font-semibold text-black pt-10">
//             Conclusion
//           </h2>

//           <p>
//             Entrepreneurship in Nigeria requires more than ambition and
//             creativity. It demands an understanding of the legal and
//             regulatory environment.
//           </p>

//           <p>
//             By applying these legal principles and maintaining compliance,
//             entrepreneurs can protect their businesses, minimize risks,
//             and focus on sustainable growth.
//           </p>

//           <p>
//             Seeking professional legal guidance early can save businesses
//             from costly mistakes and future legal exposure.
//           </p>

//           <div className="border border-black/10 rounded-2xl p-6 bg-white mt-10">

//             <h3 className="text-xl font-semibold mb-4">
//               Disclaimer
//             </h3>

//             <p className="text-sm leading-relaxed text-gray-700 italic">
//               The content provided herein is for informational purposes only
//               and should not be construed as legal advice. Readers are
//               encouraged to seek the advice of a qualified legal practitioner
//               regarding the application of Nigerian laws to their specific
//               circumstances.
//             </p>

//           </div>

//           {/* REFERENCES */}
//           <div className="mt-16 border-t border-black/10 pt-10">

//             <h3 className="text-2xl font-semibold mb-6">
//               References
//             </h3>

//             <div className="space-y-4 text-sm text-gray-700 leading-relaxed">

//               <p>
//                 1. Companies and Allied Matters Act (CAMA) 2020.
//               </p>

//               <p>
//                 2. Company Income Tax Act (CITA).
//               </p>

//               <p>
//                 3. Nigerian Labour Act Cap L1, LFN 2004.
//               </p>

//               <p>
//                 4. Arbitration and Mediation Act 2023.
//               </p>

//               <p>
//                 5. Ferodo Ltd v. Ibeto Industries Ltd (2004).
//               </p>

//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default EntrepreneurLegalTips;




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

      {/* HERO */}
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

      {/* IMAGE */}
      <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-14">
        <div className="article-image overflow-hidden rounded-3xl h-[300px] md:h-[550px] shadow-2xl">
          <img
            src="/images/herosec5.jpg"
            alt="Entrepreneurship"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* BODY */}
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

          {/* remaining sections */}
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
