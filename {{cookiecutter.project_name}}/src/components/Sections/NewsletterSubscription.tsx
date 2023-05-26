import React, { ChangeEvent, FormEvent, useState } from 'react';

const NewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    // Aquí podrías manejar la lógica de suscripción
    console.log('Email: ' + email);
    console.log('Phone: ' + phone);
  };

  return (
    <div className="container-fluid bg-light py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Solicita Atención y nos pondremos en contacto</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="button-addon2"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Numero de Telefono o WhatsApp"
                aria-label="Numero de Telefono o WhatsApp"
                aria-describedby="button-addon2"
                value={phone}
                onChange={handlePhoneChange}
                required
              />
              <button className="btn btn-primary" type="submit" id="button-addon2">
                Solicitar Atención por WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
      <img src="assets/images/aesthetic-image.jpeg" alt=""/>
    </div>
  );
};

export default NewsletterSubscription;

