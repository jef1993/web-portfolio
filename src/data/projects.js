import movilist from "../img/projects/movilist.jpg";
import blackjack from "../img/projects/blackjack.jpg";
import drumpad from "../img/projects/drumpad.jpg";
import spotifyClone from "../img/projects/spotify-clone.jpg";
import expenseTracker from "../img/projects/expense-tracker.jpg";
import aesthetics from "../img/projects/aesthetics.png";

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
    [`HTML`, `SASS`, `Javascript`, `React.js`, `React Router`],
    movilist,
    "A movie search tool allows users to save movie data from The Movie Database(TMDB) to their accounts. Developed collaboratively in an agile environment I majorly contributed to the Front-end of the application.",
    `https://github.com/jef1993/movilist-react`,
    `https://movi-list.netlify.app/`
  ),

  new Project(
    `blackjack`,
    [`HTML`, `SASS`, `Javascript`],
    blackjack,
    "A blackjack poker game supports up to 3 players and a dealer. Implemented card shuffling, auto card repunishing and card unveiling features.",
    `https://github.com/jef1993/Blackjack`,
    `https://jef1993.github.io/Blackjack/`
  ),

  new Project(
    `drumpad`,
    [`HTML`, `SASS`, `Javascript`],
    drumpad,
    "Features 16 instrument pads and 2 effect pads and a control panel to select samples and adjust volume. Effects can be looped in the background while drum beats are playing.",
    `https://github.com/jef1993/Drumpad`,
    `https://jef1993.github.io/Drumpad/`
  ),

  new Project(
    `spotify clone`,
    [`HTML`, `SASS`, "Javascript"],
    spotifyClone,
    "A clone of Spotify’s homepage. Entire responsive design is replicated, including the pop-up menu.",
    `https://github.com/jef1993/Spotify-Clone`,
    `https://jef1993.github.io/Spotify-Clone/`
  ),

  new Project(
    `expense tracker`,
    [`HTML`, `SASS`, "Javascript", "React"],
    expenseTracker,
    "An expense tracker with expenses monthly and yearly analysis features. Use browser's local stroage to store data.",
    `https://github.com/jef1993/react-expense-tracker`,
    `https://the-expense-tracker-react.netlify.app/`
  ),
  new Project(
    "The Aesthetics",
    [`HTML`, `SASS`, "Javascript", "React"],
    aesthetics,
    "A Replica of the homepage of The Aesthetics lounge with no responsive design implemented as the techincal test for Frontend position in OPOP media.",
    `https://github.com/jef1993/aesthetics-demo`,
    `https://theaestheticlounge.netlify.app/`
  ),
];

export default myProjects;
