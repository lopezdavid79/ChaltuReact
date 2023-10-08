import React, { useState } from 'react';

function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Realiza validaciones aquí
    if (name === 'username') {
      if (!/^[a-zA-Z0-9_]+$/.test(value)) {
        setErrors({ ...errors, [name]: 'El nombre de usuario debe contener solo letras, números y guiones bajos.' });
      } else {
        setErrors({ ...errors, [name]: '' });
      }
    } else if (name === 'password') {
      // Realiza tus validaciones de contraseña aquí, por ejemplo, longitud mínima, mayúsculas, minúsculas, números, caracteres especiales, etc.
      if (value.length < 8) {
        setErrors({ ...errors, [name]: 'La contraseña debe tener al menos 8 caracteres.' });
      } else {
        setErrors({ ...errors, [name]: '' });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica si hay errores antes de enviar el formulario
    if (errors.username || errors.password) {
      console.log('Hay errores en el formulario. No se puede enviar.');
      return;
    }

    // Aquí puedes agregar la lógica de autenticación
    console.log('Datos de inicio de sesión:', formData);
    // Luego, puedes redirigir al usuario a la página principal o mostrar un mensaje de error, según corresponda.
  };

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Iniciar sesión en Chaltú</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleInputChange}
            required
            autoFocus
          />
          <span className="error-message">{errors.username}</span>
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <span className="error-message">{errors.password}</span>
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default LoginPage;
