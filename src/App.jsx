import Header from "./components/Header";
import React, { useState } from "react";

import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import GraphicDesign from "./components/GraphicDesign";
function App() {
  // React.useEffect(() => {
  //   // define a custom handler function
  //   // for the contextmenu event
  //   const handleContextMenu = (e) => {
  //     // prevent the right-click menu from appearing
  //     e.preventDefault();
  //   };

  //   // attach the event listener to
  //   // the document object
  //   document.addEventListener("contextmenu", handleContextMenu);

  //   // clean up the event listener when
  //   // the component unmounts
  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //   };
  // }, []);
  return (
    <div className="font-poppins w-full">
      <Header />
      <About />
      <Experience />
      <GraphicDesign />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
