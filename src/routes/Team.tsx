import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import ThemeToggle from "../components/ThemeToggle";
import teamData from "../data/team.json";
import { useTranslation } from "react-i18next";

const Team: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedMember, setSelectedMember] = useState<any>(null);

  // ESC CLOSE
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMember(null);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // LOCK BACKGROUND SCROLL
  useEffect(() => {
    document.body.style.overflow = selectedMember ? "hidden" : "auto";
    document.documentElement.style.overflow = selectedMember ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [selectedMember]);

  // MODAL ANIMATION
  useEffect(() => {
    if (!selectedMember) return;

    gsap.fromTo(
      ".modal-content",
      { opacity: 0, scale: 0.95, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: "power2.out" }
    );
  }, [selectedMember]);

  return (
    <div
      ref={componentRef}
      className="py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-900 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-end mb-12">
          <ThemeToggle />
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold mb-10 text-black dark:text-white">
     {t("team.title")}
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamData.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="cursor-pointer bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[320px] object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg font-bold text-black dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 uppercase">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
    {selectedMember && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6"
    onClick={() => setSelectedMember(null)}
    onWheel={(e) => e.stopPropagation()}
    onTouchMove={(e) => e.stopPropagation()}
  >
    <div
      className="modal-content relative w-full max-w-4xl h-[90vh] md:h-[85vh] bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row"
      onClick={(e) => e.stopPropagation()}
    >
      {/* CLOSE BUTTON */}
      <button
        onClick={() => setSelectedMember(null)}
        className="absolute top-3 right-4 text-3xl text-gray-500 hover:text-black dark:hover:text-white z-20 bg-white/80 dark:bg-gray-900/80 rounded-full w-10 h-10 flex items-center justify-center shadow-sm md:shadow-none"
      >
        ×
      </button>

      {/* IMAGE: Stacks on mobile, takes half width on desktop */}
      <div className="w-full md:w-1/2 h-64 md:h-full flex-shrink-0">
        <img
          src={selectedMember.image}
          className="w-full h-full object-cover"
          alt={selectedMember.name}
        />
      </div>

      {/* SCROLLABLE CONTENT: Scrolls independently on desktop, flows naturally on mobile */}
      <div className="w-full md:w-1/2 h-auto md:h-full overflow-y-visible md:overflow-y-auto p-6 space-y-4 scroll-smooth">
        <div>
          <h2 className="text-2xl font-semibold text-black dark:text-white">
            {selectedMember.name}
          </h2>
          <p className="text-yellow-700 uppercase text-sm font-medium mt-1">
            {selectedMember.role}
          </p>
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
          {selectedMember.bio}
        </p>

        {/* QUALIFICATIONS */}
        {selectedMember.qualifications?.length > 0 && (
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2 mt-4">
              Qualifications
            </h3>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700 dark:text-gray-300">
              {selectedMember.qualifications.map((q: string, i: number) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>
        )}

        {/* EXPERIENCE */}
        {selectedMember.experience?.length > 0 && (
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2 mt-4">
              Experience
            </h3>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700 dark:text-gray-300">
              {selectedMember.experience.map((e: string, i: number) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
        )}

        {/* PUBLICATIONS */}
        {selectedMember.publications?.length > 0 && (
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2 mt-4">
              Publications
            </h3>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700 dark:text-gray-300">
              {selectedMember.publications.map((p: string, i: number) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        )}

        {/* CONTACT */}
        {selectedMember.contact && (
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2 mt-4">
              Contact
            </h3>
            <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300 break-words">
              {selectedMember.contact.email && (
                <li>
                  <a href={`mailto:${selectedMember.contact.email}`} className="hover:underline text-blue-600 dark:text-blue-400">
                    {selectedMember.contact.email}
                  </a>
                </li>
              )}
              {selectedMember.contact.phone && (
                <li>
                  <a href={`tel:${selectedMember.contact.phone}`} className="hover:underline">
                    {selectedMember.contact.phone}
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default Team;