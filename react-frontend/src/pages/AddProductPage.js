import React from "react";
import AddEditProductForm from "../components/AddEditProductForm";

// Define the AddProductPage component that renders the UI for adding a new product.
// This component uses the AddEditProductForm for the product creation form.
const AddProductPage = () => (
  <div>
    <h2>Add a New Product</h2>
    <AddEditProductForm />
  </div>
);

export default AddProductPage;
