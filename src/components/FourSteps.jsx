import React from "react";
import { Link } from "react-router-dom";

const FourSteps = () => {
  return (
    <div className="four-steps-container" id="fourSteps">
      <h3 className="title-line">Wystarczą 4 proste kroki</h3>
      <div className="decoration"></div>
      <div className="column-container">
        <div className="column">
          <p className="icon icon-1"> </p>
          <p className="title">Wybierz rzeczy</p>
          <p className="decr">ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className="column">
          <p className="icon icon-2"> </p>
          <p className="title">Spakuj je</p>
          <p className="decr">skorzystaj z worków na śmieci</p>
        </div>
        <div className="column">
          <p className="icon icon-3"></p>
          <p className="title">Zdecyduj komu chcesz pomóc</p>
          <p className="decr">wybierz zaufane miejsce</p>
        </div>
        <div className="column">
          <p className="icon icon-4"></p>
          <p className="title">Zamów kuriera</p>
          <p className="decr">kurier przyjedzie w dogodnym terminie</p>
        </div>
      </div>

      <Link className="link-line" exact to="/logowanie">
        ODDAJ RZECZY
      </Link>
    </div>
  );
}

export default FourSteps;
