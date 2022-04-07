const express = require('express')
const router = express.Router()

const schemas = require('../validations/goalValidations')
const validate = require('../middlewares/validateMiddleware')
const authenticate = require('../middlewares/authMiddleware')

const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController')

router
  .route('/')
  .get(authenticate, getGoals)
  .post(authenticate, validate(schemas.setGoalValidation), setGoal)
router
  .route('/:id')
  .patch(authenticate, validate(schemas.updateGoalValidation), updateGoal)
  .delete(authenticate, deleteGoal)

module.exports = router
