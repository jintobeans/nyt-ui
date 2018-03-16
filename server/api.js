const router = require('express').Router()
// const axios = require('axios')
const jsonp = require('jsonp');

module.exports = router

const apiKey = process.env.API_KEY
const url = `https://api.nytimes.com/svc/books/v3/lists/overview.jsonp?callback=foo&api-key=${apiKey}`

router.get('/', (req, res, next) => {
  jsonp(url, null, (err, data) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(data);
    }
  })
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
