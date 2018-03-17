import history from '../history'
import jsonp from 'jsonp'
require('../../secrets')

const apiKey = process.env.API_KEY
const url = `https://api.nytimes.com/svc/books/v3/lists/overview.jsonp?callback=foo&api-key=${apiKey}`

/**
 * ACTION TYPES
 */
const GET_OVERVIEW = 'GET_OVERVIEW'

/**
 * INITIAL STATE
 */
const defaultOverview = {}

/**
 * ACTION CREATORS
 */
const getOverview = overview => ({ type: GET_OVERVIEW, overview })

/**
 * THUNK CREATORS
 */
export const overviewResultsThunk = () => {
  return dispatch =>
    jsonp(url, null, (err, data) => {
      if (err){
        console.error(err.message)
      } else {
        dispatch(getOverview(data.results))
      }
    })
}

/**
 * REDUCER
 */
export default function (state = defaultOverview, action) {
  switch (action.type) {
    case GET_OVERVIEW:
      return action.overview
    default:
      return state
  }
}
