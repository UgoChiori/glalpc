import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage: React.FC = () => {
  return (
    <section className="bg-[#f8f3ed] min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto border border-black/10 p-6 md:p-12 bg-[#f8f3ed]">
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* LEFT */}
          <div className="flex flex-col ">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold leading-none text-black">
                Contact
                <br />
                Info
              </h1>

              <div className="w-10 h-[2px] bg-black mt-5"></div>
            </div>

            {/* CONTACT DETAILS */}
            <div className="space-y-6 mt-10">
              {/* ADDRESS */}
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-yellow-700 mt-1" />

                <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                  5 Atinuke Olabanji Street, Ikeja, Lagos, Nigeria 100001
                </p>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-yellow-700" />

                <a
                  href="mailto:attorneys@glalpc.com"
                  className="text-gray-800 text-sm md:text-base hover:text-yellow-700 transition"
                >
                  attorneys@glalpc.com
                </a>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-yellow-700 mt-1" />

                <div className="flex flex-col text-sm md:text-base">
                  <a
                    href="tel:+2347042662654"
                    className="text-gray-800 hover:text-yellow-700 transition"
                  >
                    +234 704 266 2654
                  </a>

                  <a
                    href="tel:+2347035610109"
                    className="text-gray-800 hover:text-yellow-700 transition"
                  >
                    +234 703 561 0109
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <form className="space-y-6">
              {/* FULL NAME */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="E.g John Doe"
                  className="w-full border-b border-gray-300 bg-transparent px-4 py-3 outline-none focus:border-yellow-700 transition"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="E.g johndoe@example.com"
                  className="w-full border-b border-gray-300 bg-transparent px-4 py-3 outline-none focus:border-yellow-700 transition"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="E.g 09000000000"
                  className="w-full border-b border-gray-300 bg-transparent px-4 py-3 outline-none focus:border-yellow-700 transition"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="E.g Legal Consultation"
                  className="w-full border-b border-gray-300 bg-transparent px-4 py-3 outline-none focus:border-yellow-700 transition"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="E.g I would like legal guidance regarding..."
                  className="w-full border-b border-gray-300 bg-transparent px-4 py-3 outline-none focus:border-yellow-700 transition resize-none"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 hover:bg-white hover:text-black transition cursor-pointer border border-black/10"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* MAP */}
        <div className="mt-14">
          <div className="overflow-hidden border border-black/10 h-[300px] md:h-[400px]">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=5%20Atinuke%20Olabanji%20Street%20Ikeja%20Lagos&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
