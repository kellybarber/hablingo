const express    = require('express')
const app        = express()
const path       = require('path')
const bodyParser = require('body-parser')
const cors       = require('cors')
const port       = process.env.PORT || 8080
const publicPath = path.join(__dirname, '..', 'dist')

const authRoutes = require('./routes/authRoutes')
const deckRoutes = require('./routes/deckRoutes')
const verbRoutes = require('./routes/verbRoutes')

require('dotenv').config()
app.use(bodyParser.json())
app.use(cors())
app.use(express.static(publicPath))

app.use('/api/auth', authRoutes)
app.use('/api/decks', deckRoutes)
app.use('/api/verbs', verbRoutes)

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => console.info(`Server is running on port ${port}`))