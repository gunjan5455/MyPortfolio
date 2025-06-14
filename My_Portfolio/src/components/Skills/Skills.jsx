import java from "../../assets/java (1).png";
import html from "../../assets/HTML.png";
import css from "../../assets/css (2).png";
import react from "../../assets/react.png";
import node from "../../assets/nodejs.png";
import sql from "../../assets/SQL.png";
import mongo from "../../assets/mongodb.png";
import express from "../../assets/expressjs.png";
import tailwind from "../../assets/tailwind-css.png";
import js from "../../assets/javascript.png";
import git from "../../assets/git.png";

const Skills = () => {
  const SkillList = ({ src }) => {
    return (
      <span className="mx-4 mb-6 md:mx-8 md:mb-8">
        <img src={src} alt="" className={` w-14 h-14 rounded`} />
      </span>
    );
  };
  return (
    <div className="">
      <h1 className="work-sans-heading text-4xl p-6 text-center mt-22 mb-14">
        SKILLS
      </h1>
      <div className="flex flex-col justify-center items-center ">
        <div className="flex flex-row">
          <SkillList src={html} skill="HTML" />
          <SkillList src={css} skill="CSS" />
          <SkillList src={js} skill="JavaScript" />
          <SkillList src={java} skill="JAVA" />
        </div>
        <hr className="bg-grey-400 w-80 mb-4  md:w-[450px]" />
        <div className="flex flex-row">
          <SkillList src={react} skill="ReactJs" />
          <SkillList src={express} skill="ExpressJs" />
          <SkillList src={node} skill="NodeJs" />
        </div>
        <hr className="bg-grey-400 w-1/2 mb-4  md:w-[350px]" />
        <div className="flex flex-row">
          <SkillList src={sql} skill="SQL" />
          <SkillList src={mongo} skill="MongoDB" />
          <SkillList src={tailwind} skill="Tailwind CSS" />
          <SkillList src={git} skill="Git & GitHub" />
        </div>
        <hr className="bg-grey-400 w-80 mb-4 md:w-[450px]" />
      </div>
    </div>
  );
};

export default Skills;
