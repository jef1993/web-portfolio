import movilist from "../img/projects/movilist.PNG";

class Project {
  constructor(name, techList, imgName, content) {
    this.name = name;
    this.techList = techList;
    this.img = imgName;
    this.content = content;
  }
}

const myProjects = {};

myProjects.projects = [
  new Project(
    `movilist`,
    [`HTML`, `SCSS`, `Javascript`, `React`, `React Router`],
    movilist,
    "A movie search tool allows users to save movie data from The Movie Database(TMDB) to their accounts. Developed collaboratively in an agile environment I majorly contributed to the Front-end of the application."
  ),

  new Project(
    `blackjack`,
    [`HTML`, `SCSS`, `Javascript`, `React`, `React Router`],
    movilist,
    "A movie search tool allows users to save movie data from The Movie Database(TMDB) to their accounts. Developed collaboratively in an agile environment I majorly contributed to the Front-end of the application."
  ),
];

export default myProjects;
