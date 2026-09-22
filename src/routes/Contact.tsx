import React, { useState } from "react";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const ContactPage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 1. Store the form reference
    const form = event.currentTarget;

    const loadingToast = toast.loading("Sending message...");
    setLoading(true);

    // 2. Use the stored form reference
    const formData = new FormData(form);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        console.log(data, "Success");
        toast.success("Message sent successfully ✔️", {
          id: loadingToast,
        });

        // 3. Reset the stored form reference safely
        form.reset();
      } else {
        console.error(data, "Error");
        toast.error(data.message || "Something went wrong ❌", {
          id: loadingToast,
        });
      }
    } catch (error) {
      console.error(error, "Error details:");

      toast.error("An error occurred. Try again ❌", {
        id: loadingToast,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f8f3ed] min-h-screen py-12 px-6 ">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-7xl mx-auto border border-black/10 p-6 md:p-12 bg-[#f8f3ed] bg-gray-800 text-gray-800">
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 ">
          {/* LEFT */}
          <div className="flex flex-col ">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold leading-none text-white">
                Contact
                <br />
                Info
              </h1>

              <div className="w-10 h-[2px] bg-white mt-5"></div>
            </div>

            {/* CONTACT DETAILS */}
            {/* LEFT */}
            <div className="flex flex-col">
              {/* CONTACT DETAILS */}
              <div className="space-y-8 mt-10">
                {/* NIGERIA OFFICE */}
                <div>
                  <h3 className="text-sm uppercase tracking-[0.2em] font-semibold mb-4 text-white">
                    Nigeria Location
                  </h3>

                  {/* ADDRESS */}
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin size={18} className="text-white mt-1" />

                    <p className="text-white text-sm md:text-base leading-relaxed">
                      5 Atinuke Olabanji Street, Ikeja, Lagos, Nigeria 100001
                    </p>
                  </div>

                  {/* EMAIL */}
                  <div className="flex items-center gap-3 mb-4">
                    <Mail size={18} className="text-white" />

                    <a
                      href="mailto:attorneys@glalpc.com"
                      className="text-white text-sm md:text-base hover:text-yellow-700 transition"
                    >
                      attorneys@glalpc.com
                    </a>
                  </div>

                  {/* PHONE */}
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-white mt-1" />

                    <div className="flex flex-col text-sm md:text-base">
                      <a
                        href="tel:+2347042662654"
                        className="text-white hover:text-yellow-700 transition"
                      >
                        +234 704 266 2654
                      </a>

                      <a
                        href="tel:+2347035610109"
                        className="text-gray-100 hover:text-yellow-700 transition"
                      >
                        +234 703 561 0109
                      </a>
                    </div>
                  </div>
                </div>

                {/* BRAZIL OFFICE */}
                <div>
                  <h3 className="text-sm uppercase tracking-[0.2em] text-white mb-4">
                    Brazil Location
                  </h3>

                  {/* ADDRESS */}
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin size={18} className="text-white mt-1" />

                    <p className="text-white text-sm md:text-base leading-relaxed">
                      Advocacia FJ, Praça Dr. João Mendes, 42, 4th floor, Cj.
                      44, Downtown of São Paulo, Brazil
                    </p>
                  </div>

                  {/* PHONE */}
                  <div className="flex items-start gap-3">
                    <MessageCircle size={18} className="text-white mt-1" />

                    <a
                      href="https://wa.me/5511986654733"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm md:text-base hover:text-yellow-700 transition"
                    >
                      +55 11 98665-4733 (WhatsApp Only)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* FULL NAME */}
              <div>
                <label className="block text-sm text-white mb-2">
                  Full Name
                </label>

                <input
                  name="name"
                  type="text"
                  placeholder="E.g John Doe"
                  className="w-full border-b border-gray-300 bg-transparent px-4 py-3 outline-none focus:border-yellow-700 transition placeholder-gray-400"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm text-white mb-2">
                  Email Address
                </label>

                <input
                  name="email"
                  type="email"
                  placeholder="E.g johndoe@example.com"
                  className="w-full border-b border-gray-300 bg-transparent px-4 py-3 outline-none focus:border-yellow-700 transition placeholder-gray-400"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="block text-sm text-white mb-2">
                  Phone Number
                </label>

                <input
                  name="phone"
                  type="text"
                  placeholder="E.g 09000000000"
                  className="w-full border-b border-gray-300 bg-transparent px-4 py-3 outline-none focus:border-yellow-700 transition placeholder-gray-400"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label className="block text-sm text-white mb-2">Subject</label>

                <input
                  name="subject"
                  type="text"
                  placeholder="E.g Legal Consultation"
                  className="w-full border-b border-gray-300 bg-transparent px-4 py-3 outline-none focus:border-yellow-700 transition placeholder-gray-400"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm text-white mb-2">Message</label>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="E.g I would like legal guidance regarding..."
                  className="w-full border-b border-gray-300 bg-transparent px-4 py-3 outline-none focus:border-yellow-700 transition resize-none placeholder-gray-400"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="bg-gray-200 text-black px-8 py-3 hover:bg-black hover:text-white transition cursor-pointer border border-black/10"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* MAPS */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* NIGERIA MAP */}
        <div>
          <h3 className="text-sm uppercase tracking-[0.2em] text-gray-700 mb-3">
            Lagos Office
          </h3>

          <div className="overflow-hidden border border-black/10 h-[300px]">
            <iframe
              title="Lagos Office"
              src="https://www.google.com/maps?q=5%20Atinuke%20Olabanji%20Street%20Ikeja%20Lagos&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* BRAZIL MAP */}
        <div>
          <h3 className="text-sm uppercase tracking-[0.2em] text-gray-700 mb-3">
            São Paulo Office
          </h3>

          <div className="overflow-hidden border border-black/10 h-[300px]">
            <iframe
              title="Brazil Office"
              src="https://www.google.com/maps?q=Praça%20Dr.%20João%20Mendes%2042%20São%20Paulo%20Brazil&output=embed"
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
