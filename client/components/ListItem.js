import React, {Component} from 'react'
import {connect} from 'react-redux'

export class ListItem extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log('list', this.props.list)
    return (
      <div className='list-item-content'>
        <h5>{this.props.list.display_name}</h5>
      </div>
    )
  }
}

export default ListItem
