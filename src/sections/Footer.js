import React from "react";
import FooterLink from "../components/FooterLink";


function Footer() {
  return (
    <footer className="font-content footer">
      <div className="footer__links">
        <FooterLink
          url="https://www.facebook.com/jeffrey.leung.77/"
          iconName="facebook"
        />
        <FooterLink
          url="https://www.linkedin.com/in/jef1993/"
          iconName="linkedin"
        />
        <FooterLink url="https://github.com/jef1993" iconName="github" />
      </div>
      <div className="footer__container">
        <p className="footer__copyright">
          Designed & coded by Jeffrey Leung &copy; {new Date().getFullYear()}{" "}
        </p>
        <p className="footer__email">jeffrey24493@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;
