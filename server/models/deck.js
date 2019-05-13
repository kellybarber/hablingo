const mongoose = require('mongoose')

const DeckSchema = new mongoose.Schema({
  title : String,
  verbs : [{
    type : Schema.Types.ObjectId, 
    ref  : 'Verb'
  }]  
})

module.exports = mongoose.model('Deck', DeckSchema)