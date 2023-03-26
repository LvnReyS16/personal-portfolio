import React from "react";

import { BsGithub } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import { Projects, workHistory } from "../data";

const Experience = () => {
  return (
    <div className="bg-bgSecondary pt-10 ">
      <div className="lg:grid lg:grid-cols-2 ">
        <div className="flex justify-center lg:sticky lg:top-0  lg:self-start pb-10 ">
          <h2 className=" text-5xl lg:text-7xl text-white">
            Developing
            <span className="text-center lg:text-start block text-5xl pt-4">
              since <span className="text-secondary text-5xl">2019</span>{" "}
            </span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-4 mx-20 justify-center">
          {workHistory?.map((item, index) => (
            <div className="max-w-[20rem] flex-auto" key={index}>
              <h3 className="text-white font-bold">{item?.company}</h3>
              <p className="text-white">{item?.jobTitle}</p>
              <p className="text-primary">
                <span>{item.time}</span>
              </p>
            </div>
          ))}
          <div className="flex flex-wrap gap-6 mt-6 justify-center">
            {Projects?.map((item, index) => (
              <div className="max-w-[20rem] flex-auto" key={index}>
                <img className="rounded-xl" src={item.img} alt="" />
                <h3 className="text-white font-bold mt-2">{item?.title}</h3>

                <p className="text-primary ">
                  <span>{item.languageUsed}</span>
                </p>
                <div className="flex gap-4 mt-1">
                  <a
                    href={item.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-secondary hover:underline"
                  >
                    <AiOutlineLink className="AiOutlineLink" />
                    Live Demo
                  </a>
                  <a
                    href={item.sourceCodeLink}
                    target="_blank"
                    className="flex items-center gap-1 hover:underline"
                    rel="noreferrer"
                  >
                    <BsGithub className="BsGithub" />
                    Source Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
