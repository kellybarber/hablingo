const db  = require('../models')

exports.createDeck = async (req, res) => {
  try {
    const { 
      user, 
      body : {
        title,
        verbs
      }
    } = req  
  
    const deck = await db.Deck.create({
      user : user._id,
      title,
      verbs
    })  

    res.send({ deck })

  } catch (error) {
    res.status(422).send({ error })
    console.error('Create Deck Error: ', error)
  }
}

exports.setDecks = async (req, res) => {
  try {
    const { user } = req

    const decks = await db.Deck.find({ user : user._id }, 'title verbs')

    res.send({ decks })

  } catch (error) {
    res.status(422).send({ error })
    console.error('Set Decks Error: ', error)
  }
}