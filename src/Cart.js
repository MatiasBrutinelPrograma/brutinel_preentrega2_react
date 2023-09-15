import React from 'react';
import { useCart } from './CartContext';

function Cart({ cartItems, updateCartItem, removeCartItem }) {
  const { state, dispatch } = useCart();
  // Calcula el precio total del carrito
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  {
    return (
      <div>
        <h2>Carrito de Compras</h2>
        {cartItems.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - Cantidad: {item.quantity} - Precio Unitario: ${item.price.toFixed(2)}
                <button onClick={() => updateCartItem(item.id, item.quantity + 1)}>+</button>
                <button onClick={() => updateCartItem(item.id, item.quantity - 1)}>-</button>
                <button onClick={() => removeCartItem(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
        <p>Precio Total: ${totalPrice.toFixed(2)}</p>
        <button>Proceder al Pago</button>
      </div>
    );
  }
}
export default Cart;
