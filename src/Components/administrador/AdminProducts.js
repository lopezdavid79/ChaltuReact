import React, { useState, useEffect } from 'react';
import { getProducts } from './services/Index';
import NewProducts from './crud/Products/NewProducts';
import EditProducts from './crud/Products/EditProducts';
import DeleteProducts from './crud/Products/DeleteProducts';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

export const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    async function cargaProducts() {
      try {
        const response = await getProducts();

        if (response.status === 200) {
          setProducts(response.data.products);
        } else {
          setError('Error al cargar los productos. Inténtalo de nuevo más tarde.');
          console.error('Error fetching products. Response:', response);
        }
      } catch (error) {
        setError('Error al cargar los productos. Inténtalo de nuevo más tarde.');
        console.error('Error fetching products:', error);
      }
    }
    cargaProducts();
  }, []); 
  

  return (
    <Container>
      <NewProducts />
      <EditProducts />
      <DeleteProducts />

      <Container>
        {error && <div className="error-message">{error}</div>}

        {products.map(({ _id, articulo, modelo, descripcion, precio, stock, imagen }) => (
          <ListGroup key={_id}>
            <ListGroup.Item>
              <div>
                <div>Articulo</div>
                <h3>{articulo}</h3>
              </div>
            </ListGroup.Item>

            <ListGroup.Item>
              <div>
                <div>Imagen</div>
                <Image className='ImagenProducts' src={process.env.PUBLIC_URL + imagen} alt="" />
              </div>
            </ListGroup.Item>

            
            <ListGroup.Item>
              <div>
                <div>Modelo</div>
                <h3>{modelo}</h3>
              </div>
            </ListGroup.Item> 

            <ListGroup.Item>
              <div>
                <div>Precio</div>
                <h3>{precio}</h3>
              </div>
            </ListGroup.Item>

            <ListGroup.Item>
              <div>
                <div>Stock</div>
                <h3>{stock}</h3>
              </div>
            </ListGroup.Item>
          </ListGroup>
        ))}
      </Container>
    </Container>
  );
};

export default AdminProducts;
