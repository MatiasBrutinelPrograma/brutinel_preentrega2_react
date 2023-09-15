import React from 'react';
import { useCart } from './CartContext';

function Cart() {
  const { state, dispatch } = useCart();

  // Función para calcular el precio total del carrito
  const calculateTotalPrice = () => {
    return state.cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  const updateCartItem = (productId, newQuantity) => {
    // Implementa la lógica para actualizar la cantidad de un producto en el carrito
    dispatch({
      type: 'UPDATE_CART_ITEM',
      payload: { id: productId, quantity: newQuantity },
    });

    // Actualiza el precio total después de modificar el carrito
    const totalPrice = calculateTotalPrice();
    console.log(totalPrice);
  };

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {state.cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {state.cartItems.map((item) => (
            <li key={item.id}>
              <div className="product-info">
                <h3>{item.name}</h3>
                <p>Precio Unitario: ${item.price.toFixed(2)}</p>
              </div>
              <div className="product-quantity">
                <button onClick={() => updateCartItem(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateCartItem(item.id, item.quantity + 1)}>+</button>
              </div>
              <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: { id: item.id } })}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <p className="product-price">Precio Total: ${calculateTotalPrice().toFixed(2)}</p>
      <button className="checkout">Proceder al Pago</button>
    </div>
  );
}

export default Cart;