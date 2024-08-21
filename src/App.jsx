import { useState } from "react";
import MainNavbar from "./components/MainNavbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import VMSection from "./sections/VMSection";
import SynergySection from "./sections/SynergySection";
import SupportingSection from "./sections/SupportingSection";
import Footer from "./sections/FooterSection";
import MusicPlayer from "./components/MusicPlayer";

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
      <Footer isDarkTheme={isDarkTheme} />
    </div>
  );
}

export default App;
