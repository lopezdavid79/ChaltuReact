import React, { useState, useEffect, useRef } from 'react';
import { getProducts, updateProduct } from '../../services/Index';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Edit() {
  const [products, setProducts] = useState([]);
  const [productSel, setProductSel] = useState("");
  const [datosProducts, setDatosProducts] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    async function cargaProducts() {
      try {
        const response = await getProducts();

        if (response.status === 200) {
          setProducts(response.data.products);
          console.log(response.data.products)
        }
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    }

    cargaProducts();
  }, []);

  const handleSelProducts = (event) => {
    const selectedProduct = products.find((product) => product._id === event.target.value);
    setProductSel(event.target.value);
    setDatosProducts(selectedProduct);
  };

  const inputFileRef = useRef();
  const formRef = useRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setDatosProducts({ ...datosProducts, imagen: file });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evitar la recarga de la página al enviar el formulario

    const formData = new FormData();
    formData.append("imagen", datosProducts.imagen);
    formData.append("articulo", formRef.current.articulo.value);
    formData.append("modelo", formRef.current.modelo.value);
    formData.append("descripcion", formRef.current.descripcion.value);
    formData.append("precio", formRef.current.precio.value);
    formData.append("stock", formRef.current.stock.value);

    const confirmActualizar = window.confirm(`¿Estás seguro que quieres actualizar el producto?`);

    if (confirmActualizar) {
      try {
        await updateProduct(productSel, formData);
        handleClose();
        // Actualizar el estado localmente si es necesario
      } catch (error) {
        console.error("Error al actualizar el producto:", error);
      }
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
          <Form ref={formRef} onSubmit={handleSubmit}>
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
                  <Form.Control value={datosProducts.articulo} name="articulo" onChange={() => {}} />
                </Form.Group>
                {/* Resto de los campos */}
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
                  <Form.Control type='number'  defaultValue={datosProducts.stock} name="stock" min="1" />
                </Form.Group>


                <Form.Group controlId="imagen">
                  <Form.Label>Imagen</Form.Label>
                  <Form.Control type="file" ref={inputFileRef} onChange={handleFileChange} />
                </Form.Group>
                <Button variant="success" type="submit">
                  Actualizar producto
                </Button>
              </div>
            )}
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Edit;
