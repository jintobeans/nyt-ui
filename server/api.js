const router = require('express').Router()
const axios = require('axios')

module.exports = router

const url =
  `https://api.nytimes.com/svc/books/v3/lists/overview.jsonp`;

const apiKey = process.env.API_KEY

router.get('/', (req, res, next) => {
  axios.get(url ,{
    params: {
      callback: 'foo',
      'api-key': apiKey
    }
  })
  .then(result => res.json(result.data))
  .catch(err => console.log('err', err))
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
