import React, { Component } from "react";
import MainSection from "./MainSection";
import ThreeColums from "./ThreeColums";
import FourSteps from "./FourSteps";
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp";
import Contact from "./Contact";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <div>
        jestem w Home
        <MainSection />
        <ThreeColums />
        <FourSteps />
        <AboutUs />
        <WhoWeHelp />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
