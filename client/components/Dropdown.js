import React, { Component } from 'react'

export class Dropdown extends Component {
  handleChange = () => {
    console.log('handlechange')
  }
  render() {
    let groupItems = this.props.groupItems;
    let context = this;
    // if (this.props.options) {
    // 	content = this.props.options.map((option) => (<option
    // 					key={option.list_id}
    // 					value={option.list_name_encoded} >{option.list_name}</option>));
    // }
    console.log('context', context)
    console.log('groupitems', groupItems)
    return (
      <div className="dropdown">
        <select
        onChange={this.handleChange}
        defaultValue={'fiction'}
        multiple="hi">
          <option
          id={this.props.name}
          name={this.props.name}>
          {this.props.name}
          </option>
          <option disabled>--</option>
          {groupItems && groupItems.length > 0 && groupItems.map((selection) => {
            return(
              <option key={selection} name={selection}>{selection}</option>
            )
          })}
        </select>
      </div>
    )
  }
}

export default Dropdown
