import React, { useEffect, useState } from "react";

import "./App.css";

import Nav from "./sections/Nav";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import NavSide from "./sections/NavSide";
import Footer from "./sections/Footer";

function Page() {
  return (
    <div className="page">
      <div className="main">
        <div className="bg"></div>
        <NavSide />
        <Nav />
        <About />
        <Experience />
        <Projects />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default Page;
