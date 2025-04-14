/**
 * cart Service
 */
const Cart = require('../models/Cart')

/**
 * Get the cart for a user
 * @param {string} userId - The user ID
 * @returns {Promise<Cart>} - The cart
 */

const getCart = async (userId) => {
  return await Cart.findOne({ userId }).populate('items.productId')
}

/**
 * Add an item to the cart
 * @param {string} userId - The user ID
 * @param {string} productId - The product ID
 * @param {number} quantity - The quantity to add
 * @returns {Promise<Cart>} - The updated cart
 */

const addToCart = async (userId, productId, quantity) => {
  let cart = await Cart.findOne({ userId })
  if (!cart) cart = new Cart({ userId, items: [] })

  const itemIndex = cart.items.findIndex((i) => i.productId === productId)
  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += quantity
  } else {
    cart.items.push({ productId, quantity })
  }
  return cart.save()
}

/**
 * Remove an item from the cart
 * @param {string} userId - The user ID
 * @param {string} productId - The product ID
 * @returns {Promise<Cart>} - The updated cart
 */
const removeFromCart = async (userId, productId) => {
  const cart = await Cart.findOne({ userId })
  if (!cart) return
  cart.items = cart.items.filter((i) => i.productId !== productId)
  return cart.save()
}

module.exports = { getCart, addToCart, removeFromCart }
