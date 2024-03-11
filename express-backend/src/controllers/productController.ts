import { Request, Response } from 'express';
import pool from '../models/db';
import mysql from 'mysql2';

/**
 * Retrieves all products and sends a JSON response.
 * @param req The Express request object.
 * @param res The Express response object.
 */
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query('SELECT * FROM products') as [mysql.RowDataPacket[], mysql.FieldPacket[]];
    res.json(rows);
  } catch (error) {
    // Handle errors and send an appropriate error response
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).send(errorMessage);
  }
};

/**
 * Retrieves a product by ID and sends a JSON response.
 * @param req The Express request object containing the product ID.
 * @param res The Express response object.
 */
export const getProductById = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [req.params.id]) as [mysql.RowDataPacket[], mysql.FieldPacket[]];
    if (rows.length === 0) {
      return res.status(404).send('Product not found.');
    }
    res.json(rows[0]);
  } catch (error) {
    // Handle errors and send an appropriate error response
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).send(errorMessage);
  }
};

/**
 * Creates a new product and sends a JSON response with the created product.
 * @param req The Express request object containing product data in the request body.
 * @param res The Express response object.
 */
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, category } = req.body;
    const [result] = await pool.query(
      'INSERT INTO products (name, description, price, category) VALUES (?, ?, ?, ?)',
      [name, description, price, category]
    ) as [mysql.ResultSetHeader, mysql.FieldPacket[]];
    const insertId = result.insertId;
    const [createdProduct] = await pool.query('SELECT * FROM products WHERE id = ?', [insertId]) as [mysql.RowDataPacket[], mysql.FieldPacket[]];
    res.status(201).json(createdProduct[0]);
  } catch (error) {
    // Handle errors and send an appropriate error response
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).send(errorMessage);
  }
};

/**
 * Updates an existing product and sends a JSON response with the updated product.
 * @param req The Express request object containing the product ID and updated data in the request body.
 * @param res The Express response object.
 */
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, category } = req.body;
    const [result] = await pool.query(
      'UPDATE products SET name = ?, description = ?, price = ?, category = ? WHERE id = ?',
      [name, description, price, category, req.params.id]
    ) as [mysql.OkPacket, mysql.FieldPacket[]];

    if (result.affectedRows === 0) {
      return res.status(404).send('Product not found.');
    }

    const [updatedProduct] = await pool.query('SELECT * FROM products WHERE id = ?', [req.params.id]) as [mysql.RowDataPacket[], mysql.FieldPacket[]];
    res.json(updatedProduct[0]);
  } catch (error) {
    // Handle errors and send an appropriate error response
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).send(errorMessage);
  }
};

/**
 * Deletes a product and sends a JSON response indicating success or failure.
 * @param req The Express request object containing the product ID.
 * @param res The Express response object.
 */
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const [result] = await pool.query('DELETE FROM products WHERE id = ?', [req.params.id]) as [mysql.OkPacket, mysql.FieldPacket[]];
    if (result.affectedRows === 0) {
      return res.status(404).send('Product not found.');
    }
    res.status(200).send('Product deleted successfully.');
  } catch (error) {
    // Handle errors and send an appropriate error response
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).send(errorMessage);
  }
};
