const Menu = (props) => {
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
              <img src="/img/menu-1.jpg" alt="Menu Restaurante" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
