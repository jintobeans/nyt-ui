import React, { Component } from 'react'
import { connect } from 'react-redux'
import { overviewResultsThunk } from '../store'
import { ListItem, Dropdown, FilterButton } from '../components'

export class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedLists: []
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.allLists !== nextProps.allLists) {
      this.setState({
        selectedLists: nextProps.allLists
      })
    }
  }
  handleSelect = (e) => {
    console.log('e', e)
  }
  render() {
    let dropdownLists = {
      fiction: ['hi'],
      nonfiction: [],
      youth: [],
      monthly: []
    }
    return (
      <div id="content">
        <h2>The latest books to make the New York Times bestsellers lists</h2>
        <h3>Filters</h3>
        <div id="dropdowns">
          <Dropdown name="fiction" groupItems={dropdownLists.fiction}/>
          <FilterButton filter="fiction"/>
        </div>
        <div id="lists">
          {this.state.selectedLists && this.state.selectedLists.length > 0 && this.state.selectedLists.map((list) => {
            return (
              <div className="list-item" key={list.list_id}>
                <ListItem list={list} />
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

export default connect(mapState, null)(Body)
