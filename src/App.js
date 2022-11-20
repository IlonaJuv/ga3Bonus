import { useState } from 'react';
//1.1
const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    const updateProducts = products.map((product, i) => {
      if (i === productId) {
        // Increment the clicked counter
        return {
          ...product,
          count: product.count + 1
        };
        
      } else {
        // The rest haven't changed
        return product;
      }
    });
    setProducts(updateProducts);
  } 

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
}
