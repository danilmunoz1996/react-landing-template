import React from 'react';

const NewsletterSubscription: React.FC = () => {

  return (
    <div className="container-fluid bg-light py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Solicita Atención y nos pondremos en contacto</h2>
          <form>
            <div className="form-group">
              <label htmlFor="emailInput">Email</label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="Ingresa tu correo electrónico"
                aria-describedby="emailHelp"
                required
              />
              <small id="emailHelp" className="form-text text-muted">No compartiremos tu correo electrónico con nadie más.</small>
            </div>
            <div className="form-group">
              <label htmlFor="phoneInput">Número de Teléfono o WhatsApp</label>
              <input
                type="text"
                className="form-control"
                id="phoneInput"
                placeholder="Ingresa tu número de teléfono o WhatsApp"
                aria-describedby="phoneHelp"
                required
              />
              <small id="phoneHelp" className="form-text text-muted">No compartiremos tu número de teléfono con nadie más.</small>
            </div>
            <button className="btn btn-primary btn-block" type="submit">
              Suscribirse
            </button>
          </form>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-md-6 text-center">
          <img src="assets/images/aesthetic-image.jpg" alt=""/>
          <p className="mt-3">Mantente al día con nuestras últimas noticias y ofertas especiales.</p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;

