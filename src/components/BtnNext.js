function BtnNext(props) {
  return (
    <button className="btn-next">
      <a className="font-wide btn-next__link" href={props.toSection}>
        {props.text}
        <div className="btn-next__arrow"></div>
      </a>
    </button>
  );
}

export default BtnNext;
