import * as productModel from '../models/productModel';

/**
 * Retrieves all products from the database.
 * @returns A promise that resolves to an array of all product records.
 */
export const getAllProducts = async () => {
  return await productModel.getAllProducts();
};

/**
 * Retrieves a single product by its ID.
 * @param id The unique identifier of the product.
 * @returns A promise that resolves to the product record if found, otherwise null.
 */
export const getProductById = async (id: string) => {
  return await productModel.getProductById(id);
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
  return await productModel.createProduct(name, description, price, category);
};

/**
 * Updates an existing product in the database.
 * @param id The ID of the product to update.
 * @param name The new name of the product.
 * @param description The new description of the product.
 * @param price The new price of the product.
 * @param category The new category of the product.
 * @returns A promise that resolves to the updated product record.
 * @throws An error if the product to update is not found.
 */
export const updateProduct = async (id: string, name: string, description: string, price: number, category: string) => {
  const existingProduct = await productModel.getProductById(id);
  if (!existingProduct) {
    throw new Error('Product not found');
  }
  return await productModel.updateProduct(id, name, description, price, category);
};

/**
 * Deletes a product from the database.
 * @param id The ID of the product to delete.
 * @returns A promise that resolves to a boolean indicating whether the deletion was successful.
 * @throws An error if the product to delete is not found.
 */
export const deleteProduct = async (id: string) => {
  const existingProduct = await productModel.getProductById(id);
  if (!existingProduct) {
    throw new Error('Product not found');
  }
  return await productModel.deleteProduct(id);
};
