import ProjectBtn from "../components/ProjectBtn";

import myProjects from "../data/projects";

import React, { useState, useEffect } from "react";

function Projects(props) {
  const [curPj, setCurPj] = useState(myProjects.projects[0]);

  useEffect(() => {
    console.log("change!!");
  }, [curPj]);

  const btnActive = (btn, index) => {
    setCurPj(myProjects.projects.find((obj) => obj.name === btn.name));
    document
      .querySelectorAll(".projects__btn")
      .forEach((el) => el.classList.remove("current"));

    document.querySelectorAll(".projects__btn")[index].classList.add("current");
  };

  return (
    <section className="projects" id="projects">
      <header className="font-wide projects__title-box">
        <h2 className="projects__title">Featured Projects</h2>
        <h3 className="projects__name">{curPj.name}</h3>
        <div className="projects__link-box">
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
        </div>
      </header>

      <div className="projects__container">
        <div className="projects__frame"></div>
        <ul className="projects__tech">
          {curPj.techList.map((el, i) => (
            <li className="font-content projects__tech-item" key={i}>
              {el}
            </li>
          ))}
        </ul>
        <div className="projects__preview">
          <img alt="preview" className="projects__img" src={curPj.img}></img>

          <div className="projects__content">
            <p className="font-content projects__text">{curPj.content}</p>
          </div>
        </div>

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
