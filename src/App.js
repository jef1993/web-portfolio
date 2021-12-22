import "./App.css";

import Nav from "./sections/Nav";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="bg"></div>
        <Nav />
        <About />
        <Experience />
        <Projects />
      </div>
      <Contact />
      {/* <div id="contact" className="contact-wrapper"></div> */}
    </div>
  );
}

export default App;
