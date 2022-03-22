const getGoals = (req, res) => {
  res.status(200).json({ message: 'Get goals' })
}

const setGoal = (req, res) => {
  res.status(201).json({ message: 'Set goal' })
}

const updateGoal = (req, res) => {
  res.status(200).json({ message: 'Update goal' })
}

const deleteGoal = (req, res) => {
  res.status(200).json({ message: 'Delete goal' })
}

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
