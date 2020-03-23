import React from "react";
import { NavLink } from "react-router-dom";

function FourSteps() {
  return (
    <div>
      <h3>Wystarczą 4 proste kroki</h3>
      <div>
        <p>Wybierz rzeczy</p>
        <p>ubrania, zabawki, sprzęt i inne</p>
      </div>
      <div>
        <p>Spakuj je</p>
        <p>skorzystaj z worków na śmieci</p>
      </div>
      <div>
        <p>Zdecyduj komu chcesz pomóc</p>
        <p>wybierz zaufane miejsce</p>
      </div>
      <div>
        <p>Zamów kuriera</p>
        <p>kurier przyjedzie w dogodnym terminie</p>
      </div>
      <NavLink exact to="/">
        ODDAJ RZECZY
      </NavLink>
    </div>
  );
}

export default FourSteps;
