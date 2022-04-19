import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";

export default function Gallery(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  // State for Animation
  const [animating, setAnimating] = useState(false);

  const items = props.data ? props.data : [];

  // Items array length
  const itemLength = items.length - 1;

  // Previous button for Carousel
  const previousButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  // Next button for Carousel
  const nextButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  // Carousel Item Data
  const carouselItemData = items.map((item) => (
    <CarouselItem
      key={item.src}
      onExited={() => setAnimating(false)}
      onExiting={() => setAnimating(true)}
    >
      <img src={item.src} alt={item.altText} />
    </CarouselItem>
  ));
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
                <li><i class="fa-solid fa-circle-check" style={{color: '#f28534'}}></i> Toyota Terios 2015</li>
                <li><i class="fa-solid fa-circle-check" style={{color: '#f28534'}}></i> Transmision Automatica</li>
                <li><i class="fa-solid fa-circle-check" style={{color: '#f28534'}}></i> Doble traccion 4x4</li>
                <li><i class="fa-solid fa-circle-check" style={{color: '#f28534'}}></i> Gasolina 1.5 cc</li>
                <li><i class="fa-solid fa-circle-check" style={{color: '#f28534'}}></i> Seguro Cobertura Total
                  <ul>
                    <li><i class="fa-solid fa-check" style={{color: '#f2ab35'}}></i> Lesion o Muerte de terceros</li>
                    <li><i class="fa-solid fa-check" style={{color: '#f2ab35'}}></i> Danos a propiedad de terceros</li>
                    <li><i class="fa-solid fa-check" style={{color: '#f2ab35'}}></i> Colision y/o vuelco</li>
                    <li><i class="fa-solid fa-check" style={{color: '#f2ab35'}}></i> Robo y hurto</li>
                    <li><i class="fa-solid fa-check" style={{color: '#f2ab35'}}></i> Asistencia de Viaje</li>
                    <li><i class="fa-solid fa-check" style={{color: '#f2ab35'}}></i> Riesgos adicionales</li>
                    <li><i class="fa-solid fa-check" style={{color: '#f2ab35'}}></i> Multiasistencia Automoviles</li>
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
                <Carousel
                  previous={previousButton}
                  next={nextButton}
                  activeIndex={activeIndex}
                >
                  {carouselItemData}
                  <CarouselControl
                    directionText=""
                    direction="prev"
                    onClickHandler={previousButton}
                  />
                  <CarouselControl
                    directionText=""
                    direction="next"
                    onClickHandler={nextButton}
                  />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
