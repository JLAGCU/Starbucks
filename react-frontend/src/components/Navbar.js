import React from "react";
import { Link } from "react-router-dom";

// Navbar component definition.
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <img
          src="https://logo.com/image-cdn/images/kts928pd/production/b4a2263f35269055d96af1488621635504abe53e-3840x2160.png"
          alt="Starbucks"
          className="navbar-logo"
        />
        <Link to="/" className="hover-text">
          Home
        </Link>
        <Link to="/add" className="hover-text">
          Add New Product
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
