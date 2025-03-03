import React from "react";
import avatarImg from "./Profile.jpg";
import TextChange from "./Textchange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
        I am eager to apply my technical skills and passion for problem-solving as a software engineer, With a solid
foundation in programming languages, algorithms ,and data structure. Seeking to leverage my skills and
experience to contribute to innovative projects at your organization.
        </p>
      </div>
      <div>
        <img className="w-80 h-80" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;