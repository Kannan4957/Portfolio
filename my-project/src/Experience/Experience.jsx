import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiNodedotjs ,SiTensorflow ,SiMongodb } from "react-icons/si";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10 text-white">
        <div className="flex flex-col justify-center items-center">
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <p className="text-xl">Html</p>
        </div>
        
        <div className="flex flex-col justify-center items-center">
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <p>CSS</p>
        </div>
          
        <div className="flex flex-col justify-center items-center">
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <p>React Js</p>
        </div>
          
        <div className="flex flex-col justify-center items-center">
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <p>Javascript</p>
        </div>

        <div className="flex flex-col justify-center items-center">
  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
    <SiNodedotjs color="#8CC84B" size={50} />
  </span>
  <p>Node.js</p>
</div>

        <div className="flex flex-col justify-center items-center">
  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
    <span className="text-white text-3xl font-bold">ex</span>
  </span>
  <p>Express.js</p>
</div> 

          
        <div className="flex flex-col justify-center items-center">
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <p>Mongodb</p>
        </div>

        </div>
       
      </div>
    </div>
  );
};

export default Experience;