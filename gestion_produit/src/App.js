// App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

const App = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleSelectProduct = (id) => {
    setSelectedProductId(id);
  };

  return (
    <div className="app">
      <ProductList onSelectProduct={handleSelectProduct} />
      <ProductDetail productId={selectedProductId} />
    </div>
  );
};

export default App;
