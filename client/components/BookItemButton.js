import React, { Component } from 'react'

export class BookItemButton extends Component {

  handleOpenLinks = (e) => {
    e.preventDefault()
    document.getElementById(`buy${this.props.id}`).classList.toggle("showBuyLinks");
  }

  render() {
    let {filter, label, type, id, links} = this.props
    return (
      <div className={`button${type}`} id={id}>
        <button
          onClick={type === 'buy' ? this.handleOpenLinks : undefined}
          label={label}
          type={type}>
          {this.props.label}
        </button>
        {type === 'buy'
          ? <div id={`buy${id}`} className="buyDropdownContent">
              {links.map((link) => {
                return (
                  <a href={link.url}>{link.name}</a>
                )
              })}
            </div>
          : undefined}
      </div>
    )
  }
}

export default BookItemButton
