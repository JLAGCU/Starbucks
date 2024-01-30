import pool from './db';
import mysql from 'mysql2';

/**
 * Retrieves all products from the database.
 * @returns A promise that resolves to an array of all product records.
 */
export const getAllProducts = async () => {
  // Execute a SQL query to select all products from the database
  const [rows] = await pool.query('SELECT * FROM products') as [mysql.RowDataPacket[], mysql.FieldPacket[]];
  return rows;
};

/**
 * Retrieves a single product by its ID.
 * @param id The unique identifier of the product.
 * @returns A promise that resolves to the product record if found, otherwise null.
 */
export const getProductById = async (id: string) => {
  // Execute a SQL query to select a product by ID from the database
  const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [id]) as [mysql.RowDataPacket[], mysql.FieldPacket[]];
  return rows.length > 0 ? rows[0] : null;
};

/**
 * Creates a new product in the database.
 * @param name The name of the product.
 * @param description The description of the product.
 * @param price The price of the product.
 * @param category The category of the product.
 * @returns A promise that resolves to the newly created product record.
 */
export const createProduct = async (name: string, description: string, price: number, category: string) => {
  // Execute a SQL query to insert a new product into the database
  const [result] = await pool.query(
    'INSERT INTO products (name, description, price, category) VALUES (?, ?, ?, ?)',
    [name, description, price, category]
  ) as [mysql.ResultSetHeader, mysql.FieldPacket[]];

  // Retrieve the ID of the newly inserted product
  const insertId = result.insertId;

  // Execute a SQL query to select the newly created product from the database
  const [createdProduct] = await pool.query('SELECT * FROM products WHERE id = ?', [insertId]) as [mysql.RowDataPacket[], mysql.FieldPacket[]];
  
  return createdProduct[0];
};

/**
 * Updates an existing product in the database.
 * @param id The ID of the product to update.
 * @param name The new name of the product.
 * @param description The new description of the product.
 * @param price The new price of the product.
 * @param category The new category of the product.
 */
export const updateProduct = async (id: string, name: string, description: string, price: number, category: string) => {
  // Execute a SQL query to update a product in the database
  await pool.query(
    'UPDATE products SET name = ?, description = ?, price = ?, category = ? WHERE id = ?',
    [name, description, price, category, id]
  ) as [mysql.OkPacket, mysql.FieldPacket[]];

  // Execute a SQL query to select the updated product from the database
  const [updatedProduct] = await pool.query('SELECT * FROM products WHERE id = ?', [id]) as [mysql.RowDataPacket[], mysql.FieldPacket[]];
  
  return updatedProduct[0];
};

/**
 * Deletes a product from the database.
 * @param id The ID of the product to delete.
 * @returns A promise that resolves to a boolean indicating whether the deletion was successful.
 */
export const deleteProduct = async (id: string) => {
  // Execute a SQL query to delete a product from the database
  const [result] = await pool.query('DELETE FROM products WHERE id = ?', [id]) as [mysql.OkPacket, mysql.FieldPacket[]];
  
  // Check if the product was successfully deleted
  return result.affectedRows > 0;
};
