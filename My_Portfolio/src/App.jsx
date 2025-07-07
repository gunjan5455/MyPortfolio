import "./App.css";
import { useEffect, useRef, useState, useContext } from "react";
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
import { ThemeContext } from "./Context/ThemeContext";
import { toast, Toaster } from "sonner";
import axios from "axios";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const profileRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const url = "https://gunjan-dbrg.onrender.com";

  useEffect(() => {
    axios
      .get(`${url}/ping`)
      .then((res) => console.log(res.data.message))
      .catch((err) => {
        toast.error("Server ping failed:");
        console.log("Server ping failed:", err);
      });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleIds = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target.id);

        // Hide button if Navbar or Gunjan is visible
        if (visibleIds.includes("Navbar") || visibleIds.includes("Gunjan")) {
          setShowScrollButton(false);
        } else {
          setShowScrollButton(true);
        }
      },
      { threshold: 0.6 }
    );

    const targets = document.querySelectorAll("section[data-section]");
    targets.forEach((section) => observer.observe(section));

    return () => targets.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="roboto-mono">
      <img
        src={theme === "light" ? sun : moon}
        onClick={toggleTheme}
        alt="Theme Toggle"
        className={`
          fixed top-15 md:bottom-8 lg:top-6 xl:bottom-12
          right-4 md:right-6 lg:right-4
          w-8 h-8 md:w-10 md:h-10
          cursor-pointer transition-transform duration-200
          hover:scale-110 z-50
        `}
      />

      <Toaster richColors position="top-center" />

      <section id="Navbar" data-section>
        <Navbar
          refs={{
            Profile: profileRef,
            Projects: projectsRef,
            Skills: skillsRef,
            Contact: contactRef,
          }}
        />
      </section>

      <section id="Gunjan" ref={profileRef} data-section>
        <Gunjan />
      </section>

      <section id="Projects" ref={projectsRef} data-section>
        <Projects />
      </section>

      <section id="Skills" ref={skillsRef} data-section>
        <Skills />
      </section>

      <section id="Contact" ref={contactRef} data-section>
        <Contact />
      </section>

      <Footer />

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-20 cursor-pointer right-4 w-10 h-10 ${
            theme === "light" ? "bg-black text-white" : "bg-white text-black"
          } shad rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg`}
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default App;
