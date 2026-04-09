import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Plans from "./pages/contact/Plans";
import NotFound from "./pages/notFound/NotFound";
import Footer from "./components/Footer";
import Portfolio from "./pages/portfolio/Portfolio";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Plans />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
