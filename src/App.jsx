import { useState, useEffect } from "react";
import Navigation from "./components/navigation";
import Header from "./components/header";
import About from "./components/about";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Menu from "./components/menu";
import Gallery from "./components/gallery";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div id="page-top">
      <Navigation />
      <Menu data={landingPageData.Menu} />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
