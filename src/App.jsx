// import { useState } from "react";
import MainNavbar from "./components/MainNavbar";
import HeroSection from "./pages/HeroSection";
import AboutSection from "./pages/AboutSection";
import VMSection from "./pages/VMSection";
import SynergySection from "./pages/SynergySection";
import FooterSection from "./pages/FooterSection";

export default function App() {
  return (
    <>
      <MainNavbar />
      <HeroSection />
      <AboutSection />
      <VMSection />
      <SynergySection />
      <FooterSection />
    </>
  );
}
