const mongoose = require('mongoose')

const DB_URI = process.env.DB || 'mongodb://localhost:27017/urlshortener'

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const connection = mongoose.connection

module.exports = connection