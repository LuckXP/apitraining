const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const parseUrlencoded = bodyParser.urlencoded({ extended: true })



router.route('/')
  .all((req, res, next) => {
    console.log('hit the api');
    next()
  })



  module.exports = router
