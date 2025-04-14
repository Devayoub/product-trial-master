/**
 * Product API Routes
 */

module.exports = {
  '/products': {
    post: {
      controller: 'ProductController',
      method: 'create',
      isAdmin: true
    },
    get: {
      controller: 'ProductController',
      method: 'getAll'
    }
  },
  '/products/:id': {
    get: {
      controller: 'ProductController',
      method: 'getById'
    },
    patch: {
      controller: 'ProductController',
      method: 'update',
      isAdmin: true
    },
    delete: {
      controller: 'ProductController',
      method: 'remove',
      isAdmin: true
    }
  }
}
