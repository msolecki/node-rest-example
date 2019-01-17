import mongoose from 'mongoose'

const mongoUri = process.env.MONGODB_URI

if (mongoUri === undefined) {
  console.error('Please set MONGODB_URI env')
  process.exit(1)
}

const db = mongoose.connect(process.env.MONGODB_URI)

module.exports = db
