import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import categories from './Data';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    let foundProduct = null;

    // Busca el producto en todas las categorías
    categories.forEach((category) => {
      const found = category.products.find((prod) => prod.id === itemId);
      if (found) {
        foundProduct = found;
      }
    });

    setProduct(foundProduct);
  }, [itemId]);

  if (!product) {
    return <div>No se encontró el producto.</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      {/* Agrega un botón para agregar al carrito */}
    </div>
  );
}

export default ItemDetailContainer;