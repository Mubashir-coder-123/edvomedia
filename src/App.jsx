import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // ya jahan bhi rakha ho
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ContactUs from "./pages/Contactus";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}