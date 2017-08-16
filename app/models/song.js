const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SongSchema = new Schema({
  name: String,
})

module.exports = mongoose.model('Song', SongSchema)
