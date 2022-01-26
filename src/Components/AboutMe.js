import React from 'react';

import about_me from '../assets/about_me.png'
function AboutMe() {
    
  
  
    return( 
        <div className='about-me-page' id="About">
            <div className="row1">
           
                <div className="about-me-content">
                    <div className="img-div">
                        <img src={about_me} alt="About Me" />
                    </div>
                    <div className="about-me-text">
                        <h2>Elvin Rey Saavedra</h2>
                        <p>Full-Stack Developer, Software Engineer and a team player. I am looking for opportunities where I can change, improve and give impact through development</p>
                        <button>Download CV</button>       
                    </div>
                        
                </div>
            </div>
            <div className="row2">
                <div className="skills">
                    <h2><span>{"</>"}</span>Skills</h2>
                    <p>ReactJs, CSS, HTML, JavaScript, Git, Adobe XD, Figma, Photosohp, Premiere Pro, Tailwind CSS, Material-UI </p>
                    </div>
            </div>
        </div>
  )}

export default AboutMe;
