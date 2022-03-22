const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const setGoalValidation = Joi.object({
  text: Joi.string().required().min(3),
  userId: Joi.objectId(),
})

module.exports = {
  setGoalValidation,
}
