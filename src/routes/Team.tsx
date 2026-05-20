import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import ThemeToggle from "../components/ThemeToggle";
import teamData from "../data/team.json";

const Team: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
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
          Meet Our Team
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setSelectedMember(null)}

          // 🔥 FIX: allow proper wheel + touch scroll behavior
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          <div
            className="modal-content relative w-full max-w-4xl h-[85vh] bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden flex"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-3 right-4 text-3xl text-gray-500 hover:text-black dark:hover:text-white z-10"
            >
              ×
            </button>

            {/* IMAGE */}
            <div className="w-1/2 h-full">
              <img
                src={selectedMember.image}
                className="w-full h-full object-cover"
                alt={selectedMember.name}
              />
            </div>

            {/* SCROLLABLE CONTENT */}
            <div className="w-1/2 h-full overflow-y-auto p-6 space-y-4 scroll-smooth">

              <h2 className="text-2xl font-semibold text-black dark:text-white">
                {selectedMember.name}
              </h2>

              <p className="text-yellow-700 uppercase text-sm">
                {selectedMember.role}
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                {selectedMember.bio}
              </p>

              {/* QUALIFICATIONS */}
              <div>
                <h3 className="text-xs uppercase text-gray-500 mb-2 mt-4">
                  Qualifications
                </h3>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  {selectedMember.qualifications?.map((q: string, i: number) => (
                    <li key={i}>{q}</li>
                  ))}
                </ul>
              </div>

              {/* EXPERIENCE */}
              <div>
                <h3 className="text-xs uppercase text-gray-500 mb-2 mt-4">
                  Experience
                </h3>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  {selectedMember.experience?.map((e: string, i: number) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
              </div>

              {/* PUBLICATIONS */}
              <div>
                <h3 className="text-xs uppercase text-gray-500 mb-2 mt-4">
                  Publications
                </h3>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  {selectedMember.publications?.map((p: string, i: number) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>

              {/* CONTACT */}
              <div>
                <h3 className="text-xs uppercase text-gray-500 mb-2 mt-4">
                  Contact
                </h3>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>{selectedMember.contact?.email}</li>
                  <li>{selectedMember.contact?.phone}</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;