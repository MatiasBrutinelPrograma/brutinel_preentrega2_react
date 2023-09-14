import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import categories from './Data';

function ItemListContainer() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const foundCategory = categories.find((cat) => cat.id === categoryId);
    setCategory(foundCategory);
  }, [categoryId]);

  if (!category) {
    return <div>No se encontró la categoría.</div>;
  }

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
            {/* Agrega un botón "Agregar al carrito" */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;
