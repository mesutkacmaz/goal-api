const Goal = require('../models/Goal')

const list = () => {
  return Goal.find()
}

const insert = (goal) => {
  return Goal.create(goal)
}

const modify = (goal, id) => {
  return Goal.findByIdAndUpdate(id, goal, { new: true })
}

const remove = (id) => {
  return Goal.findByIdAndDelete(id)
}

module.exports = {
  list,
  insert,
  modify,
  remove,
}
