import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {Button} from '../components'

export class BookItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { book } = this.props
    console.log('book', book)
    return (
      <article className="book-item">
        <header>
          <h6>{book.rank}</h6>
          <img src={book.book_image} />
        </header>
        <div>
          <h5>{book.title}</h5>
          {book.weeks_on_list > 1 ?
          <i>{book.weeks_on_list} weeks on the list</i> :
          <p>New this week!</p>}
          <p>{book.contributor}</p>
          <Button
          label='Buy Now'
          type='dropdown'
          id={book.primary_isbn13}
          links={book.buy_links} />
          {book.book_review_link &&
            <a href={book.book_review_link}>
              <Button
              label='Read Review'
              type='basic' />
            </a>
          }
        </div>
      </article>
    )
  }
}

export default BookItem
