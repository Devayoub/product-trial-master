/**
 * Product Service
 */
const Product = require('../models/Product') // Mongoose model (or your ORM)
const { PRODUCT_NOT_FOUND, PRODUCT_DELETED } = require('../constants')

/**
 * Create a new product
 * @param {Object} data - The product data
 * @returns {Promise<Product>} - The created product
 */
const createProduct = async (data) => {
  const product = new Product(data)
  await product.save()
  return product
}

/*
 * Get all products
 * @returns {Promise<Product[]>} - The list of products
 */

const getAllProducts = async () => {
  return await Product.find()
}

/**
 * Get a product by ID
 * @param {string} id - The product ID
 * @returns {Promise<Product>} - The product
 */

const getProductById = async (id) => {
  const product = await Product.findById(id)
  if (!product) throw new Error(PRODUCT_NOT_FOUND)
  return product
}

/**
 * Update a product by ID
 * @param {string} id - The product ID
 * @param {Object} data - The product data to update
 * @returns {Promise<Product>} - The updated product
 */
const updateProduct = async (id, data) => {
  const updated = await Product.findByIdAndUpdate(
    id,
    { ...data, updatedAt: Date.now() },
    { new: true }
  )
  if (!updated) throw new Error(PRODUCT_NOT_FOUND)
  return updated
}

/**
 * Delete a product by ID
 * @param {string} id - The product ID
 * @returns {Promise<Object>} - The deletion result
 */

const deleteProduct = async (id) => {
  const deleted = await Product.findByIdAndDelete(id)
  if (!deleted) throw new Error(PRODUCT_NOT_FOUND)
  return { message: PRODUCT_DELETED }
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
}
