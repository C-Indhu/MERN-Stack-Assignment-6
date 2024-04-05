import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Product 1', category: 'Category A' },
  { id: 2, name: 'Product 2', category: 'Category B' },
  { id: 3, name: 'Product 3', category: 'Category A' },
  { id: 4, name: 'Product 4', category: 'Category C' },
  { id: 5, name: 'Product 5', category: 'Category B' },
];

const ProductFilterApp = () => {
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryClick = (category) => {
    setCategoryFilter(category);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (!categoryFilter || product.category === categoryFilter) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div>
      <h1>Product Filter App</h1>
      <div>
        <h2>Categories</h2>
        <ul>
          <li onClick={() => handleCategoryClick(null)}>All</li>
          <li onClick={() => handleCategoryClick('Category A')}>Category A</li>
          <li onClick={() => handleCategoryClick('Category B')}>Category B</li>
          <li onClick={() => handleCategoryClick('Category C')}>Category C</li>
        </ul>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search products"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div>
        <h2>Filtered Products</h2>
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductFilterApp;