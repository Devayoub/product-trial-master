/**
 * wishlist controller
 */

const wishlistService = require('../services/WishlistService')

/**
 * Get the wishlist for the user
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
exports.get = async (req, res) =>
  res.json(await wishlistService.getWishlist(req.user.id) || {})

/**
 * Add an item to the wishlist
 * @param {Object} req - The request object containing product ID
 * @param {Object} res - The response object
 */
exports.add = async (req, res) => {
  const { productId } = req.body
  const wishlist = await wishlistService.addToWishlist(req.user.id, productId)
  res.json(wishlist)
}

/**
 * Remove an item from the wishlist
 * @param {Object} req - The request object containing product ID
 * @param {Object} res - The response object
 */
exports.remove = async (req, res) => {
  const { productId } = req.body
  const wishlist = await wishlistService.removeFromWishlist(
    req.user.id,
    productId
  )
  res.json(wishlist)
}
