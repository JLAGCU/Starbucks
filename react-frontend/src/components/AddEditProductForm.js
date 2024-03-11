import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  createProduct,
  updateProduct,
  getProductById,
} from "../services/ProductService";

// The AddEditProductForm component is responsible for both adding new products and editing existing ones.
const AddEditProductForm = ({ productId }) => {
  // State for the product form, initializes with empty or default values
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  // useHistory hook from react-router-dom to programmatically navigate the user
  const history = useHistory();

  // useEffect hook to fetch the product details when a productId is provided
  useEffect(() => {
    const fetchProduct = async () => {
      // If a productId is given, fetch the product details and update the state
      if (productId) {
        const response = await getProductById(productId);
        setProduct(response.data);
      }
    };
    fetchProduct();
  }, [productId]); // Dependency array with productId ensures this effect runs when productId changes

  // Handler for form input changes, updating the state with the new values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submit action
    if (productId) {
      // If a productId exists, it means we're updating an existing product
      await updateProduct(productId, product);
    } else {
      // If no productId, we're creating a new product
      await createProduct(product);
    }
    history.push("/"); // Navigate back to the homepage after form submission
  };

  // The form element with inputs bound to the product state
  // The form will display inputs for name, description, price, category, and image URL
  // It will display 'Update Product' or 'Add Product' depending on whether a productId is provided
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <textarea
        name="description"
        value={product.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <input
        type="text"
        name="category"
        value={product.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <input
        type="text"
        name="image"
        value={product.image}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <button type="submit">{productId ? "Update" : "Add"} Product</button>
    </form>
  );
};

export default AddEditProductForm;
