import React from "react";

const Footer = () => {
  return (
    <div className="h-[20vh] bg-secondary">
      <div className="flex w-full flex-col h-full justify-center items-center gap-5 text-white">
        <ul className="flex justify-center gap-10 items-center ">
          <li>
            <a
              className="hover:underline"
              href="https://twitter.com/LvnReyS"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              className="hover:underline"
              href="https://www.instagram.com/elvinreysaavedra/"
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              className="hover:underline"
              href="https://www.facebook.com/ElvinSRey"
              rel="noreferrer"
              target="_blank"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              className="hover:underline"
              href="https://www.linkedin.com/in/elvinreysaavedra/"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <p>Copyright &copy; {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
