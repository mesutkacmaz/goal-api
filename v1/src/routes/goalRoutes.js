const express = require('express')
const router = express.Router()

const schemas = require('../validations/goalValidations')
const validate = require('../middlewares/validateMiddleware')

const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController')

router
  .route('/')
  .get(getGoals)
  .post(validate(schemas.setGoalValidation), setGoal)
router.route('/:id').patch(updateGoal).delete(deleteGoal)

module.exports = router
