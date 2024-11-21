// ProductDetail.js
import React, { useEffect, useState } from 'react';
import { fetchProductDetails } from '../api';

const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProductDetails = async () => {
      const data = await fetchProductDetails(productId);
      setProduct(data);
    };
    if (productId) {
      getProductDetails();
    }
  }, [productId]);

  if (!productId) return <p>Sélectionnez un produit pour voir les détails.</p>;

  if (!product) return <p>Chargement des détails...</p>;

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Prix: {product.price}€</p>
      {/* Ajouter plus de détails si nécessaire */}
    </div>
  );
};

export default ProductDetail;
