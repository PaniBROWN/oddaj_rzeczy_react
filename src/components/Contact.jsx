import React from "react";

function Contact() {
  return <div>
      <h3>Skontaktuj się z nami</h3>
      <form>
          <div>
              <label>Wpisz swoje imię</label>
              <input/>
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
  </div>;
}

export default Contact;
