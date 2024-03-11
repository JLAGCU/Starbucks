import React, { useState, useEffect } from "react";
import { getAllProducts } from "../services/ProductService";
import ProductList from "../components/ProductList";

// Define the HomePage functional component.
const HomePage = () => {
  // Initialize the products state variable to an empty array.
  // This will be used to store the list of products fetched from the API.
  const [products, setProducts] = useState([]);

  // The useEffect hook is used to perform side effects in the component.
  // In this case, it's used to fetch the products from the API after the component mounts.
  useEffect(() => {
    // Define an asynchronous function to fetch products.
    const fetchProducts = async () => {
      // Await the API call to fetch all products and store the response.
      const response = await getAllProducts();
      // Update the products state with the data received from the API response.
      setProducts(response.data);
    };
    // Call the fetchProducts function.
    fetchProducts();
  }, []); // An empty dependency array means this effect runs once on component mount.

  // Define the handleDeleteProduct function that updates the products state to exclude the deleted product.
  const handleDeleteProduct = (id) => {
    // Filter out the product with the matching id and update the state with the new products array.
    setProducts(products.filter((product) => product.id !== id));
  };

  // Return the JSX for the HomePage component.
  return (
    <div>
      <h1>‎</h1>
      <ProductList products={products} onDelete={handleDeleteProduct} />
    </div>
  );
};

export default HomePage;
