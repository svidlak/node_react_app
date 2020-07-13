const mongoose = require('mongoose')
const keys = require('./keys')

const uri = `mongodb+srv://${keys.MONGO_USER}:${keys.MONGO_PASSWORD}@cluster0-s9gtw.mongodb.net/herolo?retryWrites=true&w=majority`

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })

module.exports = mongoose.connection
