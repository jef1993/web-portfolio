import React, { useRef } from "react";
import useElementOnScreen from "../hooks/useElementOnScreen";

function Nav() {
  const targetRef = useRef(null);
  const navRef = useElementOnScreen(targetRef);
  return (
    <nav id="nav" className={`nav ${navRef ? "show" : ""}`} ref={targetRef}>
      <div className="nav__bar">
        <a className="font-wide nav__title" href="#nav">
          About
        </a>
        <a className="font-wide nav__title" href="#exp">
          Experience
        </a>
        <a className="font-wide nav__title" href="#projects">
          Projects
        </a>
        <a className="font-wide nav__title" href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Nav;
