import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {Button} from '../components'

export class BookItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { book , listName, routedList} = this.props
    return (
      <article className="book-item">
        <header>
          <h5>{book.rank}</h5>
          <img src={book.book_image} />
        </header>
        <div>
          <h4>{book.title}</h4>
          <p>
            {book.contributor}

            {routedList &&
              <span>
              <br /><i>{book.description}</i>
              </span>
            }
            <br /><br />
            {book.weeks_on_list > 1 ?
            <i>{book.weeks_on_list} weeks on the list</i> :
            <i>New this week!</i>}
          </p>
          <Button
          label='Buy Now'
          type='dropdown'
          id={`${book.primary_isbn13}+${listName}`}
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
