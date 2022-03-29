import React, { useState, useEffect } from "react";
import Navigation from "./components/navigation";

import data from "./data/data.json";
//import SmoothScroll from "smooth-scroll";

import "./App.css";
import Header from "./components/header";

/* export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
}); */

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(data);
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Header data={landingPageData.Header} />
    </div>
  );
};

export default App;