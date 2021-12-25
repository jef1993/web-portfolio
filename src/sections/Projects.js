import ProjectBtn from "../components/ProjectBtn";
import ProjectImg from "../components/ProjectImg";
import myProjects from "../data/projects";

import React, { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import useElementOnScreen from "../hooks/useElementOnScreen";

function Projects(props) {
  const [curPj, setCurPj] = useState(myProjects.projects[0]);
  const targetRef = useRef(null);

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

  const pjChosen = (index) => {
    document
      .querySelectorAll(".projects__btn")
      .forEach((el) => el.classList.remove("chosen"));
    document.querySelectorAll(".projects__btn")[index].classList.add("chosen");
  };

  const btnActive = (btn, index) => {
    setCurPj(myProjects.projects.find((obj) => obj.name === btn.name));
    pjChosen(index);
  };

  // const preload = () => {
  //   myProjects.projects.map((pic) => {
  //     const img = new Image();
  //     img.src = pic.img;
  //     return img;
  //   });
  // };

  useEffect(() => {
    pjChosen(0);
  }, []);

  return (
    <section
      className={`projects ${useElementOnScreen(targetRef) ? "show" : ""}`}
      id="projects"
      ref={targetRef}
    >
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
            target="_blank"
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
          <ProjectImg url={curPj.img} />
          <div className="projects__content">
            <p className="font-content projects__text">{curPj.content}</p>
          </div>
        </animated.div>

        <div className="projects__btns">
          {myProjects.projects.map((el, i) => (
            <ProjectBtn
              key={i}
              btnID={`btn-${i}`}
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
