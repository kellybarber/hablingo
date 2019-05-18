const db = require('../models')

exports.requestVerbs = async (req, res) => {
  try {
    const verbs = await db.Verb.find()

    res.send({ verbs })

  } catch (error) {
    console.error('Request Verbs Error: ', error)
  }
}