import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';  // Asegúrate de tener esta línea
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function CarritoDeCompras({ carrito, onEliminarDelCarrito, onActualizarCantidad }) {
  const [showModal, setShowModal] = useState(false);
  const [metodoDePago, setMetodoDePago] = useState('tarjeta'); // Por defecto, se asume pago con 
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleMetodoDePagoChange = (event) => {
    setMetodoDePago(event.target.value);
  };

  const handlePagar = () => {
    // Aquí puedes realizar acciones adicionales antes de procesar el pago, como validar la información, etc.
    // Luego, puedes llamar a una función que maneje el pago.
    // Por ejemplo, podrías llamar a una función `onPagar` pasándole el carrito y el método de pago seleccionado.
    // onPagar(carrito, metodoDePago);

    // Cerrar el modal después de procesar el pago
    handleCloseModal();
  };

  return (
    <div>
      
      <Button variant="primary" onClick={handleShowModal}>
        Ver Carrito
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Contenido del Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {carrito.map((item) => (
              <li key={item.id}>
                {item.nombre} - Cantidad: {item.cantidad} - Total: ${item.cantidad * item.precio}
                <button onClick={() => onActualizarCantidad(item.id, item.cantidad + 1)}>+</button>
                <button onClick={() => onActualizarCantidad(item.id, item.cantidad - 1)}>-</button>
                <button onClick={() => onEliminarDelCarrito(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <Form.Group controlId="formMetodoDePago">
            <Form.Label>Seleccione el método de pago:</Form.Label>
            <Form.Control as="select" value={metodoDePago} onChange={handleMetodoDePagoChange}>
              <option value="tarjeta">Tarjeta de crédito</option>
              <option value="paypal">PayPal</option>
              <option value="mercadopago">Mercado Pago</option>
              {/* Agrega más opciones según tus necesidades */}
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handlePagar}>
            Pagar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CarritoDeCompras;
