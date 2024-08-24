import { useState } from "react";
import MainNavbar from "./components/MainNavbar";
import MusicPlayer from "./components/MusicPlayer";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import VMSection from "./sections/VMSection";
import SynergySection from "./sections/SynergySection";
import SupportingSection from "./sections/SupportingSection";
import Footer from "./sections/FooterSection";
import QNASection from "./sections/QNASection";
import GallerySection from "./sections/GallerySection";
import TestimoniSection from "./sections/TestimoniSection";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const handleIsDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div
      className={`App ${
        isDarkTheme ? "mh-bg-dark text-light" : "mh-bg-light text-dark"
      }`}
    >
      <MainNavbar
        isDarkTheme={isDarkTheme}
        handleIsDarkTheme={handleIsDarkTheme}
      />
      <MusicPlayer isDarkTheme={isDarkTheme} />
      <HeroSection />
      <AboutSection isDarkTheme={isDarkTheme} />
      <VMSection />
      <SynergySection />
      <SupportingSection />
      <QNASection isDarkTheme={isDarkTheme} />
      <TestimoniSection />
      <GallerySection isDarkTheme={isDarkTheme} />
      <Footer isDarkTheme={isDarkTheme} />
    </div>
  );
}

export default App;
