import { useState } from "react";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title" style={{width: "85%"}}>
                  <h2>Contactenos</h2>
                  <p>
                    Complete el siguiente formulario para enviarnos un correo
                    electrónico y nos pondremos en contacto con usted lo antes
                    posible.
                  </p>
                </div>
                <form name="sentMessage" validate="true" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Nombre"
                          required
                          onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          required
                          onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Mensaje"
                      required
                      onChange={handleChange}
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Informacion</h3>
                <div className="contact-item embed-responsive embed-responsive-4by3">
                  <iframe
                    className="embed-responsive-item"
                    title="Ubicacion"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.1254760183415!2d-84.22026888463488!3d10.006492992846676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f9bf57cf7de1%3A0xc5e23cad769783f4!2sEl%20Fogoncito%20(Restaurante%20T%C3%ADpico)!5e0!3m2!1ses-419!2scr!4v1649287068174!5m2!1ses-419!2scr"
                    width="600"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Direccion
                  </span>
                  {props.data ? props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Telefono
                  </span>{" "}
                  {props.data ? props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-solid fa-envelope"></i> Email
                  </span>{" "}
                  {props.data ? props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a href={props.data ? props.data.facebook : "/"}>
                        <i className="fa fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href={props.data ? props.data.instagram : "/"}>
                        <i className="fa fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href={props.data ? props.data.whatsapp : "/"}>
                        <i className="fa fa-brands fa-whatsapp"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2022 Restaurante Tipico El Fogoncito.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
