import React, { Component } from 'react'

export class FilterButton extends Component {
  handleClick = (e) => {
    console.log('handle click', e)
  }
  render() {
    let {filter} = this.props
    return (
      <div className="filterbutton">
        <button onClick={this.handleClick} label={filter}>{this.props.filter}</button>
      </div>
    )
  }
}

export default FilterButton
