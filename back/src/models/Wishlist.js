const mongoose = require('mongoose')

/**
 * The Wishlist schema.
 * @class Wishlist
 *
 */

const schema = new mongoose.Schema({
  userId: {
    required: true,
    type: String
  },
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', // référence au modèle Product
    required: true
  }]
}, { timestamps: true })

module.exports = mongoose.model('Wishlist', schema)
