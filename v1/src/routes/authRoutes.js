const express = require('express')
const router = express.Router()

const schemas = require('../validations/authValidations')
const validate = require('../middlewares/validateMiddleware')
const authenticate = require('../middlewares/authMiddleware')

const { register, login, me } = require('../controllers/authController')

router.post('/register', validate(schemas.registerValidation), register)
router.post('/login', validate(schemas.loginValidation), login)
router.get('/me', authenticate, me)

module.exports = router
