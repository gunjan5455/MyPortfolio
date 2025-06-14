import linkedinIcon from "../../assets/linkedin light.png";
import linkedinIcond from "../../assets/linkedin dark.png";
import githubIcon from "../../assets/github light.png";
import githubIcond from "../../assets/github dark.png";
import instagramIcon from "../../assets/instagram light.png";
import instagramIcond from "../../assets/instagram.png";

import profileIcon from "../../assets/profile.PNG";
import resume from "../../assets/New_resume.pdf";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
const Gunjan = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="h-[100dvh] m-h-[500px] flex flex-col justify-center items-center text-center md:flex-row md:space-x-56 px-4">
      <div>
        {/* Profile Image */}
        <img
          src={profileIcon}
          alt="profile Icon"
          className="w-60 h-60 md:w-90 md:h-90 mb-6 rounded-full "
        />
      </div>
      {/* Text Content */}
      <div>
        <h1 className="work-sans-heading text-4xl p-1">GUNJAN</h1>
        <h1 className="work-sans-heading text-4xl p-2">KOTADIYA</h1>
        <p className="text-lg">SOFTWARE ENGINEER</p>
        <span className="flex justify-center items-center space-x-4 m-4">
          <a
            href="https://www.linkedin.com/in/gunjan-kotadiya-008bb526a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={theme === "light" ? linkedinIcon : linkedinIcond}
              alt="LinkedIn Icon"
              className="w-7 h-7 transition-transform duration-200 hover:scale-110"
            />
          </a>

          <a
            href="https://github.com/gunjan5455"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={theme === "light" ? githubIcon : githubIcond}
              alt="githib Icon"
              className="w-7 h-7 transition-transform duration-200 hover:scale-110"
            />
          </a>

          <a
            href="https://www.instagram.com/gunjan_kotadiya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={theme === "light" ? instagramIcon : instagramIcond}
              alt="instagram Icon"
              className="w-7 h-7 transition-transform duration-200 hover:scale-110"
            />
          </a>
        </span>
        <p className="mb-4 text-lg">
          {/* Passionate for <br />
          developing modern <br />
          software solutions. */}
          Building things <br />
          that matter in <br />
          the digital world.
        </p>
        <a href={resume} download>
          {" "}
          <button
            className={`${
              theme === "light" ? "bg-black text-white" : "bg-white text-black"
            } shad w-52 h-14  text-base font-semibold rounded-2xl shadow-2xl cursor-pointer transition-transform duration-200 hover:scale-110`}
          >
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Gunjan;
