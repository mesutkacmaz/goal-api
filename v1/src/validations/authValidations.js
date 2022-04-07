const Joi = require('joi')

const registerValidation = Joi.object({
  name: Joi.string().required().min(3),
  email: Joi.string().email(),
  password: Joi.string().required().min(6).label('Password'),
  confirmPassword: Joi.any()
    .equal(Joi.ref('password'))
    .required()
    .label('Confirm password')
    .options({ messages: { 'any.only': '{{#label}} does not match' } }),
})

const loginValidation = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().required().min(6),
})

module.exports = {
  registerValidation,
  loginValidation,
}
