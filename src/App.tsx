
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import About from "./routes/About";
import Team from "./routes/Team";
import Updates from "./routes/Updates";
import Contact from "./routes/Contact";
import NotFound from "./routes/NotFound";
import Footer from "./components/Footer";
import {useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import FeaturedCorporateTraining from "./news/FeaturedCorporateTraining";
import LegalTips from "./news/LegalTips";
import EntrepreneurLegalTips from "./news/EntrepreneurLegalTips";
import CyberSecurityLaw from "./news/CyberSecurityLaw";


gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0); 

function App() {
  return (
    <>
      <Navigation />
    
      <div className="bg-[#f0f0f0] min-h-screen w-full overflow-x-hidden flex flex-col items-stretch justify-start">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news/corporate-training" element={<FeaturedCorporateTraining />} />
          <Route path="/news/legal-tips" element={<LegalTips />} />
          <Route path="/news/legal-entrepreneur" element={<EntrepreneurLegalTips />} />
          <Route path="/news/cyber-security-law" element={<CyberSecurityLaw />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
