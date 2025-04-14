/**
 * Initialize database collections. Clear existing collections and insert test data
 */

const models = require('../src/models')
const logger = require('../src/common/logger')
/*
 * Delete records from all collections
 */
const clearDB = async () => {
  await models.User.deleteMany({})
  await models.Product.deleteMany({})
  await models.Wishlist.deleteMany({})
  await models.Cart.deleteMany({})
}

clearDB().then(() => {
  logger.info('Database tables cleared!')
  process.exit()
}).catch((e) => {
  logger.logFullError(e)
  process.exit(1)
})
