import React from "react";
import { NavLink } from "react-router-dom";

function Header () {
    return (
      <div>
        jestem w header
        <div>
          <NavLink exact to="/">
            zaloguj
          </NavLink>
          <NavLink exact to="/">
            załóż konto
          </NavLink>
        </div>
        <div>
          <NavLink exact to="/">
            Start
          </NavLink>
          <NavLink exact to="/">
            O co chodzi?
          </NavLink>
          <NavLink exact to="/">
            O nas
          </NavLink>
          <NavLink exact to="/">
            Fundacja i organizacje
          </NavLink>
          <NavLink exact to="/">
            Kontakt
          </NavLink>
        </div>
      </div>
    );
}

export default Header;
