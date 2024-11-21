// ProductList.js
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductCard from './ProductCard';

const ProductList = ({ onSelectProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div className="product-list">
      <h1>Liste des produits</h1>
      {products.length === 0 ? (
        <p>Aucun produit trouvé.</p>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} onClick={onSelectProduct} />
        ))
      )}
    </div>
  );
};

export default ProductList;
