

import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const CONTACT_LINKS = [
  {
    href: "mailto:attorneys@glalpc.com",
    label: "attorneys@glalpc.com",
    icon: Mail,
  },
  {
    href: "tel:+2347042662654",
    label: "+234 704 266 2654",
    icon: Phone,
  },
] as const;

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/company/glaattorneys/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://twitter.com/glaattorneys",
    label: "Twitter",
    icon: FaTwitter,
  },
  {
    href: "https://www.facebook.com/glaattorneys",
    label: "Facebook",
    icon: FaFacebook,
  },
] as const;

const FOOTER_LINKS = [
  {
    to: "/privacy",
    translationKey: "footer.privacy",
  },
  {
    to: "/terms",
    translationKey: "footer.terms",
  },
] as const;

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-300 font-sans text-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-center">
         
          <div className="flex max-w-xs flex-col items-start gap-6">
            <Link
              to="/"
              aria-label="GLA Legal Practitioners home"
              className="inline-flex"
            >
              <img
                src="/images/glalpclogo.png"
                alt="GLA Legal Practitioners"
                className="h-25 w-auto object-contain transition-opacity duration-300 hover:opacity-80 md:h-45"
              />
            </Link>

            <p className="text-sm leading-relaxed">
              {t("footer.brandText")}
            </p>
          </div>

          
          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]">
              {t("footer.connect")}
            </h2>

            <address className="not-italic">
              <div className="flex flex-col gap-4 text-sm">
                {CONTACT_LINKS.map(({ href, label, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    className="flex items-center gap-3 transition-colors duration-300 hover:text-white"
                  >
                    <Icon
                      size={16}
                      aria-hidden="true"
                      className="shrink-0"
                    />
                    <span>{label}</span>
                  </a>
                ))}

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    aria-hidden="true"
                    className="mt-1 shrink-0"
                  />
                  <span>{t("footer.location")}</span>
                </div>
              </div>
            </address>
          </div>
        </div>

       
        <div className="mt-16 flex flex-col items-start gap-6 border-t border-black pt-8 md:flex-row md:items-center md:justify-between">
   
          <p className="text-sm">
            © {currentYear} {t("footer.rights")}
          </p>


          <nav aria-label="Social media">
            <ul className="flex items-center gap-6">
              {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="block transition-colors duration-300 hover:text-white"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

       
          <nav aria-label="Legal">
            <ul className="flex gap-6 text-[10px] uppercase tracking-widest">
              {FOOTER_LINKS.map(({ to, translationKey }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="transition-colors duration-300 hover:text-white"
                  >
                    {t(translationKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
