import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BookItem} from '../components'
import {Link} from 'react-router-dom'

export class ListItem extends Component {
  constructor(props){
    super(props)
  }
  render() {
    // console.log('list', this.props.list)
    let {list} = this.props
    return (
      <div className='list-item'>
        <h3>
          <Link to={`/overviewList/${list.list_name_encoded}`}>{list.display_name}</Link>
        </h3>
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
