import React from 'react';
import {Link} from 'react-scroll';
import scrolldown from '../assets/scroll-down.png';
import Particles from "react-tsparticles";
export default function LandingPage() {
  
  
    return(
        <div>
            <div className="landing-page">
            <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 20,
	            "density": {
	                "enable": true,
	                "value_area": 800
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "opacity": 0.03,
				"distance": 200
	        },
	        "move": {
                "enable": true,
	            "direction": "bottom",
	            "speed": 1
	        },
	        "size": {
	            "value": 1
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 1,
	                "opacity_min": 0.05
	            }
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            },
	        },
	        "modes": {
	            "push": {
	                "particles_nb": 1
	            },
                "grab":{
					"distance": 150,
                    "line_linked":{
                        "opacity": 0.02,
                    }
                    
                }
	        }
	    },
	    "retina_detect": true
	}} />
                <div className="landing-page-content">
                    <p className='p-tag'>Hi</p>
                    <h1>I'm Rey</h1>
                    <p>Full-Stack Developer</p>
                </div>
              
                 <Link to="About" spy={true} smooth={true} offset={-50} duration={500}><img src={scrolldown} alt="scroll down"></img></Link>
            </div>
        </div>
  )}
