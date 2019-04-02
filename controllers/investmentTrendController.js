var express = require('express')
var router = express.Router()
const dbConstants = require('../helpers/dbConstants')
// var MongoClient = require('mongodb').MongoClient;
// const URL = require('url')

router.use((req, res, next) => {
  console.log('portfolioController')
  next()
})

router.get('/dailyValue', (req, res) => {
  let dailyValue = require('../portfolio/dailyValue.json')
  res.json(dailyValue)
})

module.exports = router