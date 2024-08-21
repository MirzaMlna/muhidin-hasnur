import { useState } from "react";
import MainNavbar from "./components/MainNavbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import VMSection from "./sections/VMSection";
import SynergySection from "./sections/SynergySection";
import Footer from "./sections/FooterSection";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
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
      <HeroSection />
      <AboutSection isDarkTheme={isDarkTheme} />
      <VMSection />
      <SynergySection />
      <Footer isDarkTheme={isDarkTheme} />
    </div>
  );
}

export default App;
