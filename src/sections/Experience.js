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
      <span className="font-wide exp__and">and</span>

      <div className="skills">
        <h2 className="font-wide skills__title">Things I know</h2>
        <div className="skills__container">
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
      </div>
      <div className="tools">
        <h2 className="font-wide tools__title">My tools</h2>
        <div className="tools__container">
          <ul className="tools__list">
            <li>
              <Tool type="code editor" src={vscode} name="Visual Studio Code" />
              <Tool type="design tool" src={figma} name="Figma" />
              <Tool
                type="image editor"
                src={photoshop}
                name="Adobe Photoshop"
              />
              <Tool type="version control" src={git} name="Git" />
              <Tool type="project management" src={trello} name="Trello" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
