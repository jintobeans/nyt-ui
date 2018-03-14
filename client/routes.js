import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router, Route, Switch} from 'react-router-dom'
import history from './history'
import {Main, Body} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {

  render () {
    return (
      <Router history={history}>
        <Main>
          <Switch>
            <Route path="/combined-print-and-e-book-fiction" component={Body} />
            <Route component={Body} />
          </Switch>
        </Main>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = null

const mapDispatch = null

export default connect(mapState, mapDispatch)(Routes)
