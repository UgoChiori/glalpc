import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

const CopyrightArticle: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

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
    <section
      ref={pageRef}
      className="bg-[#f7f4ef] min-h-screen text-black"
    >
      {/* HERO */}
      <div className="relative overflow-hidden border-b border-black/10">
        
        <div className="absolute inset-0 bg-gray-900 opacity-95"></div>

        <div className="article-hero relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 text-white">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white hover:text-yellow-300 transition mb-10"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <p className="uppercase tracking-[0.3em] text-white text-xs mb-5">
        Entertainment
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight max-w-5xl uppercase">
            Understanding Copyright For Artistic Works In Nigeria
          </h1>

          <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-gray-300">
            
            <p>
              By Oluwanifemi Ogunmodede
            </p>

            <div className="flex items-center gap-2">
              <CalendarDays size={16} />
              <span>October 6, 2025</span>
            </div>
          </div>

          <p className="mt-5 text-sm text-gray-400 max-w-xl">
            Corporate & Commercial Associate,
            G L Agbomoagan Legal Practitioners & Consultants
          </p>
        </div>
      </div>

      {/* FEATURED IMAGE */}
      <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-14">

        <div className="article-image overflow-hidden rounded-3xl h-[300px] md:h-[550px] shadow-2xl">
          <img
            src="/images/team12.jpeg"
            alt="Copyright Law"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      {/* ARTICLE BODY */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">

        <div className="article-content space-y-8 text-gray-800 leading-[2] text-[15px] md:text-[17px]">

          <p>
            In Nigeria’s creative industry, whether in fine art, music,
            photography, fashion, design, or digital media, copyright law
            plays a central role in protecting original creators.
          </p>

          <p>
            For artists, knowing what rights they have and how to enforce
            them is just as important as the creative process itself.
          </p>

          <div className="border-l-4 border-gray-900 pl-6 py-2 italic text-black text-lg leading-relaxed bg-yellow-50 rounded-r-xl">
            “Copyright protection exists to preserve originality, reward
            creativity, and safeguard artistic expression.”
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-black pt-4">
            Artistic Works Protected Under Nigerian Law
          </h2>

          <p>
            Under the Nigerian Copyright Act (as amended in 2022),
            artistic works include a wide range of creative expressions.
          </p>

          <div className="grid md:grid-cols-2 gap-6 py-2">

            <div className="bg-white border border-black/10 rounded-2xl p-6">
              
              <h3 className="font-semibold text-xl mb-4">
                Protected Artistic Works
              </h3>

              <ul className="space-y-3 text-sm leading-relaxed text-gray-700 list-disc pl-5">
                <li>Paintings and drawings</li>
                <li>Etchings and engravings</li>
                <li>Maps and technical diagrams</li>
                <li>Architectural works</li>
                <li>Sculptures and carvings</li>
                <li>Textiles and handcrafts</li>
                <li>Photographs</li>
                <li>Audio recordings</li>
              </ul>
            </div>

            <div className="bg-black text-white rounded-2xl p-6">

              <h3 className="font-semibold text-xl mb-4 text-white">
                Eligible Registrable Works
              </h3>

              <ul className="space-y-3 text-sm leading-relaxed text-gray-300 list-disc pl-5">
                <li>Literary works</li>
                <li>Computer programs</li>
                <li>Musical compositions</li>
                <li>Artistic works</li>
                <li>Cinematographic films</li>
                <li>Sound recordings</li>
              </ul>
            </div>

          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-black pt-4">
            Copyright Registration In Nigeria
          </h2>

          <p>
            Copyright in artistic works arises automatically upon creation.
            There is no requirement for formal registration before protection
            exists.
          </p>

          <p>
            However, voluntary registration with the Nigerian Copyright
            Commission (NCC) through the Nigerian Copyright e-Registration
            System may serve as proof of ownership where disputes arise.
          </p>

          <div className="bg-yellow-100 border border-yellow-300 rounded-2xl p-6 text-black">

            <h3 className="text-xl font-semibold mb-3">
              Duration Of Protection
            </h3>

            <ul className="space-y-3 leading-relaxed list-disc pl-5">
              <li>
                Artistic works: life of the author plus 70 years after death.
              </li>

              <li>
                Photographs: 70 years from first publication.
              </li>
            </ul>

          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-black pt-4">
            Rights Of The Author
          </h2>

          <p>
            The creator of an artistic work enjoys both economic and moral
            rights under Nigerian law.
          </p>

          <div className="grid md:grid-cols-2 gap-6 py-2">

            <div className="bg-white border border-black/10 rounded-2xl p-6">

              <h3 className="font-semibold text-xl mb-3">
                Economic Rights
              </h3>

              <p className="text-gray-700 leading-relaxed text-sm">
                Exclusive rights to reproduce, publish, adapt,
                distribute, or commercially exploit the work.
              </p>

            </div>

            <div className="bg-white border border-black/10 rounded-2xl p-6">

              <h3 className="font-semibold text-xl mb-3">
                Moral Rights
              </h3>

              <p className="text-gray-700 leading-relaxed text-sm">
                The right to claim authorship and object to distortion,
                mutilation, or misuse capable of harming the creator’s
                reputation.
              </p>

            </div>

          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-black pt-4">
            Importance Of Copyright Protection
          </h2>

          <p>
            In a fast-growing creative economy, protecting artistic works
            ensures that creators are rewarded for originality, helps
            prevent piracy, and boosts investor confidence in Nigeria’s
            creative sectors.
          </p>

          <p>
            As the Nigerian creative industry continues to expand globally,
            awareness of copyright protection is becoming increasingly
            important for artists, entrepreneurs, and content creators.
          </p>

          <div className="border border-black/10 rounded-2xl p-6 bg-white">

            <p className="text-sm leading-relaxed text-gray-700 italic">
              This summary, prepared in line with the concept of copyright
              under Nigerian law, is for informational and educational
              purposes only and does not constitute legal advice.
              Professional legal advice should be sought regarding
              specific circumstances.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CopyrightArticle;