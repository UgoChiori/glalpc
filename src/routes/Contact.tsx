import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const CONTACT_OFFICES = [
  {
    name: "Nigeria Location",
    address: "5 Atinuke Olabanji Street, Ikeja, Lagos, Nigeria 100001",
    email: "attorneys@glalpc.com",
    phones: [
      {
        href: "tel:+2347042662654",
        label: "+234 704 266 2654",
      },
      {
        href: "tel:+2347035610109",
        label: "+234 703 561 0109",
      },
    ],
    mapTitle: "Lagos Office",
    mapUrl:
      "https://www.google.com/maps?q=5%20Atinuke%20Olabanji%20Street%20Ikeja%20Lagos&output=embed",
  },
  {
    name: "Brazil Location",
    address:
      "Advocacia FJ, Praça Dr. João Mendes, 42, 4th floor, Cj. 44, Downtown of São Paulo, Brazil",
    whatsapp: {
      href: "https://wa.me/5511986654733",
      label: "+55 11 98665-4733 (WhatsApp Only)",
    },
    mapTitle: "São Paulo Office",
    mapUrl:
      "https://www.google.com/maps?q=Praça%20Dr.%20João%20Mendes%2042%20São%20Paulo%20Brazil&output=embed",
  },
] as const;

const INPUT_CLASSES =
  "w-full border-b border-gray-300 bg-transparent px-4 py-3 text-white outline-none transition placeholder:text-gray-400 focus:border-yellow-700";

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (!accessKey) {
      toast.error("The contact form is not configured correctly.");
      return;
    }

    formData.append("access_key", accessKey);

    setIsSubmitting(true);
    const loadingToast = toast.loading("Sending message...");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error(
          `Request failed with status ${response.status}`,
        );
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(
          data.message || "Unable to send your message.",
        );
      }

      form.reset();

      toast.success("Message sent successfully.", {
        id: loadingToast,
      });
    } catch (error) {
      console.error("Contact form submission failed:", error);

      toast.error(
        error instanceof Error
          ? error.message
          : "An error occurred. Please try again.",
        {
          id: loadingToast,
        },
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#f8f3ed] px-6 py-12">
      <Toaster position="top-right" />

      <div className="mx-auto max-w-7xl border border-black/10 bg-gray-800 p-6 text-gray-800 md:p-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
        
          <div>
            <div>
              <h1 className="text-4xl font-semibold leading-none text-white md:text-5xl">
                Contact
                <br />
                Info
              </h1>

              <div className="mt-5 h-[2px] w-10 bg-white" />
            </div>

            <div className="mt-10 space-y-10">
              {CONTACT_OFFICES.map((office) => (
                <section key={office.name}>
                  <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                    {office.name}
                  </h2>

                  
                  <div className="mb-4 flex items-start gap-3">
                    <MapPin
                      size={18}
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-white"
                    />

                    <p className="text-sm leading-relaxed text-white md:text-base">
                      {office.address}
                    </p>
                  </div>

                 
                  {"email" in office && (
                    <div className="mb-4 flex items-center gap-3">
                      <Mail
                        size={18}
                        aria-hidden="true"
                        className="shrink-0 text-white"
                      />

                      <a
                        href={`mailto:${office.email}`}
                        className="text-sm text-white transition-colors hover:text-yellow-700 md:text-base"
                      >
                        {office.email}
                      </a>
                    </div>
                  )}

                
                  {"phones" in office && (
                    <div className="flex items-start gap-3">
                      <Phone
                        size={18}
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-white"
                      />

                      <div className="flex flex-col gap-1 text-sm md:text-base">
                        {office.phones.map((phone) => (
                          <a
                            key={phone.href}
                            href={phone.href}
                            className="text-white transition-colors hover:text-yellow-700"
                          >
                            {phone.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

             
                  {"whatsapp" in office && (
                    <div className="flex items-start gap-3">
                      <MessageCircle
                        size={18}
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-white"
                      />

                      <a
                        href={office.whatsapp.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white transition-colors hover:text-yellow-700 md:text-base"
                      >
                        {office.whatsapp.label}
                      </a>
                    </div>
                  )}
                </section>
              ))}
            </div>
          </div>

      
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-white"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="E.g. John Doe"
                  autoComplete="name"
                  required
                  className={INPUT_CLASSES}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-white"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="E.g. johndoe@example.com"
                  autoComplete="email"
                  required
                  className={INPUT_CLASSES}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm text-white"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="E.g. 09000000000"
                  autoComplete="tel"
                  className={INPUT_CLASSES}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm text-white"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="E.g. Legal Consultation"
                  required
                  className={INPUT_CLASSES}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-white"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="E.g. I would like legal guidance regarding..."
                  required
                  className={`${INPUT_CLASSES} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="border border-black/10 bg-gray-200 px-8 py-3 text-black transition-colors hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

    
      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
        {CONTACT_OFFICES.map((office) => (
          <div key={office.mapTitle}>
            <h2 className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-700">
              {office.mapTitle}
            </h2>

            <div className="h-[300px] overflow-hidden border border-black/10">
              <iframe
                title={office.mapTitle}
                src={office.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactPage;
