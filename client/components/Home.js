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
    console.log('event', event.target)
    let { allLists } = this.props
    this.setState({
      selectedLists: this.props[event.target.value] || allLists
    })
  }

  render() {
    let { allLists, fictionLists, nonfictionLists, youthLists, monthlyLists } = this.props
    return (
      <div id="content">
        <div id="filter-buttons">
          <div
            className="dropdown" id="dropdown-all">
            <button
              className="dropbtn"
              onClick={this.handleFilterButtonClick}
              value='all'>
              ALL LISTS
            </button>
            <div className="dropdown-content">
              {allLists && allLists.map((list) => {
                return (
                  <a
                    href="/"
                    key={list.list_name}
                    id={list.list_name_encoded}
                    onClick={this.handleDropdownSelection}>
                    {list.list_name}
                  </a>
                )
              })}
            </div>
          </div>
          <div className="dropdown" id="dropdown-fiction">
            <button
              className="dropbtn"
              onClick={this.handleFilterButtonClick}
              value='fictionLists'>
              FICTION LISTS
            </button>
            <div className="dropdown-content">
              {fictionLists && fictionLists.map((fictionList) => {
                return (
                  <a
                    href="/"
                    key={fictionList.list_name}
                    id={fictionList.list_name_encoded}
                    onClick={this.handleDropdownSelection}>
                    {fictionList.list_name}
                  </a>
                )
              })}
            </div>
          </div>
          <div className="dropdown" id="dropdown-nonfiction">
            <button
              className="dropbtn"
              onClick={this.handleFilterButtonClick}
              value='nonfictionLists'>
              NONFICTION LISTS
            </button>
            <div className="dropdown-content">
              {nonfictionLists && nonfictionLists.map((nonfictionList) => {
                return (
                  <a
                    href="/"
                    key={nonfictionList.list_name}
                    id={nonfictionList.list_name_encoded}
                    onClick={this.handleDropdownSelection}>
                    {nonfictionList.list_name}
                  </a>
                )
              })}
            </div>
          </div>
          <div className="dropdown" id="dropdown-List">
            <button
              className="dropbtn"
              onClick={this.handleFilterButtonClick}
              value='youthLists'>
              CHILDREN'S LISTS
            </button>
            <div className="dropdown-content">
              {youthLists && youthLists.map((youthList) => {
                return (
                  <a
                    href="/"
                    key={youthList.list_name}
                    id={youthList.list_name_encoded}
                    onClick={this.handleDropdownSelection}>
                    {youthList.list_name}
                  </a>
                )
              })}
            </div>
          </div>
          <div className="dropdown" id="dropdown-monthly">
            <button
              className="dropbtn"
              onClick={this.handleFilterButtonClick}
              value='monthlyLists'>
              MONTHLY LISTS
            </button>
            <div className="dropdown-content">
              {monthlyLists && monthlyLists.map((monthlyList) => {
                return (
                  <a
                    href="/"
                    key={monthlyList.list_name}
                    id={monthlyList.list_name_encoded}
                    onClick={this.handleDropdownSelection}>
                    {monthlyList.list_name}
                  </a>
                )
              })}
            </div>
          </div>
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
