import React, { createContext, useContext, useReducer } from 'react';

// Define el contexto
const CartContext = createContext();

// Define el proveedor del contexto
export const CartProvider = ({ children }) => {
  const initialState = {
    cartItems: [], // Aquí almacena los productos en el carrito
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Función de reducción para actualizar el estado del carrito
function cartReducer(state, action) {
  // Implementa las acciones para agregar, actualizar y eliminar productos del carrito aquí
  switch (action.type) {
    case 'ADD_TO_CART':
      // Implementa la lógica para agregar un producto al carrito
      return { ...state, cartItems: [...state.cartItems, action.payload] };

      case 'UPDATE_CART_ITEM':
        // Implementa la lógica para actualizar la cantidad de un producto en el carrito
        return {
          ...state, cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };

    case 'REMOVE_FROM_CART':
      // Implementa la lógica para eliminar un producto del carrito
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
}

// Función personalizada para usar el contexto en otros componentes
export function useCart() {
  return useContext(CartContext);
}