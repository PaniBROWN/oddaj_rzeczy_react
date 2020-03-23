import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";

//import "./scss/main.scss"; // MOJE!!! nie usuwać!

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/dodaj" component={RecepieForm} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
