const router = require('express').Router()

const { verifyUser } = require('../middleware/auth')
const { 
  setDecks,
  createDeck
 } = require('../controllers/deckController')

router.get('/', verifyUser, setDecks)
router.post('/create-deck', verifyUser, createDeck)

module.exports = router