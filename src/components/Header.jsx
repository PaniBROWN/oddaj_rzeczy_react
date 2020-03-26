import React from "react";
// import * as Scroll from 'react-scroll';
// import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div className="header-container">
        <div className="header-top">
          <Link className="header-top-line" exact to="/logowanie">
            Zaloguj
          </Link>
          <Link className="header-top-line" exact to="/rejestracja" >
            Załóż konto
          </Link>
        </div>
        <div className="header-bottom">
          <Link className="header-bottom-line" exact to="/">
            Start
          </Link>
          <Link className="header-bottom-line" exact to="/">
            O co chodzi?
          </Link>
          <Link className="header-bottom-line" exact to="/">
            O nas
          </Link>
          <Link  className="header-bottom-line" exact to="/">
            Fundacja i organizacje
          </Link>
          <Link className="header-bottom-line" exact to="/">
            Kontakt
          </Link>
        </div>
      </div>
    );
}

export default Header;
