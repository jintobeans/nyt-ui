import React, { Component } from 'react'

export class BookItemButton extends Component {
  handleClickDropdown = (e) => {
    e.preventDefault()
    let {links} = this.props
    //this will allow user to click to show or hide buy links
    let parentButtonDiv = document.getElementById(this.props.id)
    if ( parentButtonDiv.childElementCount > 1 ){
      parentButtonDiv.removeChild(parentButtonDiv.childNodes[1])
    } else {
      //show dropdown with buy links
      let dropdown = document.createElement('div')
      document.getElementById(this.props.id).appendChild(dropdown)
      dropdown.id = 'buy-links'
      let reducerCreateHTML = (accum, current) => {
        return accum + `<div><a href=${current.url}>${current.name}</a></div>`
      }
      let htmlLinks = links.reduce(reducerCreateHTML, '')
      dropdown.innerHTML = htmlLinks
    }
  }

  render() {
    let {filter, label, type, id, links} = this.props
    return (
      <div className={`button${type}`} id={id}>
        <button
        onClick={type === 'buy' ? this.handleClickDropdown : undefined}
        label={label}
        type={type}>
          {this.props.label}
        </button>
      </div>
    )
  }
}

export default BookItemButton
