const router = require('express').Router()

const { requestVerbs } = require('../controllers/verbController')

router.get('/', requestVerbs)

module.exports = router