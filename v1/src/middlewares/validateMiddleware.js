const validate = (schema) => (req, res, next) => {
  const { value, error } = schema.validate(req.body)

  if (error) {
    const errorMessages = error.details
      .map((detail) => detail.message)
      .join(', ')
    res.status(400)
    throw new Error(errorMessages)
  }

  Object.assign(req, value)
  return next()
}

module.exports = validate
