
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-300 text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">

        <div className="flex flex-col md:flex-row gap-6 md:gap-32 items-start md:items-center justify-around">

        
          <div className="flex flex-col items-start gap-6">
            <Link to="/">
              <img
                src="/images/glalpclogo.png"
                alt="glalogo"
                className="h-25 md:h-45 w-auto object-contain"
              />
            </Link>

            <p className="text-gray-900 text-sm leading-relaxed max-w-xs">
              {t("footer.brandText")}
            </p>
          </div>

         
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] mb-2 text-gray-900">
              {t("footer.connect")}
            </h4>

            <div className="flex flex-col gap-4 text-sm text-gray-900">
              <a
                href="mailto:attorneys@glalpc.com"
                className="flex items-center gap-3 hover:text-white"
              >
                <Mail size={16} /> attorneys@glalpc.com
              </a>

              <a
                href="tel:+2347042662654"
                className="flex items-center gap-3 hover:text-white"
              >
                <Phone size={16} /> +234 704 266 2654
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>{t("footer.location")}</span>
              </div>
            </div>
          </div>
        </div>

  
        <div className="mt-16 pt-8 border-t border-black flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

          <p className="text-sm text-gray-900">
            © {currentYear} {t("footer.rights")}
          </p>

          

          <div className="flex items-center gap-6 text-gray-900">
            <a
              href="https://www.linkedin.com/company/glaattorneys/"
              target="_blank"
              rel="noopener noreferrer"
              title="linkedin"
              className="hover:text-white transition-colors"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="https://twitter.com/glaattorneys"
              target="_blank"
              rel="noopener noreferrer"
              title="twitter"
              className="hover:text-white transition-colors"
            >
              <FaTwitter size={18} />
            </a>

            <a
              href="https://www.facebook.com/glaattorneys"
              target="_blank"
              rel="noopener noreferrer"
              title="facebook"
              className="hover:text-white transition-colors"
            >
              <FaFacebook size={18} />
            </a>
          </div>

          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-gray-900">
            <Link to="/privacy" className="hover:text-white">
              {t("footer.privacy")}
            </Link>
            <Link to="/terms" className="hover:text-white">
              {t("footer.terms")}
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;