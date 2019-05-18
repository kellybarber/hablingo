const router = require('express').Router()

const { verifyUser }   = require('../middleware/auth')
const { requestVerbs } = require('../controllers/verbController')

router.get('/', verifyUser, requestVerbs)

module.exports = router