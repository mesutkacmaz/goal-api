const mongoose = require('mongoose')

const db = mongoose.connection

db.once('open', () => {
  console.log('MongoDB Connected...')
})

const connectDB = async () => {
  await mongoose.connect(
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    {
      connectTimeoutMS: 1000,
    }
  )
}

module.exports = {
  connectDB,
}
