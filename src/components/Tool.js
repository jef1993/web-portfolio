function Tool(props) {
  return (
    <div className="tool">
      <h3 className="font-wide tool__title">{props.type}</h3>
      <img className="tool__img" src={props.src} alt="figma" height="60"></img>
      <p className="font-content tool__name">{props.name}</p>
    </div>
  );
}

export default Tool;
