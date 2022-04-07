const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const setGoalValidation = Joi.object({
  text: Joi.string().required().min(3),
  user: Joi.objectId(),
})

const updateGoalValidation = Joi.object({
  text: Joi.string().required().min(3),
})

module.exports = {
  setGoalValidation,
  updateGoalValidation,
}
