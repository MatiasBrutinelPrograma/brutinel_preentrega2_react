import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import categories from './Data';
import { useCart } from './CartContext'; // Importa useCart desde CartContext

function ItemListContainer() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const { addToCart } = useCart(); // Usa useCart del contexto

  useEffect(() => {
    const foundCategory = categories.find((cat) => cat.id === categoryId);
    setCategory(foundCategory);
  }, [categoryId]);

  if (!category) {
    return <div>No se encontró la categoría.</div>;
  }

  const handleAddToCart = (product) => {
    // Llama a la función addToCart del contexto para agregar el producto al carrito
    addToCart(product);
  };

  return (
    <div>
      <h2>{category.name}</h2>
      <ul>
        {category.products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;

