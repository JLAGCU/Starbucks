# Starbucks
 CST-391 Milestone

# Starbucks Product Management API Documentation

## Introduction
- Overview of the API.
- Base URL: `http://localhost:3000/api`.

## Endpoints
### 1. Get All Products
- **Endpoint**: `/products`
- **Method**: `GET`
- **Description**: Retrieves a list of all products.
- **Request Parameters**: None
- **Response**:
  - Status Code: `200 OK`
  - JSON Array of products.
- **Sample Request**:
  ```
  GET /api/products
  ```
- **Sample Response**:
  ```json
  [
    {
        "id": 1,
        "name": "Banana Walnut & Pecan Loaf",
        "description": "Bananas, walnuts and pecans mixed into a moist, nutty, classic banana bread.",
        "price": "1.00",
        "category": "Bakery",
        "createdAt": "2024-01-30T05:14:46.000Z"
    }
  ]
  ```

### 2. Get Product by ID
- **Endpoint**: `/products/:id`
- **Method**: `GET`
- **Description**: Retrieves a product by its ID.
- **Request Parameters**:
  - `id` (Path parameter): The ID of the product to retrieve.
- **Response**:
  - Status Code: `200 OK` if found, `404 Not Found` if not found.
  - JSON object representing the product.
- **Sample Request**:
  ```
  GET /api/products/1
  ```
- **Sample Response (Found)**:
  ```json
  {
        "id": 1,
        "name": "Banana Walnut & Pecan Loaf",
        "description": "Bananas, walnuts and pecans mixed into a moist, nutty, classic banana bread.",
        "price": "1.00",
        "category": "Bakery",
        "createdAt": "2024-01-30T05:14:46.000Z"
    }
  ```
- **Sample Response (Not Found)**:
  ```
  Product not found.
  ```

### 3. Create Product
- **Endpoint**: `/products`
- **Method**: `POST`
- **Description**: Creates a new product.
- **Request Body**: JSON object with product details (name, description, price, category).
- **Response**:
  - Status Code: `201 Created`
  - JSON object representing the created product.
- **Sample Request**:
```
POST /api/products
```
  ```json
  {
  "name": "Chocolate Cake Pop",
  "description": "Bite-sized chocolate cake mixed with chocolate buttercream, dipped in chocolaty icing and topped with white sprinkles.",
  "price": 2.00,
  "category": "Bakery"
    }
  ```
- **Sample Response**:
  ```json
  {
    "id": 2,
    "name": "Chocolate Cake Pop",
    "description": "Bite-sized chocolate cake mixed with chocolate buttercream, dipped in chocolaty icing and topped with white sprinkles.",
    "price": 2.00,
    "category": "Bakery"
  }
  ```

### 4. Update Product
- **Endpoint**: `/products/:id`
- **Method**: `PUT`
- **Description**: Updates an existing product by its ID.
- **Request Parameters**:
  - `id` (Path parameter): The ID of the product to update.
- **Request Body**: JSON object with updated product details (name, description, price, category).
- **Response**:
  - Status Code: `200 OK` if updated, `404 Not Found` if not found.
  - JSON object representing the updated product.
- **Sample Request**:
```
PUT /api/products/2
```
  ```json
  {
    "name": "Chocolate Cake Pop (50% OFF)",
    "description": "Bite-sized chocolate cake mixed with chocolate buttercream, dipped in chocolaty icing and topped with white sprinkles.",
    "price": 1.00,
    "category": "Bakery"
  }
  ```
- **Sample Response (Updated)**:
  ```json
  {
    "id": 2,
    "name": "Chocolate Cake Pop (50% OFF)",
    "description": "Bite-sized chocolate cake mixed with chocolate buttercream, dipped in chocolaty icing and topped with white sprinkles.",
    "price": 1.00,
    "category": "Bakery"
  }
  ```
- **Sample Response (Not Found)**:
  ```
  Product not found.
  ```

### 5. Delete Product
- **Endpoint**: `/products/:id`
- **Method**: `DELETE`
- **Description**: Deletes a product by its ID.
- **Request Parameters**:
  - `id` (Path parameter): The ID of the product to delete.
- **Response**:
  - Status Code: `200 OK` if deleted, `404 Not Found` if not found.
  - Success message.
- **Sample Request**:
  ```
  DELETE /api/products/2
  ```
- **Sample Response (Deleted)**:
  ```
  Product deleted successfully.
  ```
- **Sample Response (Not Found)**:
  ```
  Product not found.
  ```