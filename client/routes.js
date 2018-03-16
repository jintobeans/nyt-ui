import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'
import { Main, Home, SingleList } from './components'
import { overviewResultsThunk } from './store'

class Routes extends Component {
  componentWillMount(){
    this.props.getOverview()
  }

  render () {
    return (
      <Router history={history}>
        <Main>
          <Switch>
            <Route path="/overviewList/:listNameEncoded"
            component={SingleList} />
            <Route path="/overviewList"
            component={Home} />
            <Route path="/" component={Home} />
          </Switch>
        </Main>
      </Router>
    )
  }
}

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
