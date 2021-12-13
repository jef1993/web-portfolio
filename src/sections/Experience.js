import Tool from "../components/Tool";

import figma from "../img/figma.svg";
import git from "../img/git.svg";
import photoshop from "../img/photoshop.svg";
import trello from "../img/trello.svg";
import vscode from "../img/vscode.svg";

const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "Scss",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
];

function Experience() {
  return (
    <section className="exp" id="exp">
      <header className="exp__title-box">
        <h2 className="font-wide exp__title exp__title--1">Things I know</h2>
        <span className="font-wide exp__and">and</span>
        <h2 className="font-wide exp__title exp__title--2">My tools</h2>
      </header>

      <div className="exp__container skills">
        <ul className=" skills__list">
          {skills.map((el) => (
            <li className="font-content skills__item">{el}</li>
          ))}
        </ul>
        <div className="skills__extra">
          <div className="font-wide skills__extra-front">
            <h3>Also have experience with...</h3>
          </div>
          <div className="skills__extra-back"></div>
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
    </section>
  );
}

export default Experience;
