import React from "react";
import calculator from "../assets/calculator.png";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import vance from "../assets/vance.png";
import gerhub from "../assets/gerhub.png";
import Fizzbuzz from "../assets/Fizzbuzz.png";
import travelsearch from "../assets/travel_search.png";
import todolist from "../assets/todo-list-app.png";
function Projects() {
  return (
    <div className="project-content">
      <div className="developsince">
        <div className="row-1">
          <h2>
            <span className="h2">Developing</span> since <span>2019</span>
          </h2>
        </div>
        <div className="work-container">
          <div className="row-2">
            <div className="project-row">
              <h3>Multisys Technologies Corporation</h3>
              <p>Front-End Software Engineer</p>
              <p>
                <span>2022-Present</span>
              </p>
            </div>
            <div className="project-row">
              <h3>Freelancer</h3>
              <p>Social Media Manager, Video Editor, Web Developer</p>
              <p>
                <span>2019-2022</span>
              </p>
            </div>
            <div className="project-row">
              <h3>Debug.Go</h3>
              <p>Jr. Full-Stack Developer and Assistant Project Manager</p>
              <p>
                <span>2019-2020</span>
              </p>
            </div>
          </div>
          <div className="row-2-1">
            <div className="project-components">
              <div className="project-container">
                <img src={calculator} alt="Calculator"></img>
                <h3>Glasmorphism Calculator</h3>
                <p className="languages">HTML CSS JS </p>
                <div className="code-demo">
                  <a
                    href="https://glassmorphismcalculatorelvin.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="live"
                  >
                    {" "}
                    <AiOutlineLink className="AiOutlineLink" />
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/LvnReyS16/Glassmorphisim-Calculator.github.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub className="BsGithub" />
                    Source Code
                  </a>
                </div>
              </div>
              <div className="project-container">
                <img src={vance} alt="Porfolio"></img>
                <h3>Website Portfolio Creation</h3>
                <p className="languages">HTML CSS JS REACT</p>
                <div className="code-demo">
                  <a
                    href="https://vancemarga.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="live"
                  >
                    {" "}
                    <AiOutlineLink className="AiOutlineLink" />
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/LvnReyS16/vancemarga"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub className="BsGithub" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="project-components">
              <div className="project-container">
                <img src={gerhub} alt="Portfolio"></img>
                <h3>Website Portfolio Creation</h3>
                <p className="languages">HTML CSS JS REACT</p>
                <div className="code-demo">
                  <a
                    href="https://tawasilandgerhub.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="live"
                  >
                    {" "}
                    <AiOutlineLink className="AiOutlineLink" />
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/LvnReyS16/gerhub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub className="BsGithub" />
                    Source Code
                  </a>
                </div>
              </div>
              <div className="project-container">
                <img src={Fizzbuzz} alt="Fizzbuzz"></img>
                <h3>FizzBuzz Javascript Exercise</h3>
                <p className="languages">HTML CSS JS</p>
                <div className="code-demo">
                  <a
                    href="https://lvnreys16.github.io/Skourse-Academy/Week%203/JavaScript%20Exercise/index.html"
                    target="_blank"
                    rel="noreferrer"
                    className="live"
                  >
                    {" "}
                    <AiOutlineLink className="AiOutlineLink" />
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/LvnReyS16/Skourse-Academy/tree/main/Week%203/JavaScript%20Exercise"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub className="BsGithub" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="project-components">
              <div className="project-container">
                <img src={travelsearch} alt="Portfolio"></img>
                <h3>Travel Web Search </h3>
                <p className="languages">HTML CSS JS REACT</p>
                <div className="code-demo">
                  <a
                    href="https://travel-search-ers.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="live"
                  >
                    {" "}
                    <AiOutlineLink className="AiOutlineLink" />
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/LvnReyS16/travel-search"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub className="BsGithub" />
                    Source Code
                  </a>
                </div>
              </div>
              <div className="project-container">
                <img src={todolist} alt="Fizzbuzz"></img>
                <h3>Todo List App</h3>
                <p className="languages">HTML CSS JS REACT</p>
                <div className="code-demo">
                  <a
                    href="https://lvnreys16.github.io/Skourse-Academy/Week%203/JavaScript%20Exercise/index.html"
                    target="_blank"
                    rel="noreferrer"
                    className="live"
                  >
                    {" "}
                    <AiOutlineLink className="AiOutlineLink" />
                    Live Demo
                  </a>
                  <a
                    href="https://todo-list-app-ers.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub className="BsGithub" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
