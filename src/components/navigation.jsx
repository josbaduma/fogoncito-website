const Navigation = () => {
  return (
    <nav
      id="menu"
      className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
    >
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
        Restaurante Tipico EL Fongoncito
      </a>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a href="#home" className="nav-link page-scroll">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a href="#menuRest" className="nav-link page-scroll">
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link page-scroll">
              Nosotros
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link page-scroll">
              Contactenos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
