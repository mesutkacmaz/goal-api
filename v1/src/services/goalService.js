const Goal = require('../models/Goal')

const list = (where) => {
  return Goal.find(where || {}).populate({
    path: 'user',
    select: 'name email',
  })
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

const findById = (id) => {
  return Goal.findById(id)
}

module.exports = {
  list,
  insert,
  modify,
  remove,
  findById,
}
