import movilist from "../img/projects/movilist.PNG";
import ProjectBtn from "../components/ProjectBtn";

import myProjects from "../data/projects";

import React, { useState } from "react";

function Projects(props) {
  return (
    <section className="projects" id="projects">
      <header className="font-wide projects__title-box">
        <h2 className="projects__title">Featured Projects</h2>
        <h3 className="projects__name">{myProjects.projects[0].name}</h3>
        <div className="projects__link-box">
          <a className="projects__link" href={props.url}>
            Github
          </a>
          <span className="projects__divider">/</span>
          <a className=" projects__link" href={props.url}>
            Website
          </a>
        </div>
      </header>

      <div className="projects__container">
        <div className="projects__frame"></div>
        <ul className="projects__tech">
          {myProjects.projects[0].techList.map((el) => (
            <li className="font-content projects__tech-item">{el}</li>
          ))}
        </ul>
        <div className="projects__preview">
          <img
            alt="preview"
            className="projects__img"
            src={myProjects.projects[0].img}
          ></img>

          <div className="projects__content">
            <p className="font-content projects__text">
              {myProjects.projects[0].content}
            </p>
          </div>
        </div>

        <div className="projects__btns">
          <ProjectBtn btnText={myProjects.projects[0].name} />
          <ProjectBtn btnText={`Drum Machine`} />
          <ProjectBtn btnText={`Drum Machine`} />
          <ProjectBtn btnText={`Drum Machine`} />
        </div>
      </div>
    </section>
  );
}

export default Projects;
