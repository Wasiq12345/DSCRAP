import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

export default function App() {
  return (
    <>
      <section className="font-fiexen">
        <ToastContainer />
        <ChakraProvider>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about-us" element={<About />} />
              <Route exact path="/services" element={<Services />} />
              <Route exact path="/pricing" element={<Pricing />} />
              <Route exact path="/faq" element={<FAQ />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        </ChakraProvider>
      </section>
    </>
  );
}
