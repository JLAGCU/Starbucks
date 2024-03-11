import React from "react";
import ProductCard from "./ProductCard";

// Define the ProductList component that takes in products and onDelete as props.
const ProductList = ({ products, onDelete }) => {
  // Return a container div that maps over the products array, creating a ProductCard for each product.
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ProductList;
