import React from "react";

import "./App.css";

import Nav from "./sections/Nav";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import NavSide from "./sections/NavSide";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="bg"></div>
        <NavSide />
        <Nav />
        <About />
        <Experience />
        <Projects />
      </div>
      <Contact />
      <footer className="font-content footer">
        Designed & coded by Jeffrey Leung &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
