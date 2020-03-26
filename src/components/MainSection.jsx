import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const MainSection = () => {
  return (
    <div className="main-section-container">
      <Header />
      <div className="main-section">
        <div className="title-section">
          <h3 className="title-line">Zacznij pomagać!</h3>
          <h3 className="title-line">Oddaj niechciane rzeczy w zaufane ręce</h3>
        </div>
        <div className="decoration"></div>
        <div className="link-section">
          <Link className="link-line" exact to="/logowanie">
            ODDAJ RZECZY
          </Link>
          <Link className="link-line" exact to="/logowanie">
            ZORGANIZUJ ZBIÓRKĘ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
