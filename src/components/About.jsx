import React from "react";

import gif from "../assets/giphy.gif";

const About = () => {
  return (
    <div
      className="pt-10 w-full bg-gradient-to-b from-bgColor to-bgSecondary"
      id="About"
    >
      <div className="lg:grid lg:grid-cols-2 flex justify-center">
        <div className="lg:flex lg:justify-center px-10 mb-5 hidden">
          <img src={gif} />
        </div>
        <div className="px-10 pt-10 md:pl-36">
          <div className="max-w-lg ">
            <h2 className="text-4xl text-white font-bold pb-4">
              Elvin Rey Saavedra
            </h2>
            <p className="text-primary text-lg ">
              Full-Stack Developer, Software Engineer and a team player. I am
              looking for opportunities where I can change, improve and give
              impact through development
            </p>
            <button className=" rounded-2xl text-primary w-[9rem] h-10 my-6 bg-white hover:bg-secondary hover:text-white ease-in-out duration-300">
              <a
                href="https://docs.google.com/document/d/1M4YX0AUzNgaWhlwSoXsoZyeKBWaJOX6W/edit?usp=sharing&ouid=108940323485830297322&rtpof=true&sd=true"
                download="https://docs.google.com/document/d/1M4YX0AUzNgaWhlwSoXsoZyeKBWaJOX6W/edit?usp=sharing&ouid=108940323485830297322&rtpof=true&sd=true"
                target="_blank"
              >
                See Resume
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-8">
        <div className="skills">
          <h2 className="text-center font-bold text-4xl text-white mb-4">
            <span className="text-secondary">{"</>"}</span>Skills
          </h2>
          <p className="text-primary">
            ReactJs, CSS, HTML, JavaScript, Typescript, NodeJS, Express, AWS,
            DigitalOcean, Git, Adobe XD, Figma, Photosohp, Premiere Pro,
            Tailwind CSS, Material-UI
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
