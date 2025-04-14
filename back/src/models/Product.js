const mongoose = require('mongoose')

/**
 * The User schema.
 * @class Product
 *
 */
const schema = new mongoose.Schema({
  code: {
    required: true,
    type: String
  },
  name: {
    required: true,
    type: String
  },
  description: {
    required: false,
    type: String
  },
  image: {
    required: false,
    type: String
  },
  category: {
    required: true,
    type: String
  },
  price: {
    required: true,
    type: Number
  },
  quantity: {
    required: true,
    type: Number
  },
  internalReference: {
    required: false,
    type: String
  },
  shellId: {
    required: false,
    type: Number
  },
  inventoryStatus: {
    required: true,
    type: String,
    enum: ['INSTOCK', 'LOWSTOCK', 'OUTOFSTOCK']
  },
  rating: {
    required: false,
    type: Number
  },
  createdAt: {
    required: false,
    type: Number
  },
  updatedAt: {
    required: false,
    type: Number
  }
})

module.exports = mongoose.model('Product', schema)
