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
          className="fixed bottom-180  md:bottom-214 cursor-pointer right-8 w-10 h-10 transition-transform duration-200 hover:scale-120"
        />
      </div>
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
          className={`fixed bottom-20 cursor-pointer right-10 w-12 h-12 ${
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
