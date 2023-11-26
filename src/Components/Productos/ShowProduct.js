import CommentList from "../comentarios/CommentList"
import React, { useState, useEffect } from 'react';
import MediosPago from './MediosPagos';
import MediosEnvio from "./MediosEnvio"
import CarritoDeCompras from "./CarritoDeCompras"
import { getProductById } from './services/index';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams, Link } from 'react-router-dom';

const ShowProduct = () => {
  const [product, setProduct] = useState(null);
  const [cuotaValue, setCuotaValue] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [showMediosPago, setShowMediosPago] = useState(false);
  const [showMediosEnvio, setShowMediosEnvio] = useState(false);
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

  const toggleMediosPago = () => {
    setShowMediosPago(!showMediosPago);
  };

  const toggleMediosEnvio = () => {
    setShowMediosEnvio(!showMediosEnvio);
  };

  if (!product) {
    return <div className='text-center'>Cargando contenido...</div>;
  }

  const addToCart = () => {
    const itemExistente = carrito.find((item) => item.id === product.id);

    if (itemExistente) {
      // Si el producto ya está en el carrito, actualiza la cantidad
      setCarrito((prevCarrito) =>
        prevCarrito.map((item) =>
          item.id === product.id ? { ...item, cantidad: item.cantidad + quantity } : item
        )
      );
    } else {
      // Si el producto no está en el carrito, agrégalo con la cantidad especificada
      setCarrito((prevCarrito) => [
        ...prevCarrito,
        { ...product, cantidad: quantity },
      ]);
    }
  };

// ... (resto del código en ShowProduct)

const eliminarDelCarrito = (productId) => {
  setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== productId));
};

const actualizarCantidad = (productId, newQuantity) => {
  if (newQuantity <= 0) {
    // Si la nueva cantidad es menor o igual a cero, elimina el producto del carrito
    eliminarDelCarrito(productId);
  } else {
    // Actualiza la cantidad del producto en el carrito
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) =>
        item.id === productId ? { ...item, cantidad: newQuantity } : item
      )
    );
  }
};

// ... (resto del código en ShowProduct)

// En la llamada a CarritoDeCompras, pasa las funciones como props
<CarritoDeCompras
  carrito={carrito}
  onEliminarDelCarrito={eliminarDelCarrito}
  onActualizarCantidad={actualizarCantidad}
/>

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
              <Link to="#" onClick={toggleMediosEnvio}>
                {showMediosEnvio ? 'Ocultar Medios de Envío' : 'Mostrar Medios de Envío'}
              </Link>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      {showMediosPago && <MediosPago />}
      {showMediosEnvio && <MediosEnvio />}
      <CarritoDeCompras
        carrito={carrito}
        onEliminarDelCarrito={eliminarDelCarrito}
        onActualizarCantidad={actualizarCantidad}
      />
      < CommentList />
      
    </Container>
    
  );
};

export default ShowProduct;
