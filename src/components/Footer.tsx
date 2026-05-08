import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/90 text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="flex flex-col items-start gap-6">
            <Link to="/">
              <img
                src="/images/glalpclogo.png"
                alt="glalogo"
                className="h-16 md:h-25 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Providing world-class strategic legal advisory for complex
              cross-border transactions in an evolving global landscape.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] mb-2">
              Practice Areas
            </h4>
            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <Link to="/about" className="hover:text-white transition-colors">
                Corporate Law
              </Link>
              <Link to="/about" className="hover:text-white transition-colors">
                Cross-Border Transactions
              </Link>
              <Link to="/about" className="hover:text-white transition-colors">
                Intellectual Property
              </Link>
              <Link to="/about" className="hover:text-white transition-colors">
                Regulatory Compliance
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] mb-2">
              Connect
            </h4>
            <div className="flex flex-col gap-4 text-sm text-gray-300">
              <a
                href="mailto:info@glalpc.com"
                className="flex items-center gap-3 hover:text-white"
              >
                <Mail size={16} /> attorneys@glalpc.com
              </a>
              <a
                href="tel:+234000000000"
                className="flex items-center gap-3 hover:text-white"
              >
                <Phone size={16} /> +234 704 266 2654
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Lagos, Nigeria </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-sm text-gray-400">
            © {currentYear} GLA Legal Practitioners. All Rights Reserved.
          </p>

          <p className="text-xs text-gray-500 mt-2 tracking-wide ">
            Designed & Developed by{" "}
            <a
              href="https://ugo-chiori.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
              className="underline hover:text-white transition-colors"
            >
              {" "}
              Ugo Chiori{" "}
            </a>
          </p>

          <div className="flex items-center gap-6 text-gray-400">
            <a href="https://www.linkedin.com/company/glaattorneys/" 
            rel="noopener noreferrer"
              target="_blank"
              title="linkedin"
            className="hover:text-white transition-colors">
              <FaLinkedin size={18} />
            </a>
            <a href="https://twitter.com/glaattorneys" rel="noopener noreferrer"
              target="_blank"
              title="twitter"
              className="hover:text-white transition-colors">
              <FaTwitter size={18} />
            </a>
            <a href="https://www.facebook.com/glaattorneys" rel="noopener noreferrer"
              target="_blank"
              title="facebook"
              className="hover:text-white transition-colors">
              <FaFacebook size={18} />
            </a>
          </div>

          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-gray-400">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
