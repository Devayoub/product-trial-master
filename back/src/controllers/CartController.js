/**
 * Cart controller
 */

const service = require('../services/CartService')

/**
 * Get the cart for the user
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */

const get = async (req, res) => res.json(await service.getCart(req.user.id) || {})

/**
 * Add an item to the cart
 * @param {Object} req - The request object containing product ID and quantity
 * @param {Object} res - The response object
 */

const add = async (req, res) => {
  const { productId, quantity } = req.body
  const cart = await service.addToCart(req.user.id, productId, quantity)
  res.json(cart)
}

/**
 * Remove an item from the cart
 * @param {Object} req - The request object containing product ID
 * @param {Object} res - The response object
 */

const remove = async (req, res) => {
  const { productId } = req.body
  const cart = await service.removeFromCart(req.user.id, productId)
  res.json(cart)
}

module.exports = {
  get,
  add,
  remove
}
