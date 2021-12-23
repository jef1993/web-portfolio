import React, { useState, useEffect } from "react";

import NavSideItem from "../components/NavSideItem";

function NavSide() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div>
      {scrollPosition >= 140 ? (
        <div className="nav-side">
          <input id="menu" type="checkbox" className="nav-side__input"></input>
          <label htmlFor="menu" className="nav-side__label">
            <span className="nav-side__line">&nbsp;</span>
          </label>
          <ul className="nav-side__list">
            <NavSideItem section="nav" name="about" />
            <NavSideItem section="exp" name="experience" />
            <NavSideItem section="projects" name="projects" />
            <NavSideItem section="contact" name="contact" />
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default NavSide;
