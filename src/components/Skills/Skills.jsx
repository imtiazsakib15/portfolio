import Marquee from "react-fast-marquee";
import HTML5 from "../../assets/icons/HTML5.svg";
import CSS3 from "../../assets/icons/CSS3.svg";
import JavaScript from "../../assets/icons/JavaScript.svg";
import React from "../../assets/icons/React-Dark.svg";
import Redux from "../../assets/icons/Redux.svg";
import TailwindCSS from "../../assets/icons/TailwindCSS.svg";
import Bootstrap from "../../assets/icons/Bootstrap.svg";
import Firebase from "../../assets/icons/Firebase.svg";
import ExpressJS from "../../assets/icons/ExpressJS.svg";
import MongoDB from "../../assets/icons/MongoDB.svg";
import VSCode from "../../assets/icons/VSCode.svg";
import Github from "../../assets/icons/Github.svg";
import Figma from "../../assets/icons/Figma.svg";
import Vercel from "../../assets/icons/Vercel.svg";

const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 border-l-4 border-cyan-600 pl-2 w-max mx-auto">
        Skills
      </h1>
      <Marquee>
        <img className="h-16 w-16 mr-6" src={HTML5} alt="HTML5 Logo" />
        <img className="h-16 w-16 mr-6" src={CSS3} alt="CSS3 Logo" />
        <img className="h-16 w-16 mr-6" src={JavaScript} alt="JavaScript Logo" />
        <img className="h-16 w-16 mr-6" src={React} alt="React Logo" />
        <img className="h-16 w-16 mr-6" src={Redux} alt="Redux Logo" />
        <img className="h-16 w-16 mr-6" src={TailwindCSS} alt="TailwindCSS Logo" />
        <img className="h-16 w-16 mr-6" src={Bootstrap} alt="Bootstrap Logo" />
        <img className="h-16 w-16 mr-6" src={Firebase} alt="Firebase Logo" />
        <img className="h-16 w-16 mr-6" src={ExpressJS} alt="ExpressJS Logo" />
        <img className="h-16 w-16 mr-6" src={MongoDB} alt="MongoDB Logo" />
        <img className="h-16 w-16 mr-6" src={VSCode} alt="VSCode Logo" />
        <img className="h-16 w-16 mr-6" src={Github} alt="Github Logo" />
        <img className="h-16 w-16 mr-6" src={Figma} alt="Figma Logo" />
        <img className="h-16 w-16 mr-6" src={Vercel} alt="Vercel Logo" />
      </Marquee>
    </div>
  );
};

export default Skills;
