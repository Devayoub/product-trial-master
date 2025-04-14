const mongoose = require('mongoose')

/**
 * The Cart schema.
 * @class Cart
 *
 */

const schema = new mongoose.Schema(
  {
    userId: {
      required: true,
      type: String
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product', // référence au modèle Product
          required: true
        },
        quantity: {
          type: Number,
          required: true
        }
      }
    ]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Cart', schema)
