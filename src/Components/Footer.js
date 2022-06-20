import React from 'react';

function Footer() {
  return (
  
         <div className='Footer'>
            <div className="links">
                <ul>
                    <li><a href="https://twitter.com/LvnReyS" target="_blank" rel="noreferrer">Twitter</a></li>
                    <li><a href="https://www.instagram.com/elvinreysaavedra/" rel="noreferrer" target="_blank">Instagram</a></li>
                    <li><a href="https://www.facebook.com/ElvinSRey" rel="noreferrer" target="_blank">Facebook</a></li>
                    <li><a href="https://www.linkedin.com/in/reyworksgd/" rel="noreferrer" target="_blank">LinkedIn</a></li>
                </ul>
            </div>
            <p>Copyright &copy; {new Date().getFullYear()}</p>

         </div>
  )}

export default Footer;
