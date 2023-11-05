import React, { useState, useEffect } from 'react';
import { getProducts, deleteProducts } from '../../services/Index';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function DeleteProducts() {
  const [products, setProducts] = useState([]);
  const [productSel, setProductSel] = useState(''); // Cambié el estado inicial a una cadena

  useEffect(() => {
    async function cargaCursos() {
      const response = await getProducts();

      if (response.status === 200) {
        setProducts(response.data.products);
      }
    }
    cargaCursos();
  }, []);

  const handleSelCurso = (event) => {
    setProductSel(event.target.value); // Actualizamos el estado con el valor seleccionado
    console.log(productSel);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    const confirmDelete = window.confirm(`¿Estás seguro que quieres eliminar el producto?`);

    if (confirmDelete) {
      deleteProducts(productSel)
        .then((response) => {
          handleClose();
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <Button className='shadow m-3' variant="primary" type="submit" value="Enviar" onClick={handleShow}>
        Borrar Producto
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Borrar Producto</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="modelo">
              <Form.Select value={productSel} onChange={handleSelCurso}>
                <option>Seleccionar producto</option>
                {products.map((product) => (
                  <option key={product._id} value={product._id}>
                    {product.articulo} - {product.modelo} - {product.precio} - {product.stock}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" type="submit" onClick={handleDelete}>
            Borrar producto
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeleteProducts;
