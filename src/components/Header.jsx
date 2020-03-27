import React from "react";
// import * as Scroll from 'react-scroll';
import { Link } from "react-scroll";

import { NavLink } from "react-router-dom";

const Header = () => {
    return (
      <div className="header-container">
        <div className="header-top">
          <NavLink className="header-top-line" exact to="/logowanie">
            Zaloguj
          </NavLink>
          <NavLink className="header-top-line" exact to="/rejestracja" >
            Załóż konto
          </NavLink>
        </div>
        <div className="header-bottom">
          <NavLink className="header-bottom-line" exact to="/">
            Start
          </NavLink>
          <Link activeClass="active" className="header-bottom-line" exact to="fourSteps" spy={true} smooth={true} duration={900}>
            O co chodzi?
          </Link>
          <Link activeClass="active" className="header-bottom-line" exact to="aboutUs" spy={true} smooth={true} duration={900}>
            O nas
          </Link>
          <Link activeClass="active"  className="header-bottom-line" exact to="weHelp" spy={true} smooth={true} duration={900}>
            Fundacja i organizacje
          </Link>
          <Link activeClass="active" className="header-bottom-line" exact to="contact"  spy={true} smooth={true} duration={900}>
            Kontakt
          </Link>
        </div>
      </div>
    );
}

export default Header;
