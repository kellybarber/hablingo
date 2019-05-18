const db = require('../models')

exports.requestVerbs = async (req, res) => {
  try {
    const verbs = await db.Verb.find().sort({ infinitive : 1 })

    const verbsObject = {}

    for(verb of verbs) {
      verbsObject[verb.infinitive] = verb
    }

    res.send({ verbs : verbsObject })

  } catch (error) {
    console.error('Request Verbs Error: ', error)
  }
}