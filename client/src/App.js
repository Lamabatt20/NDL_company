import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Mechanical from "./Pages/Mechanical";
import Embedded from "./Pages/Embedded";
import Careers from "./Pages/Careers";
import Contact from "./Pages/Contact";
import ProjectDetails from "./Components/ProjectDetails";
import GetQuote from "./Pages/GetQuote";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mechanical" element={<Mechanical />} />
        <Route path="/embedded" element={<Embedded />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/get-a-quote" element={<GetQuote />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
