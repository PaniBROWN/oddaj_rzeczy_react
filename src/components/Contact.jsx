import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact">
        <h3 className="title-line">Skontaktuj się z nami</h3>
        <div className="decoration"></div>
        <form className="contact-form">
          <div className="ceils">
            <div className="input-ceil">
              <p>
                <label className="form-label">Wpisz swoje imię</label>
              </p>
              <p>
                <input className="form-input" placeholder="Krzysztof" />
              </p>
            </div>
            <div className="input-ceil">
              <p>
                <label className="form-label">Wpisz swój e-mail</label>
              </p>
              <p>
                <input className="form-input" placeholder="abc@xyz.pl" />
              </p>
            </div>
          </div>

          <div className="textarea-ceil">
            <p>
              <label
                className="form-label">
                Wpisz swoją wiadomość
              </label>
            </p>
            <p>
              <textarea className="form-textarea" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
            </p>
          </div>
          <button className="send-btn">Wyślij</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
