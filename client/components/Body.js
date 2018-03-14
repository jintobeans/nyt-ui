import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {overviewResultsThunk} from '../store'

export class Body extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.getData()
  }
  render() {
    return (
      <div id="content">
        <h2>The latest books to make the New York Times bestsellers list</h2>
      </div>
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
    getData: () => {
      return dispatch(overviewResultsThunk())
    }
  }
}
export default connect(mapState, mapDispatch)(Body)
