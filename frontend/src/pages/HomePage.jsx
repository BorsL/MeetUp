import React, { useEffect } from 'react';
import { useProductStore } from '../store/event';
import ProductCard from '../components/ProductCard';
import Background from '../components/Background';
const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log(products);

  return (
  <div className="container mx-auto px-4 py-6">
  <Background/>

      <h1 className="text-3xl font-semibold text-center mt-20 mb-6"></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
