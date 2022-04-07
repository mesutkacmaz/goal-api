const User = require('../models/User')

const insert = (user) => {
  return User.create(user)
}

const findOne = (email) => {
  return User.findOne({ email })
}

module.exports = {
  insert,
  findOne,
}
