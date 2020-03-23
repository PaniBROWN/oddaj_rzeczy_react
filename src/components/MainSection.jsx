import React from "react";
import { NavLink } from "react-router-dom";

function MainSection() {
  return (
    <div>
      <div>
        <h3>Zacznij pomagać!</h3>
        <h3>Oddaj niechciane rzecz w zaufane ręce</h3>
      </div>
      <div>
        <NavLink exact to="/">
          ODDAJ RZECZY
        </NavLink>
        <NavLink exact to="/">
          ZORAGNIZUJ ZBIÓRKĘ
        </NavLink>
      </div>
    </div>
  );
}

export default MainSection;
