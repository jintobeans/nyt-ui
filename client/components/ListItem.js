import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BookItem} from '../components'

export class ListItem extends Component {
  constructor(props){
    super(props)
  }
  render() {
    // console.log('list', this.props.list)
    let {list} = this.props
    return (
      <div className='list-item'>
        <h4>{this.props.list.display_name}</h4>
        <div className="list-item-content">
          {list.books.map((book) => {
            return (
              <BookItem key={book.rank} book={book} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default ListItem
