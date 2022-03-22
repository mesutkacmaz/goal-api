const { list, insert, modify, remove } = require('../services/goalService')

const getGoals = async (req, res) => {
  try {
    const goals = await list()
    res.status(200).json(goals)
  } catch (err) {
    res.status(500)
    throw new Error(err)
  }
}

const setGoal = async (req, res) => {
  try {
    const goal = await insert(req.body)
    res.status(201).json(goal)
  } catch (err) {
    res.status(500)
    throw new Error(err)
  }
}

const updateGoal = async (req, res) => {
  if (!req.params.id) {
    res.status(400)
    throw new Error('Can not find goal with the given id')
  }

  try {
    const updatedGoal = await modify(req.body, req.params.id)
    res.status(200).json(updatedGoal)
  } catch (err) {
    res.status(500)
    throw new Error(err)
  }
}

const deleteGoal = async (req, res) => {
  if (!req.params.id) {
    res.status(400)
    throw new Error('Id info is not correct')
  }

  try {
    const deletedGoal = await remove(req.params.id)
    if (!deletedGoal) {
      res.status(404)
      throw new Error('Can not find goal with given id')
    }
    res.status(200).json(deletedGoal)
  } catch (err) {
    res.status(500)
    throw new Error(err)
  }
}

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
