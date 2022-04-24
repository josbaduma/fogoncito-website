import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Gallery(props) {
  const items = props.data ? props.data : [];

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
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Servicio Renta de Carro</h2>
        </div>
        <div className="portfolio-items">
          <div className="row">
            <div className="col-sm-6 text-left">
              <p>
                Ofrecemos el servicio adicional para renta de carros a
                extranjeros y nacionales.
                <br />
                <b>Caracteristicas del vehiculo:</b>
              </p>
              <ul className="features">
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{ color: "#f28534" }}
                  ></i>{" "}
                  Toyota Terios 2015
                </li>
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{ color: "#f28534" }}
                  ></i>{" "}
                  Transmision Automatica
                </li>
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{ color: "#f28534" }}
                  ></i>{" "}
                  Doble traccion 4x4
                </li>
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{ color: "#f28534" }}
                  ></i>{" "}
                  Gasolina 1.5 cc
                </li>
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{ color: "#f28534" }}
                  ></i>{" "}
                  Seguro Cobertura Total
                  <ul>
                    <li>
                      <i
                        className="fa-solid fa-check"
                        style={{ color: "#f2ab35" }}
                      ></i>{" "}
                      Lesion o Muerte de terceros
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-check"
                        style={{ color: "#f2ab35" }}
                      ></i>{" "}
                      Danos a propiedad de terceros
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-check"
                        style={{ color: "#f2ab35" }}
                      ></i>{" "}
                      Colision y/o vuelco
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-check"
                        style={{ color: "#f2ab35" }}
                      ></i>{" "}
                      Robo y hurto
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-check"
                        style={{ color: "#f2ab35" }}
                      ></i>{" "}
                      Asistencia de Viaje
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-check"
                        style={{ color: "#f2ab35" }}
                      ></i>{" "}
                      Riesgos adicionales
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-check"
                        style={{ color: "#f2ab35" }}
                      ></i>{" "}
                      Multiasistencia Automoviles
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-sm-6">
              <div
                className="container"
                style={{
                  display: "block",
                  height: 300,
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                }}
              >
                <Carousel {...settings}>{carouselItemData}</Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
