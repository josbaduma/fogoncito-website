const Menu = (props) => {
  return (
    <div
      class="modal fade"
      id="menuModal"
      tabindex="-1"
      aria-labelledby="menuModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="menuModalLabel">
              Menu del Restaurante
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
              Menu
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
