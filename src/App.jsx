import { useState } from "react";
import MainNavbar from "./components/MainNavbar";
import HeroSection from "./pages/HeroSection";
import AboutSection from "./pages/AboutSection";
import AboutModal from "./components/AboutModal";

function App() {
  return (
    <>
      <MainNavbar />
      <HeroSection />
      <AboutSection></AboutSection>
      <AboutModal />
    </>
  );
}

export default App;
