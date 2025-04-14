/**
 * User API Routes
 */

module.exports = {
  '/account': {
    post: {
      controller: 'AccountController',
      method: 'register',
      isPublic: true
    }
  },
  '/token': {
    post: {
      controller: 'AccountController',
      method: 'login',
      isPublic: true
    }
  }
}
