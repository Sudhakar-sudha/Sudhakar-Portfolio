import React, { useState } from "react";
import ProgressBar from "./SocialIcons";
import { Projects } from "./Projects";

const Skills = () => {

  return (
    <div>
 <div className="skills items-center justify-center">
          <h1 className="headingskills glow-effect ">Skills</h1>
          </div>
   
    <div className="bg-black text-white md:flex md:px-16 px-5 pb-1 items-center justify-center">
         

        <div className="md:flex-1">
        <div className="py-5">
        <h1 className="text-2xl font-bold mb-3 glow-effect text-blue-500">Programming Language</h1>
        <h1 className="text-2xl font-bold mb-3">C</h1>
        <ProgressBar progress={90} label={true}  />
        </div>

        <div className="py-5">
        <h1 className="text-2xl font-bold mb-3">JAVA</h1>
        <ProgressBar progress={60} label={true} />
        </div>

        <div className="py-5">
        <h1 className="text-2xl font-bold mb-3 glow-effect text-blue-500">Database</h1>
        <h1 className="text-2xl font-bold mb-3">Mysql</h1>
        <ProgressBar progress={50} label={true} />
        </div>

        <div className="py-5">
        <h1 className="text-2xl font-bold mb-3">Mongodb</h1>
        <ProgressBar progress={40} label={true} />
        </div>
        </div>
        <div className="md:flex-1">
        <div className="py-5">
        <h1 className="text-2xl font-bold mb-3 glow-effect text-blue-500">Web Dvelopment</h1>
        <h1 className="text-2xl font-bold mb-3">HTML</h1>
        <ProgressBar progress={90} label={true} />
        </div>

        <div className="py-5">
        <h1 className="text-2xl font-bold mb-3">CSS</h1>
        <ProgressBar progress={60} label={true} />
        </div>

        <div className="py-5">
        <h1 className="text-2xl font-bold mb-3">JavaScript</h1>
        <ProgressBar progress={50} label={true} />
        </div>

        <div className="py-5">
        <h1 className="text-2xl font-bold mb-3 glow-effect text-blue-500">App Dvelopment</h1>
        <h1 className="text-2xl font-bold mb-3">React Native</h1>
        <ProgressBar progress={40} label={true} />
        </div>
        </div>

        <div className="md:flex-1">
        <div className="py-5">
        <h1 className="text-2xl font-bold mb-3 glow-effect text-blue-500">Web Dvelopment <span>FrameWorks & Libraries</span></h1>
        <h1 className="text-2xl font-bold mb-3">React</h1>
        <ProgressBar progress={90} label={true} />
        </div>

        <div className="py-5">
        <h1 className="text-2xl font-bold mb-3">Express</h1>
        <ProgressBar progress={60} label={true} />
        </div>

        <div className="py-5">
        <h1 className="text-2xl font-bold mb-3">Node</h1>
        <ProgressBar progress={50} label={true} />
        </div>

        <div className="py-5">
        <h1 className="text-2xl font-bold mb-3">Tailwind css</h1>
        <ProgressBar progress={40} label={true} />
        </div>
        </div>


    </div>
    </div>
  );
};

export default Skills;
