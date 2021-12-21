import ProjectBtn from "../components/ProjectBtn";
import myProjects from "../data/projects";

import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Projects(props) {
  const [curPj, setCurPj] = useState(myProjects.projects[0]);

  const horSpring = useSpring({
    reset: true,
    from: { x: 80, opacity: 0 },
    to: { x: 0, opacity: 1 },
    config: {
      tension: 110,
      mass: 1,
      friction: 26,
      velocity: 0,
      precision: 0.01,
    },
  });

  const verSpring = useSpring({
    reset: true,
    from: { y: 80, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: {
      tension: 110,
      mass: 1,
      friction: 24,
      velocity: 0,
      precision: 0.01,
    },
  });

  const btnActive = (btn, index) => {
    setCurPj(myProjects.projects.find((obj) => obj.name === btn.name));
  };

  return (
    <section className="projects" id="projects">
      <header className="font-wide projects__title-box">
        <h2 className="projects__title">Featured Projects</h2>
        <animated.h3 className="projects__name" style={horSpring}>
          {curPj.name}
        </animated.h3>
        <animated.div className="projects__link-box" style={horSpring}>
          <a
            className="projects__link"
            href={curPj.github}
            target={`_blank`}
            rel="noreferrer noopener"
          >
            Github
          </a>
          <span className="projects__divider">/</span>
          <a
            className=" projects__link"
            href={curPj.website}
            target={`_blank`}
            rel="noreferrer noopener"
          >
            Website
          </a>
        </animated.div>
      </header>

      <div className="projects__container">
        <div className="projects__frame"></div>
        <animated.ul className="projects__tech" style={verSpring}>
          {curPj.techList.map((el, i) => (
            <li className="font-content projects__tech-item" key={i}>
              {el}
            </li>
          ))}
        </animated.ul>
        <animated.div className="projects__preview" style={horSpring}>
          <img alt="preview" className="projects__img" src={curPj.img}></img>

          <div className="projects__content">
            <p className="font-content projects__text">{curPj.content}</p>
          </div>
        </animated.div>

        <div className="projects__btns">
          {myProjects.projects.map((el, i) => (
            <ProjectBtn
              btnText={el.name}
              setProject={() => {
                btnActive(el, i);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
