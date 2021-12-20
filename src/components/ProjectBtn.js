function ProjectBtn(props) {
  return (
    <button id={props.btnID} className="font-wide projects__btn" onClick={props.setProject}>
      <h2 className="projects__btn-text">{props.btnText}</h2>
      <div className="projects__btn-box"></div>
    </button>
  );
}

function ProjectBtn2(props) {
  return (
    
    <button className="font-wide projects__btn" onClick={props.setProject}>
      <h2 className="projects__btn-text">{props.btnText}</h2>
      <div className="projects__btn-box"></div>
    </button>
  );
}

export default ProjectBtn;
