function NavSideItem(props) {
  return (
    <li className="nav-side__item">
      <a href={`#${props.section}`} className="font-wide nav-side__item">
        <div className="nav-side__text">{props.name}</div>
      </a>
    </li>
  );
}

export default NavSideItem;
