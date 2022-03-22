const express = require('express')
const config = require('./config')
const loaders = require('./loaders')
const { goalRoutes } = require('./routes')
const { errorHandler } = require('./middlewares/errorMiddleware')

config()
loaders()

const app = express()
app.use(express.json())

app.listen(process.env.APP_PORT, () => {
  console.log(
    `Server started ${process.env.NODE_ENV} mode on http://localhost:${process.env.APP_PORT}`
  )
  app.use('/api/v1/goals', goalRoutes)
  app.use(errorHandler)
})
