const Navigation = () => {
  return (
    <nav
      id="menu"
      className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
    >
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand page-scroll" href="#page-top">
          <img
            src="img/favicon/favicon.ico"
            alt="Restaurante Tipico El Fogoncito"
            width="48"
            height="48"
          />
        </a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a href="#page-top" className="nav-link page-scroll">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link page-scroll">
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link page-scroll">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a href="#testimonials" className="nav-link page-scroll">
                Testimonios
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link page-scroll" data-toggle="modal" data-target="#menuModal">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link page-scroll">
                Contactenos
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navigation;
