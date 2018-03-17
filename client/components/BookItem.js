import { Link } from 'react-router-dom'
import { BookItemButton } from '../components'

export const BookItem = ({ book, listName, routedList }) => (

  <article className='book-item'>
    <div className='book-item-header'>
      <h3>{book.rank}</h3>
      <img src={book.book_image} />
    </div>
    <div className='book-item-content'>
      <h4>{book.title}</h4>
      <p>
        {book.contributor}
        {routedList
          &&
          <span>
            <br /><br />
            <i>{book.description}</i>
          </span>}
        <br /><br />
        {book.weeks_on_list > 1
          ? <i>
            {book.weeks_on_list} weeks on the list
                </i>
          : <i>New this week!</i>}
      </p>
      <div className='book-item-buttons-container'>
        <BookItemButton
          label='Buy Now'
          type='buy'
          id={`${book.primary_isbn13}+${listName}`}
          links={book.buy_links}
        />
        {book.book_review_link
          &&
          <a href={book.book_review_link}>
            <BookItemButton
              label='Read Review'
              type='basic' />
          </a>}
      </div>
    </div>
  </article>

)

export default BookItem
