import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact">
        <h3 className="title-line">Skontaktuj się z nami</h3>
        <div className="decoration"></div>
        <form className="contact-form">
          <div>
            <label>Wpisz swoje imię</label>
            <input />
          </div>
          <div>
            <label>Wpisz swój e-mail</label>
            <input />
          </div>
          <div>
            <label>Wpisz swoją wiadomość</label>
            <textarea />
          </div>
          <button>Wyślij</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
