const {
  list,
  insert,
  modify,
  remove,
  findById,
} = require('../services/goalService')

const getGoals = async (req, res) => {
  try {
    const goals = await list({ user: req.user._id })
    res.status(200).json(goals)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong!' })
  }
}

const setGoal = async (req, res) => {
  try {
    req.body.user = req.user
    const goal = await insert(req.body)
    res.status(201).json(goal)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

const updateGoal = async (req, res) => {
  try {
    const goal = await findById(req.params.id)

    if (!goal) {
      return res.status(400).json({ message: 'Goal not found' })
    }

    if (goal.user.toString() !== req.user._id) {
      return res
        .status(403)
        .json({ message: 'You are not authorized to update this content' })
    }

    const updatedGoal = await modify(req.body, req.params.id)
    res.status(200).json(updatedGoal)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong!' })
  }
}

const deleteGoal = async (req, res) => {
  try {
    const goal = await findById(req.params.id)

    if (!goal) {
      return res.status(400).json({ message: 'Goal not found' })
    }

    if (goal.user.toString() !== req.user._id) {
      return res
        .status(403)
        .json({ message: 'You are not authorized to delete this content' })
    }

    const deletedGoal = await remove(req.params.id)
    res.status(200).json(deletedGoal)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong!' })
  }
}

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
