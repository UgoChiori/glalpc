import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
const { t } = useTranslation();
  const closeMenu = () => setIsMenuOpen(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // ALWAYS show navbar at top
      if (currentScrollY <= 10) {
        setShowNav(true);
      }
      // Hide when scrolling down
      else if (currentScrollY > lastScrollY) {
        setShowNav(false);
      }
      // Show when scrolling up
      else {
        setShowNav(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-500
      ${showNav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
    >
      {/* NEWS BAR */}
      <div className="bg-black overflow-hidden border-b border-white/10">
        <div className="whitespace-nowrap py-2">
          <div className="inline-block animate-[marquee_35s_linear_infinite] text-[10px] md:text-xs uppercase tracking-[0.25em] text-white">
         GLA Legal Practitioners — Corporate & Commercial Law • Cross-Border Legal Advisory • Dispute Resolution • International Partnerships • Lagos, Nigeria & São Paulo, Brazil • 
  SUPREME COURT DIRECTIVE: Apex court orders INEC to release Warri Federal Constituency ward delineation report following landmark emergency session • 
  REGULATORY ENFORCEMENT: Corporate Affairs Commission enforces mandatory registration framework for fintech agents and point-of-sale operators nationwide • 
  TAXATION COMPLIANCE: FIRS accelerates corporate structural regularizations forcing small business names to upgrade to Limited Liability Companies • 
  JUDICIAL POLICY: National Judicial Council processes critical Federal High Court and Supreme Court judicial appointments to resolve case backlogs •
        
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="border-b border-white/10 bg-gray-300 backdrop-blur-md">
        <div className="flex h-28 items-center justify-between px-4 md:px-8">
          {/* LOGO */}
          <Link to="/" onClick={closeMenu} className="flex items-center">
            <img
              src="/images/glalpclogo.png"
              alt="GLA Legal Practitioners Logo"
              className="h-24 w-auto object-contain sm:h-28 md:h-32 lg:h-36 transition-all duration-300"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-6 font-sans text-xs tracking-widest uppercase md:flex lg:gap-8">
            <Link
              to="/"
              className="text-black transition-colors duration-300 hover:text-white"
            >
              {t("nav.home")}
              {/* Home */}
            </Link>

            <Link
              to="/about"
              className="text-black transition-colors duration-300 hover:text-white"
            >
              {t("nav.about")}
              {/* About */}
            </Link>

            <Link
              to="/team"
              className="text-black transition-colors duration-300 hover:text-white"
            >
              {t("nav.team")}
              {/* Team */}
            </Link>

            <Link
              to="/contact"
              className="text-black transition-colors duration-300 hover:text-white"
            >
              {t("nav.contact")}
              {/* Contact */}
            </Link>
            <Link
              to="/updates"
              className="text-black transition-colors duration-300 hover:text-white"
            >
              {t("nav.updates")}
            </Link>
          </div>
  <div className="flex items-center gap-2 ml-4 border-l border-white/20 pl-4">

    <button
      onClick={() => changeLanguage("en")}
      className={`cursor-pointer transition ${
        i18n.language === "en"
          ? "text-black"
          : "text-black "
      }`}
    >
      EN
    </button>

    <span className="text-black">|</span>

    <button
      onClick={() => changeLanguage("pt")}
      className={`cursor-pointer transition ${
        i18n.language === "pt"
          ? "text-black"
          : "text-black "
      }`}
    >
      PT
    </button>

  </div>
          {/* MOBILE TOGGLE */}
          <button
            className="relative z-50 flex items-center justify-center text-gray-900 focus:outline-none md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute top-full left-0 w-full flex-col items-start gap-6 bg-gray-800 py-10 px-8 shadow-2xl md:hidden`}
      >
        {["Home", "About", "Team", "Contact", "Updates"].map((item) => (
          <Link
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            onClick={closeMenu}
            className="font-sans text-sm tracking-[0.2em] text-white uppercase border-b border-white/5 w-full pb-3"
          >
            {t(`nav.${item.toLowerCase()}`)}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
