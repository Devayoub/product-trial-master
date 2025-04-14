/**
 * wishlist API Routes
 */

module.exports = {
  '/wishlist': {
    get: {
      controller: 'WishlistController',
      method: 'get'
    },
    post: {
      controller: 'WishlistController',
      method: 'add'
    },
    delete: {
      controller: 'WishlistController',
      method: 'remove'
    }
  }
}
