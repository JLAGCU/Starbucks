import React from "react";
import { Link } from "react-router-dom";
import { deleteProduct } from "../services/ProductService";

// Define the ProductCard component with product and onDelete props.
const ProductCard = ({ product, onDelete }) => {
  // Define the handleDelete function which will be called when the delete button is clicked.
  const handleDelete = () => {
    // Ask the user for confirmation before deleting the product.
    if (
      window.confirm(`Are you sure you want to delete this ${product.name}?`)
    ) {
      // Call the deleteProduct function and pass in the product ID.
      deleteProduct(product.id)
        .then(() => {
          // If deletion is successful, call the onDelete function passed from the parent component.
          onDelete(product.id);
        })
        .catch((error) => {
          // If there is an error during deletion, log it to the console.
          console.error("There was an error deleting the product!", error);
        });
    }
  };

  // Return JSX for the product card, which includes the product image, name, description, price, and category.
  // It also includes links to edit the product and a button to delete the product.
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "250px", height: "250px", objectFit: "cover" }}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <p>Category: {product.category}</p>
      <Link to={`/edit/${product.id}`} className="edit-btn">
        Edit
      </Link>
      <button onClick={handleDelete} className="delete-btn">
        Delete
      </button>
    </div>
  );
};

export default ProductCard;
