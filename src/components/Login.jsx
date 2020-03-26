import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="register-container">
        <h3 className="title-line">Zaloguj się</h3>
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
        </form>
        <div className="register-btns">
            <p><Link className="link">Zaloguj się</Link></p>
            <p><Link className="btn" exact to="/rejestracja">Załóż konto</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
