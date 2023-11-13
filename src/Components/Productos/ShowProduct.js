import React, { useState, useEffect } from 'react';
import MediosPago from './MediosPagos';
import { getProductById } from './services/index';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams, Link } from 'react-router-dom';

export const ShowProduct = () => {
  const [product, setProduct] = useState(null);
  const [cuotaValue, setCuotaValue] = useState(null);
  const [showMediosPago, setShowMediosPago] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    async function loadProduct() {
      try {
        const response = await getProductById(id);
        if (response.status === 200) {
          console.log("Datos del producto:", response.data);
          setProduct(response.data.products);
          const cuota = (response.data.products.precio / 3).toFixed(2);
          setCuotaValue(cuota);
        }
      } catch (error) {
        console.error("Error al cargar el producto:", error);
      }
    }
    loadProduct();
  }, [id]);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const addToCart = () => {
    console.log(`Se agregarán ${quantity} ${product.articulo} al carrito`);
  };

  const toggleMediosPago = () => {
    setShowMediosPago(!showMediosPago);
  };

  if (!product) {
    return <div className='text-center'>Cargando contenido...</div>;
  }

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>
            <h2>
            {product.articulo} {product.modelo}
            </h2>
          </Card.Title>

          <Card.Text>
            <p>Precio $ {product.precio}</p>
            <p>3 cuotas sin interés de $ {cuotaValue}</p>
            <p>Descripción: {product.descripcion}</p>
            <Form.Group controlId="quantity">
              <Form.Label>Cantidad:</Form.Label>
              <Form.Control
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </Form.Group>
            <Button variant="primary" onClick={addToCart}>
              Agregar al carrito
            </Button>
            <p>
              <Link to="#" onClick={toggleMediosPago}>
                {showMediosPago ? 'Ocultar Medios de Pago' : 'Mostrar Medios de Pago'}
              </Link>
            </p>
            <p>
              <Link to="/medios_de_envio">Medios de Envío</Link>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      {showMediosPago && <MediosPago />}
    </Container>
  );
};

export default ShowProduct;
