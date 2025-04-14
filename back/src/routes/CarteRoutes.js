/**
 * Cart API Routes
 */

module.exports = {
  '/cart': {
    get: {
      controller: 'CartController',
      method: 'get'
    },
    post: {
      controller: 'CartController',
      method: 'add'
    },
    delete: {
      controller: 'CartController',
      method: 'remove'
    }
  }
}
