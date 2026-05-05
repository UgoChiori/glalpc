// import { Routes, Route } from "react-router-dom";
// import Navigation from "./components/Navigation";
// import Home from "./routes/Home";
// import About from "./routes/About";
// import Team from "./routes/Team";
// import Updates from "./routes/Updates";
// import Contact from "./routes/Contact";
// import NotFound from "./routes/NotFound";

// function App() {
//   return (
//     <>
//       <Navigation />
//       <div className="bg-[#f0f0f0] min-h-screen flex flex-col items-center justify-center">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/team" element={<Team />} />
//           <Route path="/updates" element={<Updates />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import About from "./routes/About";
import Team from "./routes/Team";
import Updates from "./routes/Updates";
import Contact from "./routes/Contact";
import NotFound from "./routes/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      {/* 
          Added w-full to ensure it spans the screen 
          Added overflow-x-hidden to prevent the horizontal scroll seen in your video
      */}
      <div className="bg-[#f0f0f0] min-h-screen w-full overflow-x-hidden flex flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;