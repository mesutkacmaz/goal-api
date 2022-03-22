const express = require('express')
const config = require('./config')
const { goalRoutes } = require('./routes')

config()

const app = express()
app.use(express.json())

app.listen(process.env.APP_PORT, () => {
  console.log(
    `Server started ${process.env.NODE_ENV} mode on http://localhost:${process.env.APP_PORT}`
  )
  app.use('/api/goals', goalRoutes)
})
