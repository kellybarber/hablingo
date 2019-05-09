const mongoose = require('mongoose')

const TenseSchema = new mongoose.Schema({
  translation : String,
  yo          : String,
  tú          : String,
  usted       : String,
  nosotros    : String,
  vosotros    : String,
  ustedes     : String
})

module.exports = mongoose.model('Tense', TenseSchema)