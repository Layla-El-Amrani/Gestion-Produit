// api.js
export const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost/api/produit.php');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  };
  
  export const fetchProductDetails = async (id) => {
    try {
      const response = await fetch(`http://localhost/api/unProduit.php?id=${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching product details:', error);
      return null;
    }
  };
  