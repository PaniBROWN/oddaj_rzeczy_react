import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <Header />
      <div className="register-container">
        <h3 className="title-line">Załóż konto</h3>
        <div className="decoration">
         
        </div>
        <form className="register-form">
          <div className="register-div">
              <p><label className="register-label">Email</label></p>
              <p><input className="register-input"/></p>
          </div>
          <div className="register-div">
              <p><label className="register-label">Hasło</label></p>
              <p><input className="register-input"/></p>
          </div>
          <div className="register-div">
              <p><label className="register-label">Powtórz hasło</label></p>
              <p><input className="register-input"/></p>
          </div>
        </form>
        <div className="register-btns">
            <p><Link className="link" exact to="/logowanie">Zaloguj się</Link></p>
            <p><button className="btn">Załóż konto</button></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
