import { Icon } from "@iconify/react";

function FooterLink(props) {
  return (
    <a className="footer__link" href={props.url}>
      <Icon icon={`mdi:${props.iconName}`} color="#e9e8e2" height="40" />
    </a>
  );
}

export default FooterLink;
