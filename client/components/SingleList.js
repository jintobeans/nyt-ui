import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { BookItem } from '../components'

export class SingleList extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: {}
    }
  }
  componentDidMount(){
    let singleList = this.props.lists.find((list) => {
      return list.list_name_encoded === this.props.match.params.listNameEncoded
    })
    this.setState({
      list: singleList
    })
  }
  componentWillReceiveProps(nextProps){
    if(this.props.lists !== nextProps.lists){
      let singleList = nextProps.lists.find((list) => {
        return list.list_name_encoded === this.props.match.params.listNameEncoded
      })
      this.setState({
        list: singleList
      })
    }
  }
  render() {
    let listName = this.props.match.params.listNameEncoded
    let list = this.state.list
    return (
      <div className='single-list'>
        <h3>
         {list.display_name}
        </h3>
        <div className="list-item-content">
          {list.books && list.books.length > 0 && list.books.map((book) => {
            return (
              <BookItem key={book.rank} book={book} />
            )
          })}
        </div>
      </div>
    )
  }
}

let mapState = (state) => {
  return {
    lists: state.overview.lists
  }
}

export default connect(mapState, null)(SingleList)
