import Tool from "../components/Tool";

import figma from "../img/figma.svg";
import git from "../img/git.svg";
import photoshop from "../img/photoshop.svg";
import trello from "../img/trello.svg";
import vscode from "../img/vscode.svg";

import BtnNext from "../components/BtnNext";

import React, { useRef } from "react";
import useElementOnScreen from "../hooks/useElementOnScreen";

const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "Scss",
  "React.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
];

const extra = ["Python", "MySQL", "Bootstrap", "Jest", "jQuery", "Next.js"];

function Experience() {
  const targetRef = useRef(null);

  return (
    <section
      className={`exp ${useElementOnScreen(targetRef) ? "show" : ""}`}
      id="exp"
      ref={targetRef}
    >
      <header className="exp__title-box">
        <h2 className="font-wide exp__title exp__title--1">Things I know</h2>
        <span className="font-wide exp__and">and</span>
        <h2 className="font-wide exp__title exp__title--2">My tools</h2>
      </header>

      <div className="exp__container skills">
        <ul className=" skills__list">
          {skills.map((el, i) => (
            <li className="font-content skills__item" key={i}>
              {el}
            </li>
          ))}
        </ul>
        <div className="extra">
          <h3 className="font-wide extra__title">
            Also have experience with...
          </h3>
          <ul className="extra__list">
            {extra.map((el, i) => (
              <li className="font-wide extra__item" key={i}>
                {el}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="exp__container tools">
        <ul className="tools__list">
          <Tool type="code editor" src={vscode} name="Visual Studio Code" />
          <Tool type="design tool" src={figma} name="Figma" />
          <Tool type="image editor" src={photoshop} name="Adobe Photoshop" />
          <Tool type="version control" src={git} name="Git" />
          <Tool type="scrum" src={trello} name="Trello" />
        </ul>
      </div>
      <BtnNext id="exp__next" toSection="#projects" text="My projects" />
    </section>
  );
}

export default Experience;
