/**
 * Product controller
 */

const productService = require('../services/ProductService')

/**
 * Create a new product
 * @param {Object} req - The request object containing product data
 * @param {Object} res - The response object
 */

const create = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body)
    res.status(201).json(product)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

/**
 * Get all products
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */

const getAll = async (req, res) => {
  const products = await productService.getAllProducts()
  res.status(200).json(products || [])
}

/**
 * Get a product by ID
 * @param {Object} req - The request object containing product ID
 * @param {Object} res - The response object
 */

const getById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id)
    res.status(200).json(product)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

/**
 * Update a product by ID
 * @param {Object} req - The request object containing product ID and data
 * @param {Object} res - The response object
 */

const update = async (req, res) => {
  try {
    const product = await productService.updateProduct(req.params.id, req.body)
    res.status(200).json(product)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

/**
 * Delete a product by ID
 * @param {Object} req - The request object containing product ID
 * @param {Object} res - The response object
 */
const remove = async (req, res) => {
  try {
    const result = await productService.deleteProduct(req.params.id)
    res.status(200).json(result)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove
}
