function Tool(props) {
  return (
    <li className="tool" key={props.id}>
      <h3 className="font-wide tool__title">{props.type}</h3>
      <img className="tool__img" src={props.src} alt="figma" height="75"></img>
      <p className="font-content tool__name">{props.name}</p>
    </li>
  );
}

export default Tool;
