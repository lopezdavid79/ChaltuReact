import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { newProduct } from '../../services/Index';

function New() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    resetForm();
  };

  const handleShow = () => {
    setShow(true);
  };

  const [articulo, setArticulo] = useState('');
  const [modelo, setModelo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');

  const inputFileRef = useRef();

  const resetForm = () => {
    setArticulo('');
    setModelo('');
    setDescripcion('');
    setPrecio('');
    setStock('');
    if (inputFileRef.current) {
      inputFileRef.current.value = '';
    }
  };

  const handleSubmit = () => {
    const productsData = {
      articulo: articulo,
      modelo: modelo,
      descripcion: descripcion,
      precio: precio,
      stock: stock,
      imagen: inputFileRef.current.files[0],
    };

    newProduct(productsData)
      .then((response) => {
        handleClose();
        window.location.reload();
      });
  };

  return (
    <div>
      <Button className="shadow m-3" variant="success" onClick={handleShow}>
        Agregar producto
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar un producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="articulo">
                <Form.Label>Articulo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre del articulo"
                  autoFocus
                  required
                  name="articulo"
                  value={articulo}
                  onChange={(event) => {
                    setArticulo(event.target.value);
                  }}
                />
              </Form.Group>
            </Row>
            <Form.Group controlId="imagen" className="mb-3">
              <Form.Label>Seleccionar imagen del producto</Form.Label>
              <Form.Control type="file" ref={inputFileRef} />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="modelo">
                <Form.Label>Modelo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Modelo"
                  required
                  name="modelo"
                  value={modelo}
                  onChange={(event) => {
                    setModelo(event.target.value);
                  }}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="descripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Descripción del producto"
                name="descripcion"
                value={descripcion}
                onChange={(event) => {
                  setDescripcion(event.target.value);
                }}
              />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="precio">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Precio"
                  name="precio"
                  value={precio}
                  onChange={(event) => {
                    setPrecio(event.target.value);
                  }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="stock">
                <Form.Label>Stock</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Stock"
                  name="stock"
                  value={stock}
                  onChange={(event) => {
                    setStock(event.target.value);
                  }}
                />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleSubmit}>
            Agregar producto
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default New;
