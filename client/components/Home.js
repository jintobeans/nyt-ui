import React, { Component } from 'react'
import { connect } from 'react-redux'
import { overviewResultsThunk } from '../store'
import { ListItem } from '../components'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedLists: [],
    }
  }

  componentDidMount() {
    this.setState({
      selectedLists: this.props.allLists,
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.allLists !== nextProps.allLists) {
      this.setState({
        selectedLists: nextProps.allLists
      })
    }
  }

  handleDropdownSelection = (event) => {
    event.preventDefault()
    let selectedList = this.props.allLists.filter((list) => {
      return list.list_name_encoded === event.target.id
    })
    this.setState({
      selectedLists: selectedList
    })
  }

  handleFilterButtonClick = (event) => {
    event.preventDefault()
    let { allLists } = this.props
    this.setState({
      selectedLists: this.props[event.target.value] || allLists
    })
  }

  render() {

    let { allLists, fictionLists, nonfictionLists, youthLists, monthlyLists } = this.props
    let listValues = Object.keys(this.props).filter((key) => {
      return key.includes('List')
    })
    let componentContext = this

    return (
      <div id="content">
        <div id="filter-buttons">
          {listValues.length > 0 && listValues.map((list) => {
            return (
              <div className="dropdown" id={`dropdown-${list}`}>
                <button
                  className="dropbtn"
                  onClick={this.handleFilterButtonClick}
                  value={list}>
                  {list.slice(0, list.indexOf('List')).toUpperCase()}
                </button>
                <div className="dropdown-content">
                  {this.props[list] && this.props[list].map((listItem) => {
                    return (
                      <a
                        href="/"
                        key={listItem.list_name}
                        id={listItem.list_name_encoded}
                        onClick={componentContext.handleDropdownSelection}>
                        {listItem.list_name}
                      </a>
                    )
                  })}
                </div>
              </div>
            )
          })}
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
      </div >
    )
  }
}

const mapState = (state) => { //divide lists by group for render view
  return {
    allLists: state.overview.lists,

    fictionLists: state.overview.lists && state.overview.lists.length && state.overview.lists.filter((list) => {
      return list.list_name.includes('Fiction')
    }),

    nonfictionLists: state.overview.lists && state.overview.lists.length && state.overview.lists.filter((list) => {
      return list.list_name.includes('Nonfiction') || list.list_name.includes('Advice')
    }),

    youthLists: state.overview.lists && state.overview.lists.length && state.overview.lists.filter((list) => {
      return list.list_name.includes('Children') || list.list_name.includes('Young') || list.list_name.includes('Picture') || list.list_name.includes('Series')
    }),

    monthlyLists: state.overview.lists && state.overview.lists.length && state.overview.lists.filter((list) => {
      return list.list_name.includes('Business') || list.list_name.includes('Science') || list.list_name.includes('Sports') || list.list_name.includes('Audio')
    }),
  }
}

export default connect(mapState, null)(Home)
