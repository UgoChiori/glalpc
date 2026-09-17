// import React from "react";
// import { ArrowUpRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const MoreNews: React.FC = () => {
//   return (
//     <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
//       <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
//         Latest Insights
      
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="bg-gray-100 rounded-lg shadow-sm overflow-hidden">
//           <img
//             src="/images/morenews1.avif"
//             alt="Legal tips"
//             className="w-full h-56 md:h-64 object-cover rounded-md"
//           />

//           <div className="p-5">
//             <h3 className=" text-lg font-semibold text-gray-800 mb-2 tracking-wide">
//               LEGAL TIPS FOR ENTREPRENEURS
//             </h3>

//             <p className="font-sans text-sm text-gray-600 mb-4 leading-relaxed">
//               Vital tips to consider when starting a business in Nigeria.
//               Understanding legal structure, registration, and compliance can
//               protect your business from future risks.
//             </p>

//             <p className="text-xs text-gray-500 mb-4">Jane Nwabuoku Esq.</p>

//             <Link
//               to="/news/legal-entrepreneur"
//               className="flex items-center gap-2 text-gray-800 font-medium hover:gap-3 transition-all duration-300 w-fit"
//             >
//               Read more
//               <ArrowUpRight size={18} className="animate-bounce" />
//             </Link>
//           </div>
//         </div>

//         <div className="bg-gray-100 rounded-lg shadow-sm overflow-hidden">
//           <img
//             src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ycG9yYXRlJTIwdHJhaW5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
//             alt="Corporate training"
//             className="w-full h-56 md:h-64 object-cover"
//           />

//           <div className="p-5">
//             <h3 className="font-sans text-lg font-semibold text-gray-800 mb-2 uppercase tracking-wide">
//               Corporate Training and Employment Bond: Safeguarding The
//               Investment
//             </h3>

//             <p className="font-sans text-sm text-gray-600 mb-4 leading-relaxed">
//               By Oluwasegun Afolabi Ezra
//             </p>

//             <Link
//               to="/news/corporate-training"
//               className="flex items-center gap-2 text-gray-800 font-medium hover:gap-3 transition-all duration-300 w-fit"
//             >
//               Read more
//               <ArrowUpRight size={18} className="animate-bounce" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MoreNews;
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MoreNews: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
        {t("moreNews.heading")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* CARD 1 */}
        <div className="bg-gray-100 rounded-lg shadow-sm overflow-hidden">
          <img
            src="/images/janeesq.jpeg"
            alt="Legal tips"
            className="w-full h-56 md:h-64 object-cover rounded-md"
          />

          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 tracking-wide">
              {t("moreNews.card1Title")}
            </h3>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {t("moreNews.card1Desc")}
            </p>

            <p className="text-xs text-gray-500 mb-4">
              {t("moreNews.card1Author")}
            </p>

            <Link
              to="/news/legal-entrepreneur"
              className="flex items-center gap-2 text-gray-800 font-medium hover:gap-3 transition-all duration-300 w-fit"
            >
              {t("moreNews.readMore")}
              <ArrowUpRight size={18} className="animate-bounce" />
            </Link>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-gray-100 rounded-lg shadow-sm overflow-hidden">
          <img
            src="/images/team13.jpg"
            alt="Corporate training"
            className="w-full h-56 md:h-64 object-cover"
          />

          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 uppercase tracking-wide">
              {t("moreNews.card2Title")}
            </h3>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {t("moreNews.card2Desc")}
            </p>

            <Link
              to="/news/corporate-training"
              className="flex items-center gap-2 text-gray-800 font-medium hover:gap-3 transition-all duration-300 w-fit"
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