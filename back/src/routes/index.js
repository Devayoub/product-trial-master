/**
 * Dynamically imports all routes in the current directory
 */

const fs = require('fs')
const path = require('path')
const _ = require('lodash')

/**
 * Dynamically import all routes in the current directory
 * @returns {Object} the routes object
 */

const routes = fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js' && file.endsWith('Routes.js'))
  .reduce((acc, file) => {
    const route = require(path.join(__dirname, file))
    return _.extend(acc, route)
  }, {})

module.exports = routes
