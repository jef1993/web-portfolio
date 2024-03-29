import React, { useRef } from "react";

import BtnNext from "../components/BtnNext";

import useElementOnScreen from "../hooks/useElementOnScreen";

function About() {
  const targetRef = useRef(null);
  return (
    <section
      className={`about ${useElementOnScreen(targetRef) ? "show" : ""}`}
      id="about"
      ref={targetRef}
    >
      <header className="about__title">
        <h1 className="font-wide about__name">Jeffrey Leung</h1>
        <h2 className="font-sub about__job">Software Developer</h2>
      </header>

      <p className="font-content about__content">
        I'm a developer passionate in design with experience in backend
        development, based in Manchester.
      </p>
      <BtnNext toSection="#exp" text="my experience" />
    </section>
  );
}

export default About;
