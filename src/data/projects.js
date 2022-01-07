import movilist from "../img/projects/movilist.jpg";
import blackjack from "../img/projects/blackjack.jpg";
import drumpad from "../img/projects/drumpad.jpg";
import spotifyClone from "../img/projects/spotify-clone.jpg";

class Project {
  constructor(name, techList, imgName, content, github, website) {
    this.name = name;
    this.techList = techList;
    this.img = imgName;
    this.content = content;
    this.github = github;
    this.website = website;
  }
}

const myProjects = {};

myProjects.projects = [
  new Project(
    `movilist`,
    [`HTML`, `SCSS`, `Javascript`, `React.js`, `React Router`],
    movilist,
    "A movie search tool allows users to save movie data from The Movie Database(TMDB) to their accounts. Developed collaboratively in an agile environment I majorly contributed to the Front-end of the application.",
    `https://github.com/jef1993/movilist-react`,
    `https://movi-list.netlify.app/`
  ),

  new Project(
    `blackjack`,
    [`HTML`, `SCSS`, `Javascript`],
    blackjack,
    "A blackjack poker game supports up to 3 players and a dealer. Implemented card shuffling, auto card repunishing and card unveiling features.",
    `https://github.com/jef1993/Blackjack`,
    `https://jef1993.github.io/Blackjack/`
  ),

  new Project(
    `drumpad`,
    [`HTML`, `SCSS`, `Javascript`],
    drumpad,
    "Features 16 instrument pads and 2 effect pads and a control panel to select samples and adjust volume. Effects can be looped in the background while drum beats are playing.",
    `https://github.com/jef1993/Drumpad`,
    `https://jef1993.github.io/Drumpad/`
  ),

  new Project(
    `spotify clone`,
    [`HTML`, `SCSS`, "Javascript"],
    spotifyClone,
    "A clone of Spotify’s homepage. Entire responsive design is replicated, including the pop-up menu.",
    `https://github.com/jef1993/Spotify-Clone`,
    `https://jef1993.github.io/Spotify-Clone/`
  ),
];

export default myProjects;
