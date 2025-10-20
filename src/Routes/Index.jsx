import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import { ServicesPage } from "../Pages/Service/Service";
import { Marketing } from "../Components/Marketing";
import { SeoService } from "../Components/SeoService";
import { WebDesign } from "../Components/WebDesign";
import { Performance } from "../Components/Performance";
import BrandManagement from "../Components/BrandMangement";
import ContactPage from "../Components/Contact";

const Index = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/service" element={<ServicesPage />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/seo" element={<SeoService />} />
          <Route path="/webdesign-devlopement" element={<WebDesign />} />
          <Route path="/performance-marketing" element={<Performance />} />
          <Route path="/brand-management" element={<BrandManagement />} />
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Index;
