const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const parseUrlencoded = bodyParser.urlencoded({ extended: true })
const Song = require('../app/models/song')


router.route('/')
  .post((req, res) => {
    const song = new Song()
    song.name = req.body.name

    song.save(err => {
      if (err) {
        res.send(err)
      }
      res.json({ message: 'Song created' })
    })
  })
  .get((req, res) => {
    Song.find( ( err, songs ) => {
      if (err){
        res.send(err)
      }
      res.json(songs)
    })
  })

router.route('/:song_id')
  .get((req, res) => {
    Song.findById(req.params.song_id, (err, song) => {
      if(err){
        res.send(err)
      }
      res.json(song)
    })
  })
  .put((req, res) => {
    Song.findById(req.params.song_id, (err, song) => {
      if(err){
        res.send(err)
      }
      song.name = req.body.name
      song.save(err => {
        if(err){
          res.send(err)
        }
        res.json({ message: 'song updated'})
      })
    })
  })
  .delete((req, res) => {
    Song.remove({
      _id: req.params.song_id
    }, (err, song) => {
      if(err){
        res.send(err)
      }
      res.json({ message: 'deleted'})
    })
  })

  module.exports = router
