import React from 'react';

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map(product => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.category}</p>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default ProductList;
