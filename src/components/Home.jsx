import React, { Component } from "react";
import MainSection from "./MainSection";
import ThreeColums from "./ThreeColums";
import FourSteps from "./FourSteps";
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp";
import Contact from "./Contact";

class Home extends Component {
  render() {
    return (
      <div>
        <MainSection />
        <ThreeColums />
        <FourSteps />
        <AboutUs />
        <WhoWeHelp />
        <Contact />
      </div>
    );
  }
}

export default Home;
