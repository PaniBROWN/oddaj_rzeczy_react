import React from "react";
import Register from "../src/components/Register";
import Login from "../src/components/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home.jsx";
// import Header from "./components/Header.jsx";

//import "./scss/main.scss"; // MOJE!!! nie usuwać!

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rejestracja" component={Register} />
          <Route exact path="/logowanie" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
