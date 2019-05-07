const mongoose   = require('mongoose')

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
      presente : {
        translation : String,
        yo          : String,
        tú          : String,
        usted       : String,
        nosotros    : String,
        vosotros    : String,
        ustedes     : String
      }
    },
    subjunctivo : {
      presente : {
        translation : String,
        yo          : String,
        tú          : String,
        usted       : String,
        nosotros    : String,
        vosotros    : String,
        ustedes     : String
      }
    },
    imperativoAfirmativo : {
      presente : {
        translation : String,
        yo          : String,
        tú          : String,
        usted       : String,
        nosotros    : String,
        vosotros    : String,
        ustedes     : String
      }
    },
    imperativoNegativo : {
      presente : {
        translation : String,
        yo          : String,
        tú          : String,
        usted       : String,
        nosotros    : String,
        vosotros    : String,
        ustedes     : String
      }
    }
  }
})