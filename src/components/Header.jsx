import React, { useCallback } from "react";
import Particles from "react-particles";
import { Link } from "react-scroll";
import { loadFull } from "tsparticles";
import { particle } from "../particle";
import Typewriter from "typewriter-effect";

import scrolldown from "../assets/scroll-down.png";

const Header = () => {
  const typeData = {
    strings: [
      "Frontend Engineer",
      "Backend Engineer",
      "Graphic Designer",
      "Instructor",
      "",
    ],
    delay: 50,
    loop: true,
    autoStart: true,
  };

  const customInit = useCallback(async (engine) => {
    // this adds the bundle to tsParticles
    await loadFull(engine);
  });
  return (
    <div className="bg-bgColor relative flex justify-center items-center h-screen">
      <Particles options={particle} init={customInit} />
      <div className="text-center text-white w-full  ">
        <p className="text-xl text-primary ">Hi</p>
        <h1 className="text-center text-5xl p-4">I'm Rey</h1>
        <span className="text-primary text-3xl">
          <Typewriter options={typeData} />
        </span>
        <div className=" flex justify-center h-full w-full">
          <Link
            className="cursor-pointer absolute bottom-20 hover:bottom-24 ease-in-out duration-300"
            to="About"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <img src={scrolldown} alt="scroll down" className="w-8 h-14" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
