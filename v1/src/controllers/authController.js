const { insert, findOne } = require('../services/authService')
const {
  passwordToHash,
  comparePasswords,
  generateToken,
} = require('../scripts/utils/helper')

const register = async (req, res) => {
  try {
    const hashedPassword = await passwordToHash(req.body.password)

    const user = await insert({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    })

    res.status(201).json(user)
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: 'User already exists' })
    }

    res.status(500).json({ message: 'Something went wrong!' })
  }
}

const login = async (req, res) => {
  try {
    let user = await findOne(req.body.email)

    if (!user) {
      return res.status(400).json({ message: 'You have to register first' })
    }

    if (user && (await comparePasswords(req.body.password, user.password))) {
      user = {
        ...user.toObject(),
        token: generateToken(user),
      }

      delete user.password

      res.status(200).json(user)
    } else {
      return res.status(400).json({ message: 'Invalid credentials' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' })
  }
}

const me = (req, res) => {
  res.status(200).json(req.user)
}

module.exports = {
  register,
  login,
  me,
}
