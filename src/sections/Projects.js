function Projects(props) {
  return (
    <section className="projects" id="projects">
      <header className="font-wide projects__title-box">
        <h2 className="projects__title">Featured Projects</h2>
        <h3 className="projects__name">{props.projectName}name</h3>
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
        <ul className="projects__tech">
          <li className="font-content tech-item">html</li>
          <li className="font-content tech-item">html</li>
          <li className="font-content tech-item">html</li>
          <li className="font-content tech-item">html</li>
        </ul>
        <div className="projects__preview">
          <img alt="preview" className="projects__img"></img>
          <div className="projects__content">
            <p className="font-content projects__text">project text</p>
          </div>
        </div>

        <div className="projects__btns">
          <button className="font-wide projects__btn">movi list</button>
          <button className="font-wide projects__btn">movi list</button>
          <button className="font-wide projects__btn">movi list</button>
          <button className="font-wide projects__btn">movi list</button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
