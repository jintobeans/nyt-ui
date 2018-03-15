import React, { Component } from 'react'
import { connect } from 'react-redux'
import { overviewResultsThunk } from '../store'
import { ListItem, Button } from '../components'

export class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedLists: []
    }
  }
  componentDidMount(){
    this.setState({
      selectedLists: this.props.allLists
    })
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.allLists !== nextProps.allLists) {
      this.setState({
        selectedLists: nextProps.allLists
      })
    }
  }
  handleButtonClick = (e) => {
    let {allLists} = this.props
    //categorize lists into groups
    let groupedLists = {
      fiction: allLists && allLists.length > 0 && allLists.filter((list) => {
        return list.list_name.includes('Fiction')
      }),
      nonfiction: allLists && allLists.length > 0 && allLists.filter((list) => {
        return list.list_name.includes('Nonfiction') || list.list_name.includes('Advice')
      }),
      youth: allLists && allLists.length > 0 && allLists.filter((list) => {
        return list.list_name.includes('Children') || list.list_name.includes('Young') || list.list_name.includes('Picture') || list.list_name.includes('Series')
      }),
      monthly: allLists && allLists.length > 0 && allLists.filter((list) => {
        return list.list_name.includes('Business') || list.list_name.includes('Science') || list.list_name.includes('Sports') || list.list_name.includes('Audio')
      }),
    }
    this.setState({
      selectedLists: groupedLists[e.target.value] || allLists
    })
  }
  // handleSelect = (e) => {
  //   let fictionFilter = document.getElementById('fiction-dropdown')
  //   let nonfictionFilter = document.getElementById('nonfiction-dropdown')
  //   let youthFilter = document.getElementById('youth-dropdown')
  //   let monthlyFilter = document.getElementById('monthly-dropdown')
  //   var getSelectedValues =  function(element) {
  //     return [].reduce.call(element.options, function(result, option) {
  //       if (option.selected) result.push(option.value);
  //       return result
  //     }, [])
  //   }
  //   let selectedFictionValues = getSelectedValues(fictionFilter)
  //   let selectedNonfictionValues = getSelectedValues(nonfictionFilter)
  //   let selectedYouthValues = getSelectedValues(youthFilter)
  //   let selectedMonthlyValues = getSelectedValues(monthlyFilter)
  //   let allSelectedValues = selectedFictionValues.concat(selectedNonfictionValues, selectedYouthValues, selectedMonthlyValues)
  //   console.log('allselected', allSelectedValues)
  //   let allSelectedLists = []
  //   this.props.allLists.filter((list) => {
  //     allSelectedValues.map((value) => {
  //       console.log('value', value, 'listid', list.list_id)
  //       return list.list_id === value
  //     })
  //   })
  //   // console.log('all lists', allSelectedLists)
  // }
  render() {
    let {allLists} = this.props
    //categorize lists into groups
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
        <h3>Filter by group</h3>

        <div id="filter-buttons">
          <button
            onClick={this.handleButtonClick}
            value='all'>All Lists</button>
          <button
            onClick={this.handleButtonClick}
            value='fiction'>Fiction Lists</button>
          <button
            onClick={this.handleButtonClick}
            value='nonfiction'>Nonfiction Lists</button>
          <button
            onClick={this.handleButtonClick}
            value='youth'>Children's Lists</button>
          <button
            onClick={this.handleButtonClick}
            value='monthly'>Monthly Lists</button>
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
