const mongoose = require('mongoose')

/**
 * The User schema.
 * @class User
 *
 */
const schema = new mongoose.Schema(
  {
    email: {
      required: true,
      type: String
    },

    password: {
      required: false,
      type: String
    },
    username: {
      required: false,
      type: String
    },
    firstname: {
      required: false,
      type: String
    }
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        if (ret._id) {
          ret.id = String(ret._id)
          delete ret._id
        }
        delete ret.__v
        if (ret.gpSessionId) {
          delete ret.gpSessionId
        }
        return ret
      }
    }
  }
)

module.exports = mongoose.model('User', schema)
