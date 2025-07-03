import React, { useState } from 'react';
import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';
import './style.css';

const productData = [
  { id: 1, name: 'iPhone 15', category: 'Electronics' },
  { id: 2, name: 'T-Shirt', category: 'Clothing' },
  { id: 3, name: 'Laptop', category: 'Electronics' },
  { id: 4, name: 'Sneakers', category: 'Footwear' },
  { id: 5, name: 'Jeans', category: 'Clothing' },
  { id: 6, name: 'Smartwatch', category: 'Electronics' },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(productData.map(p => p.category))];

  const filteredProducts = selectedCategory === 'All'
    ? productData
    : productData.filter(product => product.category === selectedCategory);

  return (
    <div className="container">
      <h1>Product List with Category Filter</h1>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
