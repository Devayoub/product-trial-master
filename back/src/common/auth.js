/**
 * Authentication and authorization middleware
 */
const errors = require('http-errors')
const jwt = require('jsonwebtoken')
const { User } = require('../models')
const config = require('config')

/**
 * Check if the request is authenticated/authorized.
 * @param {Array} roles the allowed roles, optional
 */
function auth (IsAdmin) {
  return function authMiddleware (req, res, next) {
    // Parse the token from request header
    let token
    if (req.headers.authorization) {
      const authHeaderParts = req.headers.authorization.split(' ')
      if (authHeaderParts.length === 2 && authHeaderParts[0] === 'Bearer') {
        token = authHeaderParts[1]
      }
    }

    if (!token) {
      throw new errors.Unauthorized(
        'Action is not allowed for anonymous or invalid token'
      )
    }

    let user

    try {
      user = jwt.verify(token, config.jwt.SECRET)
    } catch (e) {
      throw new errors.Unauthorized(`Wrong or expired token: ${e.message}`)
    }

    // check authorization
    if (IsAdmin && !user.isAdmin) {
      throw new errors.Forbidden('You are not allowed to perform this action')
    }

    // get user
    User.findById(user.id)
      .then((u) => {
        if (!u) {
          return next(new errors.Unauthorized('User is not found'))
        }

        // set user to the request
        req.user = u
        return next()
      })
      .catch((e) => next(e))
  }
}

module.exports = auth
