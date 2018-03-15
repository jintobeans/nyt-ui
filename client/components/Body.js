import React, { Component } from 'react'
import { connect } from 'react-redux'
import { overviewResultsThunk } from '../store'
import { ListItem, Button } from '../components'

export class Body extends Component {
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
  handleDropdownClick = (e) => {
    e.preventDefault()
    let selectedList = this.props.allLists.filter((list) => {
      return list.list_name_encoded === e.target.id
    })
    this.setState({
      selectedLists: selectedList
    })
  }
  handleButtonClick = (e) => {
    e.preventDefault()
    let { allLists } = this.props
    // //categorize lists into groups
    let groupedLists = {
      fiction: allLists.filter((list) => {
        return list.list_name.includes('Fiction')
      }),
      nonfiction: allLists.filter((list) => {
        return list.list_name.includes('Nonfiction') || list.list_name.includes('Advice')
      }),
      youth: allLists.filter((list) => {
        return list.list_name.includes('Children') || list.list_name.includes('Young') || list.list_name.includes('Picture') || list.list_name.includes('Series')
      }),
      monthly: allLists.filter((list) => {
        return list.list_name.includes('Business') || list.list_name.includes('Science') || list.list_name.includes('Sports') || list.list_name.includes('Audio')
      }),
    }
    //set state based on group selected
    this.setState({
      selectedLists: groupedLists[e.target.value] || allLists
    })
  }
  render() {
    let { allLists, fiction, nonfiction, youth, monthly } = this.props
    // categorize lists into groups
    // let dropdownLists = {
    //   fiction: allLists && allLists.length > 0 && allLists.filter((list) => {
    //     return list.list_name.includes('Fiction')
    //   }),
    //   nonfiction: allLists && allLists.length > 0 && allLists.filter((list) => {
    //     return list.list_name.includes('Nonfiction') || list.list_name.includes('Advice')
    //   }),
    //   youth: allLists && allLists.length > 0 && allLists.filter((list) => {
    //     return list.list_name.includes('Children') || list.list_name.includes('Young') || list.list_name.includes('Picture') || list.list_name.includes('Series')
    //   }),
    //   monthly: allLists && allLists.length > 0 && allLists.filter((list) => {
    //     return list.list_name.includes('Business') || list.list_name.includes('Science') || list.list_name.includes('Sports') || list.list_name.includes('Audio')
    //   }),
    // }
    return (
      <div id="content">
        <div id="filter-buttons">
          <div className="dropdown" id="dropdown-all">
            <button
              className="dropbtn"
              onClick={this.handleButtonClick}
              value='all'>All Lists
            </button>
            <div className="dropdown-content" />
          </div>
          <div className="dropdown" id="dropdown-fiction">
            <button
              className="dropbtn"
              onClick={this.handleButtonClick}
              value='fiction'>Fiction Lists
            </button>
            <div className="dropdown-content">
              {fiction && fiction.map((fictionList) => {
                return (
                  <a
                    href="/"
                    key={fictionList.list_name}
                    id={fictionList.list_name_encoded}
                    onClick={this.handleDropdownClick}>
                    {fictionList.list_name}
                  </a>
                )
              })}
            </div>
          </div>
          <div className="dropdown" id="dropdown-nonfiction">
            <button
              className="dropbtn"
              onClick={this.handleButtonClick}
              value='nonfiction'>Nonfiction Lists
            </button>
            <div className="dropdown-content">
              {nonfiction && nonfiction.map((nonfictionList) => {
                return (
                  <a
                    href="/"
                    key={nonfictionList.list_name}
                    id={nonfictionList.list_name_encoded}
                    onClick={this.handleDropdownClick}>
                    {nonfictionList.list_name}
                  </a>
                )
              })}
            </div>
          </div>
          <div className="dropdown" id="dropdown-youth">
            <button
              className="dropbtn"
              onClick={this.handleButtonClick}
              value='youth'>Children's Lists
            </button>
            <div className="dropdown-content">
              {youth && youth.map((youthList) => {
                return (
                  <a
                    href="/"
                    key={youthList.list_name}
                    id={youthList.list_name_encoded}
                    onClick={this.handleDropdownClick}>
                    {youthList.list_name}
                  </a>
                )
              })}
            </div>
          </div>
          <div className="dropdown" id="dropdown-monthly">
            <button
              className="dropbtn"
              onClick={this.handleButtonClick}
              value='monthly'>Monthly Lists
            </button>
            <div className="dropdown-content">
              {monthly && monthly.map((monthlyList) => {
                return (
                  <a
                    href="/"
                    key={monthlyList.list_name}
                    id={monthlyList.list_name_encoded}
                    onClick={this.handleDropdownClick}>
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

const mapState = (state) => {
  return {
    allLists: state.overview.lists,
    fiction: state.overview.lists && state.overview.lists.length && state.overview.lists.filter((list) => {
      return list.list_name.includes('Fiction')
    }),
    nonfiction: state.overview.lists && state.overview.lists.length && state.overview.lists.filter((list) => {
      return list.list_name.includes('Nonfiction') || list.list_name.includes('Advice')
    }),
    youth: state.overview.lists && state.overview.lists.length && state.overview.lists.filter((list) => {
      return list.list_name.includes('Children') || list.list_name.includes('Young') || list.list_name.includes('Picture') || list.list_name.includes('Series')
    }),
    monthly: state.overview.lists && state.overview.lists.length && state.overview.lists.filter((list) => {
      return list.list_name.includes('Business') || list.list_name.includes('Science') || list.list_name.includes('Sports') || list.list_name.includes('Audio')
    }),
  }
}

export default connect(mapState, null)(Body)

/*
old dropdowns


<div id="dropdowns">
          <div className="dropdown">
            <select
              id="fiction-dropdown"
              onChange={this.handleSelect}
              multiple
              name="fiction[]"
            >
              <option
                selected
                id='fiction'
                value='fiction'>
                All Fiction
              </option>
              <option disabled>--</option>
              {dropdownLists.fiction && dropdownLists.fiction.length > 0 && dropdownLists.fiction.map((selection) => {
                return (
                  <option key={selection.list_id} value={selection.list_id}>{selection.list_name}</option>
                )
              })}
            </select>
          </div>
          <div className="dropdown">
            <select
              id="nonfiction-dropdown"
              onChange={this.handleSelect}
              multiple
            >
              <option
                selected
                id='nonfiction'
                value='nonfiction'>
                All Nonfiction
              </option>
              <option disabled>--</option>
              {dropdownLists.nonfiction && dropdownLists.nonfiction.length > 0 && dropdownLists.nonfiction.map((selection) => {
                return (
                  <option key={selection.list_id} value={selection.list_id}>{selection.list_name}</option>
                )
              })}
            </select>
          </div>
          <div className="dropdown">
            <select
              id="youth-dropdown"
              onChange={this.handleSelect}
              multiple
            >
              <option
                selected
                id='youth'
                value='youth'>
                All Children's
              </option>
              <option disabled>--</option>
              {dropdownLists.youth && dropdownLists.youth.length > 0 && dropdownLists.youth.map((selection) => {
                return (
                  <option key={selection.list_id} value={selection.list_id}>{selection.list_name}</option>
                )
              })}
            </select>
          </div>
          <div className="dropdown">
            <select
              id="monthly-dropdown"
              onChange={this.handleSelect}
              multiple
            >
              <option
                selected
                id='monthly'
                value='monthly'>
                All Monthly
              </option>
              <option disabled>--</option>
              {dropdownLists.monthly && dropdownLists.monthly.length > 0 && dropdownLists.monthly.map((selection) => {
                return (
                  <option key={selection.list_id} value={selection.list_id}>{selection.list_name}</option>
                )
              })}
            </select>
          </div>
        </div>
*/
