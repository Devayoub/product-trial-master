/**
 * Wishlist service
 */

const Wishlist = require('../models/Wishlist') // Mongoose model (ou ton ORM)

/**
 * Get the wishlist for a user
 * @param {string} userId - The user ID
 * @returns {Promise<Wishlist>} - The wishlist
 */
const getWishlist = async (userId) => {
  return await Wishlist.findOne({ userId }).populate('items')
}

/**
 * Add an item to the wishlist
 * @param {string} userId - The user ID
 * @param {string} productId - The product ID
 * @returns {Promise<Wishlist>} - The updated wishlist
 */
const addToWishlist = async (userId, productId) => {
  let wishlist = await Wishlist.findOne({ userId })
  if (!wishlist) wishlist = new Wishlist({ userId, items: [] })
  if (!wishlist.items.includes(productId)) wishlist.items.push(productId)
  return wishlist.save()
}

/**
 * Remove an item from the wishlist
 * @param {string} userId - The user ID
 * @param {string} productId - The product ID
 * @returns {Promise<Wishlist>} - The updated wishlist
 */
const removeFromWishlist = async (userId, productId) => {
  const wishlist = await Wishlist.findOne({ userId })
  if (!wishlist) return
  wishlist.items = wishlist.items.filter((i) => i !== productId)
  return wishlist.save()
}

module.exports = { getWishlist, addToWishlist, removeFromWishlist }
