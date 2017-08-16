var mongoose = require('mongoose')
const express = require('express')
const app = express()
const songs = require('./routes/songs')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.port = 8080
mongoose.connect('mongodb://localhost/db')
const Song = require('./app/models/song')

app.use((requ, res, next) => {
  console.log('something is happening.')
  next()
})

const router = express.Router()

app.use('/api', router)
router.use('/songs', songs)






app.listen(port)
console.log('up and running on port' + port)
