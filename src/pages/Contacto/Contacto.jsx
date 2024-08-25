import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contacto.css';

const Contacto = () => {
  const [statusMessage, setStatusMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Hazelaway', 'template_96oyxkp', e.target, 'iH9mZgqz5w6z6oSQi')
      .then((result) => {
          setStatusMessage('Mensaje enviado con éxito');
          setIsError(false);
          console.log(result.text);
      }, (error) => {
          setStatusMessage('Error: el mensaje no se pudo enviar');
          setIsError(true);
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <div className="contacto-container">
      <header className="contacto-header">
        <h1>CONTACTO</h1>
        <p>Estamos aquí para ayudarte. Contáctanos y te responderemos lo antes posible.</p>
      </header>

      <section className="contacto-formulario">
        <h2>Envíanos un mensaje</h2>
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input type="tel" id="telefono" name="telefono" required />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn-submit">Enviar</button>
        </form>
        {statusMessage && (
          <p className={isError ? 'error-message' : 'success-message'}>
            {statusMessage}
          </p>
        )}
      </section>
    </div>
  );
};

export default Contacto;




