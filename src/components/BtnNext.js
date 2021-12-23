function BtnNext(props) {
  return (
    <button className="btn-next">
      <a className="font-wide btn-next__link" href={props.toSection}>
        <div className="btn-next__text">{props.text}</div>
        <div className="btn-next__arrow"></div>
      </a>
    </button>
  );
}

export default BtnNext;
