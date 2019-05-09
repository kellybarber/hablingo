const mongoose = require('mongoose')
const dbURI    = process.env.MONGODB_URI || 'mongodb://localhost/hablingo'

mongoose.connect(dbURI, { useNewUrlParser : true, useCreateIndex : true })

mongoose.connection.on('connected',    ()  => console.info(`Mongoose connected to ${dbURI}`))
mongoose.connection.on('disconnected', ()  => console.info(`Mongoose disconnected`))
mongoose.connection.on('error',        err => console.error(`Mongoose error ${err}`))

process.on('SIGINT', async () => {
  await mongoose.connection.close()
  console.info('Mongoose disconnected through app termination')
  process.exit(0)
})

module.exports.User = require('./user')
module.exports.Verb = require('./verb')