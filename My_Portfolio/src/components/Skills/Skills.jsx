import React from "react";
import checkIcon from "../../assets/vote-light.png";
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
  const SkillList = ({ src, skill }) => {
    return (
      <span className="mx-4 mb-6 md:mx-8 md:mb-8">
        <img src={src} alt="" className="w-16 h-16 rounded" />
        {/* <p className="text-center">{skill}</p> */}
      </span>
    );
  };
  return (
    <div className="">
      <h1 className="work-sans-heading text-5xl p-6 text-center mt-22 mb-14">
        SKILLS
      </h1>
      <div className="flex flex-col justify-center items-center ">
        <div className="flex flex-row">
          <SkillList src={html} skill="HTML" />
          <SkillList src={css} skill="CSS" />
          <SkillList src={js} skill="JavaScript" />
          <SkillList src={java} skill="JAVA" />
        </div>
        <hr className="bg-grey-400 w-80 mb-4  md:w-[500px]" />
        <div className="flex flex-row">
          <SkillList src={react} skill="ReactJs" />
          <SkillList src={express} skill="ExpressJs" />
          <SkillList src={node} skill="NodeJs" />
        </div>
        <hr className="bg-grey-400 w-1/2 mb-4  md:w-[400px]" />
        <div className="flex flex-row">
          <SkillList src={sql} skill="SQL" />
          <SkillList src={mongo} skill="MongoDB" />
          <SkillList src={tailwind} skill="Tailwind CSS" />
          <SkillList src={git} skill="Git & GitHub" />
        </div>
        <hr className="bg-grey-400 w-80 mb-4 md:w-[500px]" />
      </div>
    </div>
  );
};

export default Skills;
