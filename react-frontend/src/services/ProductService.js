// Import the axios library for making HTTP requests.
import axios from 'axios';

// Base URL for the products API.
const API_URL = 'http://localhost:5000/api/products';

// Function to get all products. It makes a GET request to the API.
const getAllProducts = () => axios.get(API_URL);

// Function to create a new product. It sends a POST request to the API with the product data.
const createProduct = (productData) => axios.post(API_URL, productData);

// Function to get a single product by ID. It makes a GET request to the API with the product's ID.
const getProductById = (id) => axios.get(`${API_URL}/${id}`);

// Function to update an existing product. It sends a PUT request with the product data to the specific product's API endpoint.
const updateProduct = (id, productData) => axios.put(`${API_URL}/${id}`, productData);

// Function to delete a product. It sends a DELETE request to the specific product's API endpoint.
const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);

// Export all functions to be used in other parts of the application.
export { getAllProducts, createProduct, getProductById, updateProduct, deleteProduct };
