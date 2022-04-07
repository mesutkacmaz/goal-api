const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const passwordToHash = async (password) => {
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  return hashedPassword
}

const comparePasswords = async (enteredPassword, password) => {
  return bcrypt.compare(enteredPassword, password)
}

const generateToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = {
  passwordToHash,
  comparePasswords,
  generateToken,
}
