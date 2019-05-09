const mongoose = require('mongoose')

const tense = {
  translation : String,
  yo          : String,
  tú          : String,
  usted       : String,
  nosotros    : String,
  vosotros    : String,
  ustedes     : String
}

const VerbSchema = new mongoose.Schema({
  infinitive : { 
    type   : String,
    unique : true
  },
  translation : {
    type : String
  },
  tenses : {
    indicativo : {
      presente            : tense,
      futuro              : tense,
      imperfecto          : tense,
      pretérito           : tense,
      condicional         : tense,
      presentePerfecto    : tense,
      futuroPerfecto      : tense,
      pluscuamperfecto    : tense,
      pretéritoAnterior   : tense,
      condicionalPerfecto : tense
    },
    subjunctivo : {
      presente            : tense,
      futuro              : tense,
      imperfecto          : tense,
      presentePerfecto    : tense,
      futuroPerfecto      : tense,
      pluscuamperfecto    : tense
    },
    imperativoAfirmativo : {
      presente            : tense
    },
    imperativoNegativo : {
      presente            : tense
    }
  }
})

module.exports = mongoose.model('Verb', VerbSchema)