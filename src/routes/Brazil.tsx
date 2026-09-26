import React from "react";
import { useTranslation } from "react-i18next";

const Brazil = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
    
      <section className="border-b border-gray-800 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                {t("brazil.eyebrow")}
              </p>

              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {t("brazil.title")}
                <span className="mt-2 block text-blue-400">
                  {t("brazil.firmName")}
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
                {t("brazil.heroDesc")}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-gray-300">
                  {t("brazil.location")}
                </span>

                <span className="rounded-full border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-gray-300">
                  {t("brazil.founded")}
                </span>

                <span className="rounded-full border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-gray-300">
                  {t("brazil.internationalPractice")}
                </span>
              </div>
            </div>

            
      <div className="relative w-full overflow-hidden rounded-2xl border border-gray-700 bg-gray-800 shadow-2xl">
 <div className="relative w-full overflow-hidden rounded-2xl border border-gray-700 bg-gray-800 shadow-2xl">
  <img
    src="/images/brazil.jpeg"
    alt={t("brazil.firmName")}
    className="block h-auto w-full object-cover"
  />
</div>
</div>
          </div>
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="space-y-16">

         
          <ProfileSection
            number="01"
            title={t("brazil.section1.title")}
            text={
              <>
                {t("brazil.section1.body")}
                <br />
                <br />
                {t("brazil.section1.body2")}
              </>
            }
          />

       
          <ProfileSection
            number="02"
            title={t("brazil.section2.title")}
            text={
              <>
                {t("brazil.section2.body")}
                <br />
                <br />
                {t("brazil.section2.body2")}
                <br />
                <br />
                {t("brazil.section2.body3")}
              </>
            }
          />

    
          <ProfileSection
            number="03"
            title={t("brazil.section3.title")}
            subtitle={t("brazil.section3.subtitle")}
            text={t("brazil.section3.intro")}
          >
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <InfoCard
                title={t("brazil.section3.publicSector.title")}
                text={t("brazil.section3.publicSector.body")}
              />

              <InfoCard
                title={t("brazil.section3.academic.title")}
                text={t("brazil.section3.academic.body")}
              />

              <InfoCard
                title={t("brazil.section3.professional.title")}
                text={t("brazil.section3.professional.body")}
              />
            </div>
          </ProfileSection>

       
          <ProfileSection
            number="04"
            title={t("brazil.section4.title")}
            subtitle={t("brazil.section4.subtitle")}
            text={
              <>
                {t("brazil.section4.body")}
                <br />
                <br />
                {t("brazil.section4.body2")}
              </>
            }
          />

  
          <ProfileSection
            number="05"
            title={t("brazil.section5.title")}
            text={t("brazil.section5.body")}
          >
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <InfoCard
                title={t("brazil.section5.visa.title")}
                text={t("brazil.section5.visa.body")}
              />

              <InfoCard
                title={t("brazil.section5.civilRights.title")}
                text={t("brazil.section5.civilRights.body")}
              />

              <InfoCard
                title={t("brazil.section5.privateInternational.title")}
                text={t("brazil.section5.privateInternational.body")}
              />
            </div>
          </ProfileSection>

  
          <ProfileSection
            number="06"
            title={t("brazil.section6.title")}
            subtitle={t("brazil.section6.subtitle")}
            text={
              <>
                {t("brazil.section6.body")}
                <br />
                <br />
                {t("brazil.section6.body2")}
              </>
            }
          >
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <InfoCard
                title={t("brazil.section6.bureaucracy.title")}
                text={t("brazil.section6.bureaucracy.body")}
              />

              <InfoCard
                title={t("brazil.section6.customs.title")}
                text={t("brazil.section6.customs.body")}
              />

              <InfoCard
                title={t("brazil.section6.maritime.title")}
                text={t("brazil.section6.maritime.body")}
              />
            </div>
          </ProfileSection>

     
          <ProfileSection
            number="07"
            title={t("brazil.section7.title")}
            text={
              <>
                {t("brazil.section7.body")}
                <br />
                <br />
                {t("brazil.section7.body2")}
                <br />
                <br />
                {t("brazil.section7.body3")}
                <br />
                <br />
                {t("brazil.section7.body4")}
              </>
            }
          />

   
          <ProfileSection
            number="08"
            title={t("brazil.section8.title")}
            text={
              <>
                {t("brazil.section8.body")}
                <br />
                <br />
                {t("brazil.section8.body2")}
              </>
            }
          />

        </div>
      </section>
    </main>
  );
};

interface ProfileSectionProps {
  number: string;
  title: string;
  subtitle?: string;
  text: React.ReactNode;
  children?: React.ReactNode;
}

const ProfileSection = ({
  number,
  title,
  subtitle,
  text,
  children,
}: ProfileSectionProps) => {
  return (
    <article className="border-t border-gray-800 pt-10">
      <div className="grid gap-8 lg:grid-cols-[120px_1fr] lg:gap-12">
        <div>
          <span className="text-4xl font-bold text-blue-400/80">
            {number}
          </span>
        </div>

        <div>
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-2 text-base font-medium text-blue-400">
              {subtitle}
            </p>
          )}

          <div className="mt-6 max-w-4xl text-base leading-8 text-gray-300">
            {text}
          </div>

          {children}
        </div>
      </div>
    </article>
  );
};

interface InfoCardProps {
  title: string;
  text: string;
}

const InfoCard = ({ title, text }: InfoCardProps) => {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/70 p-6 transition-colors duration-300 hover:border-gray-700 hover:bg-gray-900">
      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-gray-400">
        {text}
      </p>
    </div>
  );
};

export default Brazil;
