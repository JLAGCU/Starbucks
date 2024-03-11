import React from "react";
import { useParams } from "react-router-dom";
import AddEditProductForm from "../components/AddEditProductForm";

// Define the EditProductPage component responsible for rendering the edit product interface.
// This component facilitates the editing of an existing product by passing the product's ID to the form.
const EditProductPage = () => {
  
  // Extract the 'id' param from the URL using the useParams hook from 'react-router-dom'.
  const { id } = useParams();

  // Render a container for the edit page.
  return (
    <div>
      <h2>Edit Product</h2>
      <AddEditProductForm productId={id} />
    </div>
  );
};

export default EditProductPage;
