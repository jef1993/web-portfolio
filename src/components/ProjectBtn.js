function ProjectBtn(props) {
  return (
    <button
      key={props.btnID}
      className="font-wide projects__btn"
      onClick={props.setProject}
      autoFocus={props.focus}
    >
      <h2 className="projects__btn-text">{props.btnText}</h2>
      <div className="projects__btn-box"></div>
    </button>
  );
}

export default ProjectBtn;
