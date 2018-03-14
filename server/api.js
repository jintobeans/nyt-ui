// const router = require('express').Router()
// const axios = require('axios')
// const jsonp = require('jsonp');

// module.exports = router


// const apiKey = process.env.API_KEY
// const url = `https://api.nytimes.com/svc/books/v3/lists/overview.jsonp?callback=foo&api-key=${apiKey}`

// router.get('/', (req, res, next) => {
//   let options = {
//     param: {
//       callback: 'get_overview',
//       'api-key': apiKey,
//     }
//   }
//   jsonp(url, null, (err, data) => {
//     if (err) {
//       console.error(err.message);
//     } else {
//       console.log(data);
//     }
//   })
//   /*
//   fetch('YOUR URL HERE')
//         .then((response) => response.text())
//         .then((responseText) => {
//             const match = responseText.match(/\?\((.*)\);/);
//             if (! match) throw new Error('invalid JSONP response');
//             return JSON.parse(match[1]).movies;
//         })
//         .catch((error) => {
//             console.error(error);
//         });
//   */
//   // axios.get(url ,{
//   //   params: {
//   //     callback: 'get_overview',
//   //     'api-key': apiKey,
//   //   }
//   // })
//   // .then(result => {
//   //   // console.log('result', result.data)
//   //   result = result.toString()
//   //   const match = result.match(/\?\((.*)\);/);
//   //   console.log('parse', JSON.parse(match[1]))
//   //   // res.json(result.data)
//   // })
//   // .catch(err => console.log('Error getting data from NYT API', err))
// })

// router.use((req, res, next) => {
//   const error = new Error('Not Found')
//   error.status = 404
//   next(error)
// })
