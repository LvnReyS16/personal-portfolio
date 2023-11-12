import React from "react";
import { SocialLinks } from "../data";

const Footer = () => {
  return (
    <div className="h-[20vh] bg-secondary">
      <div className="flex w-full flex-col h-full justify-center items-center gap-5 text-white">
        <ul className="flex justify-center gap-4 lg:gap-10 items-center ">
          {
            SocialLinks.map((item,index)=> (
            <li key={index}>
              <a
                className="hover:underline"
                href={item?.link}
                target="_blank"
                rel="noreferrer"
              >
                {item?.name}
              </a>
            </li>
            ))
          } 
        </ul>
        <p>Copyright &copy; {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
