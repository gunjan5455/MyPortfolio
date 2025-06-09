import { useRef } from "react";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Gunjan from "./components/Gunjan/Gunjan";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
const App = () => {
  const profileRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="roboto-mono">
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
          className="fixed bottom-20 right-10 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg"
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default App;
