const mongoose = require('mongoose')

const DeckVerbSchema = new mongoose.Schema({
  infinitive : String,
  mood       : String,
  tense      : String
})

const DeckSchema = new mongoose.Schema({
  user  : {
    type : mongoose.Schema.Types.ObjectId,
    ref  : 'User'
  },
  title : String,
  verbs : [DeckVerbSchema]
})

module.exports = mongoose.model('Deck', DeckSchema)