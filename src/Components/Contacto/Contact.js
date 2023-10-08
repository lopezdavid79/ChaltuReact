import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Contact.css"
function Contact ()  {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    whatsapp: '',
    consulta: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a través de una solicitud HTTP o hacer lo que necesites.
    console.log(formData);
  };

  return (
    <div className="container mt-5">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit} className='formulario'>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          autoFocus />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="whatsapp" className="form-label">
            Contacto de WhatsApp
          </label>
          <input
            type="text"
            className="form-control"
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="consulta" className="form-label">
            Consulta
          </label>
          <textarea
            className="form-control"
            id="consulta"
            name="consulta"
            value={formData.consulta}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
