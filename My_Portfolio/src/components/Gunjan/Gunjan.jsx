import linkedinIcon from "../../assets/linkedin light.png";
import githubIcon from "../../assets/github light.png";
import instagramIcon from "../../assets/instagram light.png";
import profileIcon from "../../assets/profile.png";
import resume from "../../assets/New_resume.pdf";
const Gunjan = () => {
  return (
    <div className="h-[100dvh] m-h-[500px] flex flex-col justify-center items-center text-center md:flex-row md:space-x-56 px-4">
      <div>
        {/* Profile Image */}
        <img
          src={profileIcon}
          alt="profile Icon"
          className="w-60 h-60 md:w-110 md:h-110 mb-6 "
        />
      </div>
      {/* Text Content */}
      <div>
        <h1 className="work-sans-heading text-5xl p-1">GUNJAN</h1>
        <h1 className="work-sans-heading text-5xl p-2">KOTADIYA</h1>
        <p className="text-xl">SOFTWARE ENGINEER</p>
        <span className="flex justify-center items-center space-x-4 m-4">
          <a
            href="https://www.linkedin.com/in/gunjan-kotadiya-008bb526a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn Icon"
              className="w-8 h-8 transition-transform duration-200 hover:scale-110"
            />
          </a>

          <a
            href="https://github.com/gunjan5455"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubIcon}
              alt="githib Icon"
              className="w-8 h-8 transition-transform duration-200 hover:scale-110"
            />
          </a>

          <a
            href="https://www.instagram.com/gunjan_kotadiya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagramIcon}
              alt="instagram Icon"
              className="w-8 h-8 transition-transform duration-200 hover:scale-110"
            />
          </a>
        </span>
        <p className="mb-4 text-xl">
          {/* Passionate for <br />
          developing modern <br />
          software solutions. */}
          Building things <br />
          that matter in <br />
          the digital world.
        </p>
        <a href={resume} download>
          {" "}
          <button className="bg-black w-52 h-14 text-white text-xl font-semibold rounded-2xl shadow-2xl cursor-pointer transition-transform duration-200 hover:scale-110">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Gunjan;
