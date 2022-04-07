const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token === undefined) {
    return res
      .status(401)
      .json({ message: 'You have to be authenticate for this action' })
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(403).json({ message: err })
    }

    req.user = decoded.user
    next()
  })
}

module.exports = authenticateToken
