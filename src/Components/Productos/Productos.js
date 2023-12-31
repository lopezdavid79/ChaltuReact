import React, { useState, useEffect } from 'react';
import { getProducts } from './services';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const Products = () => {
    const [key, setKey] = useState('articulo');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function cargaProducts() {
            try {
                const response = await getProducts();

                if (response.status === 200) {
                    setProducts(response.data.products);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        cargaProducts();
    }, []);

    if (!products.length) {
        return <div className='text-center'>Cargando contenido...</div>;
    }

    const productsPorArticulo = products.reduce((acc, product) => {
        if (!acc[product.articulo]) {
            acc[product.articulo] = [];
        }
        acc[product.articulo].push(product);
        return acc;
    }, {});

    return (
        <Container className='backGround d-flex'>
            {Object.entries(productsPorArticulo).map(([articulo, products]) => (
                <Tabs
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    key={articulo}
                    className="mb-3 textoTab"
                    justify
                >
                    <Tab eventKey={articulo} title={articulo} className='mb-3'>
                        {products.map((product) => (
                            <Container className='w-100' key={product.id}>
                                <Card className="text-center m-3">
                                    <Card.Img variant="top" src={product.imagen} style={{ height: '10rem' }} />
                                    <Card.Body>
                                        <Card.Title className='m-2'>
                                            <Link to={`/products/${product._id}`}>{product.modelo}</Link>
                                        </Card.Title>
                                        <Card.Text>
                                            {product.precio}
                                        </Card.Text>
                                        <Button variant="primary" href='./reserva'>Comprar Ahora</Button>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">{articulo}</Card.Footer>
                                </Card>
                            </Container>
                        ))}
                    </Tab>
                </Tabs>
            ))}
        </Container>
    );
};

export default Products;
