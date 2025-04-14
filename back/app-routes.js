const _ = require('lodash')
const routes = require('./src/routes')
const helper = require('./src/common/helper')
const config = require('config')
const auth = require('./src/common/auth')
const HttpStatus = require('http-status-codes') // Ensure you import HttpStatus

/**
 * Configure all routes for express app
 * @param app the express app
 */
module.exports = (app) => {
  // Load all routes
  _.each(routes, (verbs, path) => {
    _.each(verbs, (def, verb) => {
      const controllerPath = `./src/controllers/${def.controller}`
      const method = require(controllerPath)[def.method]; // eslint-disable-line
      if (!method) {
        throw new Error(`${def.method} is undefined`)
      }

      const actions = []
      actions.push((req, res, next) => {
        req.signature = `${def.controller}#${def.method}`
        next()
      })

      // Authentication and Authorization
      if (!def.isPublic) {
        actions.push(auth(def.isAdmin))
      }

      actions.push(method)
      app.route(`${config.API_PREFIX}${path}`)[verb](helper.autoWrapExpress(actions))
    })
  })

  // Check if the route is not found or HTTP method is not supported
  app.all('*', (req, res) => {
    const route = routes[req.baseUrl]
    if (route) {
      res
        .status(HttpStatus.METHOD_NOT_ALLOWED)
        .json({ message: 'The requested HTTP method is not supported.' })
    } else {
      res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'The requested resource cannot be found.' })
    }
  })
}
