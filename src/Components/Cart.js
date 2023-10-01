import React, { useState } from 'react';
import CartItem from './CartItem';

function Cart  ()  {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (itemToRemove) => {
    const updatedCart = cartItems.filter((item) => item !== itemToRemove);
    setCartItems(updatedCart);
  };

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} onRemove={removeItemFromCart} />
          ))}
          <h3>Total: {total}</h3>
          <button>Realizar Compra</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
