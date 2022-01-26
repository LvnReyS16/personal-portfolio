
import './App.css';

import LandingPage from './Components/LandingPage.js';
import AboutMe from './Components/AboutMe.js';
import Projects from './Components/Projects.js';
import Contact from './Components/Contact.js';
import Footer from './Components/Footer.js';
function App() {
  return (
    <div className="App">
       <LandingPage/>
     <AboutMe/> 
     <Projects/> 
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
