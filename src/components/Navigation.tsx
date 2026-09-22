import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const NAV_ITEMS = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "team", path: "/team" },
  { key: "contact", path: "/contact" },
  { key: "updates", path: "/updates" },
  { key: "commitments", path: "/commitments" },
] as const;

const NEWS_TICKER = `
  GLA Legal Practitioners — Corporate & Commercial Law • Cross-Border Legal Advisory •
  Dispute Resolution • International Partnerships • Lagos, Nigeria & São Paulo, Brazil •
  SUPREME COURT DIRECTIVE: Apex court orders INEC to release Warri Federal Constituency
  ward delineation report following landmark emergency session •
  REGULATORY ENFORCEMENT: Corporate Affairs Commission enforces mandatory registration
  framework for fintech agents and point-of-sale operators nationwide •
  TAXATION COMPLIANCE: FIRS accelerates corporate structural regularizations forcing
  small business names to upgrade to Limited Liability Companies •
  JUDICIAL POLICY: National Judicial Council processes critical Federal High Court and
  Supreme Court judicial appointments to resolve case backlogs •
`;

const Navigation: React.FC = () => {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10 || currentScrollY < previousScrollY) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }

      previousScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const handleLanguageChange = (language: "en" | "pt") => {
    i18n.changeLanguage(language);
    closeMenu();
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        showNav
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
 
      <div className="overflow-hidden border-b border-white/10 bg-black">
        <div className="whitespace-nowrap py-2">
          <div className="inline-block animate-[marquee_35s_linear_infinite] text-[10px] uppercase tracking-[0.25em] text-white md:text-xs">
            {NEWS_TICKER}
          </div>
        </div>
      </div>


      <div className="relative overflow-hidden border-b border-white/10 bg-gray-300 backdrop-blur-md">
     <div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
>
  <span
    className="
      whitespace-nowrap
      text-[clamp(1.5rem,8vw,6rem)]
      font-bold
      uppercase
      tracking-[0.15em]
      md:tracking-[0.2em]
      lg:tracking-[0.3em]
      text-black/[0.3]
    "
  >
    G L Agbomoagan
  </span>
</div>
      

        <div className="relative flex h-28 items-center justify-between px-4 md:px-8">
        
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="GLA Legal Practitioners home"
            className="flex items-center"
          >
            <img
              src="/images/glalpclogo.png"
              alt="GLA Legal Practitioners Logo"
              className="h-24 w-auto object-contain transition-all duration-300 sm:h-28 md:h-32 lg:h-36"
            />
          </Link>

         
          <div className="hidden items-center gap-6 font-sans text-xs font-bold uppercase tracking-widest md:flex lg:gap-8">
            {NAV_ITEMS.map(({ key, path }) => (
              <Link
                key={key}
                to={path}
                className="text-black transition-colors duration-300 hover:text-white"
              >
                {t(`nav.${key}`)}
              </Link>
            ))}
          </div>

         
          <div className="ml-4 flex items-center gap-2 border-l border-white/20 pl-4 text-sm">
            <button
              type="button"
              onClick={() => handleLanguageChange("en")}
              aria-label="Switch to English"
              aria-pressed={i18n.language === "en"}
              className="cursor-pointer font-medium text-black transition-opacity hover:opacity-60"
            >
              EN
            </button>

            <span aria-hidden="true" className="text-black">
              |
            </span>

            <button
              type="button"
              onClick={() => handleLanguageChange("pt")}
              aria-label="Switch to Portuguese"
              aria-pressed={i18n.language === "pt"}
              className="cursor-pointer font-medium text-black transition-opacity hover:opacity-60"
            >
              PT
            </button>
          </div>

       
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            className="relative z-50 flex items-center justify-center text-gray-900 focus:outline-none md:hidden"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>


      <div
        className={`absolute left-0 top-full w-full flex-col gap-6 bg-gray-800 px-8 py-10 shadow-2xl md:hidden ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        {NAV_ITEMS.map(({ key, path }) => (
          <Link
            key={key}
            to={path}
            onClick={closeMenu}
            className="w-full border-b border-white/5 pb-3 font-sans text-sm uppercase tracking-[0.2em] text-white transition-colors hover:text-gray-300"
          >
            {t(`nav.${key}`)}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;

