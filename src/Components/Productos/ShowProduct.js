import React, { useState, useEffect } from 'react';
import { getProductById } from './services/index';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

export const ShowProduct = () => {
  const [product, setProduct] = useState(null);
  const [cuotaValue, setCuotaValue] = useState(null);
  const [quantity, setQuantity] = useState(1); // Nuevo estado para la cantidad de productos
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
    // Lógica para agregar al carrito, puedes implementarla según tus necesidades
    console.log(`Se agregarán ${quantity} ${product.articulo} al carrito`);
  };

  if (!product) {
    return <div className='text-center'>Cargando contenido...</div>;
  }

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>
            {product.articulo}
            {product.modelo}
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
            
              <Link to="/metodo-pago">  medios de pago</Link>
            </p>
            <p>
              <Link to="/medios_de_envio">  medios de ENVÍO</Link>
            </p>
            
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ShowProduct;
