import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router, Route, Switch} from 'react-router-dom'
import history from './history'
import {Main, Body} from './components'
import {overviewResultsThunk} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentWillMount(){
    this.props.getOverview()
  }

  render () {
    return (
      <Router history={history}>
        <Main>
          <Switch>
            <Route path="/combined-print-and-e-book-fiction" component={Body} />
            <Route path="/" component={Body} />
          </Switch>
        </Main>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    overview: state.overview
  }
}

const mapDispatch = (dispatch) => {
  return {
    getOverview: () => {
      return dispatch(overviewResultsThunk())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)
