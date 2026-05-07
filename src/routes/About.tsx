

import React from 'react';
import ThemeToggle from "../components/ThemeToggle";

const About: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-6 md:px-12 lg:px-24 transition-colors duration-300 min-h-screen">
      <div className=" mx-auto">
        
        {/* Theme Toggle Container */}
        <div className="flex justify-end mb-8">
          <ThemeToggle />
        </div>

        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About Our Firm
          </h1>
          <div className="h-1 w-20 bg-gold-600 mx-auto mb-8"></div>
        </div>

        {/* Hero Image & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-gray-100 mb-4">
              Seasoned Expertise on a Global Stage
            </h2>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-6">
              As a Firm with seasoned Attorneys, we have developed a wealth of 
              experience dealing with complex legal transactions both locally and 
              on the international stage. We have a track record of providing 
              top-notch legal advisory services to clients on various matters 
              including commercial transactions, intellectual property rights, 
              and regulatory compliance.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Decorative border updates for dark mode */}
              <div className="absolute -inset-2 border-2 border-slate-200 dark:border-gray-700 rounded-lg translate-x-4 translate-y-4 -z-10 hidden md:block"></div>
              <img 
                src="/images/about.jpg" 
                alt="Our Legal Professionals" 
                className="rounded-lg shadow-xl w-full object-cover h-64 md:h-96"
              />
            </div>
          </div>
        </div>

        {/* Main Content Body */}
        {/* Added dark:prose-invert if you are using the @tailwindcss/typography plugin */}
        <div className="prose prose-slate dark:prose-invert max-w-none grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div className="space-y-6">
            <p className="text-slate-700 dark:text-gray-300 leading-relaxed">
              Our expertise goes beyond legal advisory services, as we have also managed 
              legal transactions involving multiple stakeholders and parties in diverse 
              jurisdictions. This experience has exposed us to different legal systems, 
              cultures, and practices and has honed our skills in cross-cultural 
              communication and negotiation.
            </p>
            <p className="text-slate-700 dark:text-gray-300 leading-relaxed">
              With our experience in international legal transactions and management, 
              we have provided legal guidance and leadership to businesses and individuals 
              across borders. We are uniquely positioned to navigate the complexities 
              of the global legal environment.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-slate-700 dark:text-gray-300 leading-relaxed">
              Additionally, we have engaged in continuous professional development as we 
              constantly seek to sharpen our knowledge in the legal field. We have attended 
              training programs, seminars, and conferences on international law to keep 
              abreast of changes and developments in the industry.
            </p>
            {/* Styled callout box for dark mode */}
            <p className="font-medium text-slate-900 dark:text-white bg-slate-50 dark:bg-gray-800 p-6 border-l-4 border-slate-800 dark:border-gold-600 italic">
              Overall, our experience in international legal transactions and management 
              makes us a go-to law firm for clients seeking legal expertise and leadership 
              in navigating the complexities of the global legal landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;