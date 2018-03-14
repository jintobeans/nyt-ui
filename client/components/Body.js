import React, {Component} from 'react'
import {connect} from 'react-redux'
import {overviewResultsThunk} from '../store'
import {ListItem} from '../components'

export class Body extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedLists: []
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.allLists !== nextProps.allLists){
      this.setState({
        selectedLists: nextProps.allLists
      })
    }
  }
  render() {
    return (
      <div id="content">
        <h2>The latest books to make the New York Times bestsellers lists</h2>
        <div id="lists">
          {this.state.selectedLists && this.state.selectedLists.length > 0 && this.state.selectedLists.map((list) => {
            return (
              <div className="list-item" key={list.list_id}>
                <ListItem list={list}/>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    allLists: state.overview.lists
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
