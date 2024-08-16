// import { useState } from "react";
import MainNavbar from "./components/MainNavbar";
import HeroSection from "./pages/HeroSection";
import AboutSection from "./pages/AboutSection";
// import AboutModal from "./components/AboutModal";

export default function App() {
  return (
    <>
      <MainNavbar />
      <HeroSection />
      <AboutSection />
      {/* <AboutModal /> */}
    </>
  );
}
