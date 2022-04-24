import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const About = (props) => {
  const items = props.data ? props.data.img : [];

  // Carousel Item Data
  const carouselItemData = items.map((item) => (
    <div key="{item}">
      <img className="d-block w-100" src={item.src} alt={item.altText} />
    </div>
  ));

  const settings = {
    dynamicHeight: true,
    showThumbs: false,
    infiniteLoop: true,
    autoPlay: true,
    swipeable: true,
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <Carousel {...settings}>
              {carouselItemData}
            </Carousel>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Nosotros</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Visitenos</h3>
              <div className="list-style">
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}> {d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
