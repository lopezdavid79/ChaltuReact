
import React, { useState, useEffect } from 'react';
import { productById } from './services/index';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const ShowProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    async function cargaProducts() {
      try {
        const response = await productById(); // Asumiendo que 'productById' es una función asincrónica que obtiene productos

        if (response.status === 200) {
          setProducts(response.data.products);
          HTMLFormControlsCollection.console.log("datos cargados");
        }
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    }
    cargaProducts();
  }, []);

  if (products.length === 0) {
    return <div className='text-center'>Cargando contenido...</div>;
  }

  return (
    <Container className='backGround d-flex'>
      {products.map((product) => (
        <Card key={product.id} className="text-center m-3">
          <Card.Img variant="top" src={product.imagen} style={{ height: '10rem' }} />
          <Card.Body>
            <Card.Title className='m-2'>{product.modelo}</Card.Title>
            <Card.Text>
              {product.descripcion}
            </Card.Text>

            <Card.Text>
              {product.precio}
            </Card.Text>
            <Button variant="primary" href='./reserva'>Comprar Ahora</Button>
          </Card.Body>
          <Card.Footer className="text-muted">{product.articulo}</Card.Footer>
        </Card>
      ))}
    </Container>
  );
};

export default ShowProducts