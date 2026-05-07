

// import React, { useLayoutEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ThemeToggle from '../components/Themetoggle';
// import teamData from '../data/team.json'; 

// gsap.registerPlugin(ScrollTrigger);

// const Team: React.FC = () => {
//   const componentRef = useRef<HTMLDivElement>(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".team-card", {
//         opacity: 0,
//         y: 60,
//         stagger: 0.1,
//         duration: 0.8,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".team-grid",
//           start: "top 85%",
//         }
//       });
//     }, componentRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={componentRef} className="py-20 px-6 md:px-12 lg:px-24">
//       <div className="team-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
//        <div className="flex justify-end mb-8 md:col-span-3 lg:col-span-4">
//           <ThemeToggle />
//         </div>
//         {teamData.map((member) => (

//           <div key={member.id} className="team-card bg-white shadow-md rounded-lg overflow-hidden">
//   <div className="aspect-[3/4] w-full overflow-hidden">
//     <img 
//       src={member.image} 
//       alt={member.name} 
//       className="w-full h-full object-cover object-top" 
//     />
//   </div>
//   <div className="p-4">
//     <h3 className="font-bold text-xl text-black">{member.name}</h3>
//     <p className="text-gray-400 text-sm uppercase tracking-wider">{member.role}</p>
//   </div>
// </div>
       
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Team;


import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThemeToggle from '../components/ThemeToggle';
import teamData from '../data/team.json'; 

gsap.registerPlugin(ScrollTrigger);

const Team: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".team-card", {
        opacity: 0,
        y: 60,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 85%",
        }
      });
    }, componentRef);
    return () => ctx.revert();
  }, []);

  return (
    
    <div 
      ref={componentRef} 
      className="py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        {/* 2. Moved Toggle out of the grid to prevent it from jumping on stagger */}
        <div className="flex justify-end mb-12">
          <ThemeToggle />
        </div>
<h1 className="text-4xl md:text-5xl font-semibold leading-none text-black dark:text-white mb-6">
      Meet Our Team
        </h1>
        <div className="team-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamData.map((member) => (
            /* 3. Updated card background and text colors */
            <div 
              key={member.id} 
              className="team-card bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden border border-transparent dark:border-gray-700 transition-colors duration-300"
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top transition-opacity duration-500" 
                />
              </div>
              
              <div className="p-4">
                {/* Changed text-black to text-slate-900 and added dark:text-white */}
                <h3 className="font-bold text-xl text-slate-900 dark:text-white">
                  {member.name}
                </h3>
                {/* text-gray-400 stays readable in both modes, but dark:text-gray-500 adds depth */}
                <p className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;