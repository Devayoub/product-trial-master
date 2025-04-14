/**
 * User controller
 */

const accountService = require('../services/AccountService')

/**
 * Register a new user
 * @param {Object} req - The request object containing user data
 * @param {Object} res - The response object
 */
const register = async (req, res) => {
  try {
    const result = await accountService.registerUser(req.body)
    res.status(201).json(result)
  } catch (err) {
    res.status(403).json({ error: err.message })
  }
}

/**
 * Login a user
 * @param {Object} req - The request object containing login credentials
 * @param {Object} res - The response object
 */

const login = async (req, res) => {
  try {
    const result = await accountService.loginUser(req.body)
    res.status(200).json(result)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

module.exports = {
  register,
  login
}
