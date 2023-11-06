import React, { useState, useEffect, useRef } from 'react';
import { getProducts, updateProduct } from '../../services/Index';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Edit() {
  const [products, setProducts] = useState([]);
  const [productSel, setProductSel] = useState("");
  const [datosProducts, setDatosProducts] = useState({});

  useEffect(() => {
    async function cargaProducts() {
      const response = await getProducts();

      if (response.status === 200) {
        setProducts(response.data.products);
      }
    }
    cargaProducts();
  }, []);

  const handleSelProducts = (event) => {
    const selectedProduct = products.find((product) => product._id === event.target.value);
    setProductSel(event.target.value);
    setDatosProducts(selectedProduct);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const inputFileRef = useRef();
  const formRef = useRef();

  const handleSubmit = () => {
    const newArticulo = formRef.current.articulo.value;
    const newModelo = formRef.current.modelo.value;
    const newDescripcion = formRef.current.descripcion.value;
    const newPrecio = formRef.current.precio.value;
    const newStock = formRef.current.stock.value;
    const newImagen = inputFileRef.current.files[0];

    const datosNuevos = {
      articulo: newArticulo,
      modelo: newModelo,
      descripcion: newDescripcion,
      precio: newPrecio,
      stock: newStock,
      imagen: newImagen,
    };

    const confirmActualizar = window.confirm(`¿Estás seguro que quieres actualizar el producto?`);

    if (confirmActualizar) {
      updateProduct(productSel, datosNuevos)
        .then((response) => {
          handleClose();
          window.location.reload();
        });
    }
  };

  return (
    <div>
      <Button className='shadow m-3' variant="primary" type="submit" value="Enviar" onClick={handleShow}>
        Actualizar producto
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Actualizar Producto</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form ref={formRef}>
            <Form.Group controlId="product">
              <Form.Label>Seleccionar producto</Form.Label>
              <Form.Select value={productSel} onChange={handleSelProducts}>
                <option>Seleccionar producto</option>
                {products.map((product) => (
                  <option key={product._id} value={product._id}>
                    {product.articulo} - {product.modelo} - {product.descripcion} - {product.precio} - {product.stock}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            {productSel && (
              <div>
                <Form.Group controlId="articulo">
                  <Form.Label>Articulo</Form.Label>
                  <Form.Control defaultValue={datosProducts.articulo} name="articulo" />
                </Form.Group>
                <Form.Group controlId="modelo">
                  <Form.Label>Modelo</Form.Label>
                  <Form.Control defaultValue={datosProducts.modelo} name="modelo" />
                </Form.Group>
                <Form.Group controlId="descripcion">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control defaultValue={datosProducts.descripcion} name="descripcion" />
                </Form.Group>
                <Form.Group controlId="precio">
                  <Form.Label>Precio</Form.Label>
                  <Form.Control type='number'     defaultValue={datosProducts.precio} name="precio" />
                </Form.Group>
                <Form.Group controlId="stock">
                  <Form.Label>Stock</Form.Label>
                  <Form.Control type='number'  defaultValue={datosProducts.stock} name="stock" />
                </Form.Group>
                <Form.Group controlId="imagen">
                  <Form.Label>Imagen</Form.Label>
                  <Form.Control type="file" ref={inputFileRef} />
                </Form.Group>
              </div>
            )}
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" type="submit" onClick={handleSubmit}>
            Actualizar producto
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Edit;
