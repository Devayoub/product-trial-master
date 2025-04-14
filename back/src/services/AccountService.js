/**
 * Account service
 */

const bcrypt = require('bcryptjs')
const User = require('../models/User') // Mongoose model (ou ton ORM)
const jwt = require('jsonwebtoken')
const config = require('config')
const {
  EMAIL_ALREADY_IN_USE,
  REGISTRED_SECCESSFULLY,
  INVALID_EMAIL_PASSWORD,
  ADMIN_EMAIL
} = require('../constants')

/**
 * Register a new User
 * @param {Object} data user data
 * @returns {Object}  response with message
 */

const registerUser = async ({ username, firstname, email, password }) => {
  const existing = await User.findOne({ email })
  if (existing) {
    throw new Error(EMAIL_ALREADY_IN_USE)
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = new User({
    username,
    firstname,
    email,
    password: hashedPassword
  })

  await user.save()
  return { message: REGISTRED_SECCESSFULLY }
}

/**
 * Login a User
 * @param {Object} data user data
 * @returns {Object}  response with token
 */

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email })
  if (!user) {
    throw new Error(INVALID_EMAIL_PASSWORD)
  }

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    throw new Error(INVALID_EMAIL_PASSWORD)
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      isAdmin: user.email === ADMIN_EMAIL
    },
    config.jwt.SECRET,
    { expiresIn: config.jwt.TOKEN_EXPIRY_TIME }
  )

  return { token }
}

module.exports = {
  registerUser,
  loginUser
}
