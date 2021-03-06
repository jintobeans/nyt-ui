import { BookItem } from '../components'
import { Link } from 'react-router-dom'

export const ListItem = ({ list }) => (

  <div className='list-item'>
    <h3>
      <Link to={`/overviewList/${list.list_name_encoded}`}>
        {list.display_name}
      </Link>
    </h3>
    <div className='list-item-content'>
      {list.books.map((book) => {
        return (
          <BookItem
            key={`${book.primary_isbn13}`}
            book={book}
            listName={list.list_name_encoded}
          />
        )
      })}
    </div>
  </div>
)

export default ListItem
