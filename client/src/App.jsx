import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Banner from "./components/banner";
import LenisScroll from "./components/lenis-scroll";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// صفحات
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Templates from "./pages/Templates";
import NotFound from "./pages/NotFound";
import Partners from "./pages/Partners";

export default function App() {
  return (
    <Router>
      <LenisScroll />
      <Banner />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/terms-and-condition" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>

      <Footer />
    </Router>
  );
}