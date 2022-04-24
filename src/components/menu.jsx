import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Menu = (props) => {
  const items = [
    { src: "/img/menu/es/menu-page-01.jpg" },
    { src: "/img/menu/es/menu-page-02.jpg" },
    { src: "/img/menu/es/menu-page-03.jpg" },
    { src: "/img/menu/es/menu-page-04.jpg" },
    { src: "/img/menu/es/menu-page-05.jpg" },
  ];
  // Carousel Item Data
  const carouselItemData = items.map((item) => (
    <div key="{item}">
      <img className="d-block w-100" src={item.src} alt="Menu de Restaurante" />
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
    <div
      className="modal fade"
      id="menuModal"
      tabIndex="-1"
      aria-labelledby="menuModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="menuModalLabel">
              Menu del Restaurante
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <Carousel {...settings}>{carouselItemData}</Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
