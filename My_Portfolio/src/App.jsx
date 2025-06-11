import "./App.css";
import { useRef } from "react";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Gunjan from "./components/Gunjan/Gunjan";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import sun from "./assets/sun1.png";
import moon from "./assets/moon1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import { Toaster } from "sonner";
const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const profileRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="roboto-mono">
      <div>
        <img
          src={theme === "light" ? sun : moon}
          onClick={toggleTheme}
          alt="Theme Toggle"
          className="
      fixed
      top-15 md:bottom-8 lg:top-6 xl:bottom-12
      right-4 md:right-6 lg:right-4
      w-8 h-8 md:w-10 md:h-10
      cursor-pointer
      transition-transform duration-200
      hover:scale-110
      z-50
    "
        />
      </div>
      <Toaster richColors position="top-center" />
      <Navbar
        refs={{
          Profile: profileRef,
          Projects: projectsRef,
          Skills: skillsRef,
          Contact: contactRef,
        }}
      />

      <div ref={profileRef}>
        <Gunjan />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
      <div>
        <button
          onClick={scrollToTop}
          className={`fixed bottom-20 cursor-pointer right-4 w-10 h-10 ${
            theme === "light" ? "bg-black text-white" : "bg-white text-black"
          } rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg`}
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default App;
