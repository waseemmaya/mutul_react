import React, { Component } from "react";
import Header from "./Screens/Header";
import { Banner1, Banner2 } from "./Screens/Banners";
import Body1 from "./Screens/Body1";
import Body2 from "./Screens/Body2";
import Body3 from "./Screens/Body3";
import VisitedLinks from "./Screens/VisitedLinks";
import Footer from "./Screens/Footer";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Body1 />
        <Banner1 />
        <Body2 />
        <Banner1 />
        <Body3 />
        <Banner2 />
        <VisitedLinks />
        <Footer />
      </div>
    );
  }
}

export default App;
