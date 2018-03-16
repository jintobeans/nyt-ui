import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16'
import { BookItem } from '../components'
import { store } from '../store'
import { Provider } from 'react-redux'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('<BookItem /> Component', () => {
  let bookItem
  let book = {
    rank: 2,
    book_image: '123.jpg',
    title: 'Hello World',
    contributor: 'by Alfred Hitchcock',
    description: 'A book about the birth of Alfred Hitcock',
    weeks_on_list: 5,
    primary_isbn13: 123456
  }

  beforeEach(() => {
    bookItem = shallow(
      <BookItem book={book} />
    )
  })

  it('should render an <article>', () => {
    expect(bookItem.find('article')).to.have.length(1)
  })

  it('should render an <h3> with rank as text', () => {
    expect(bookItem.find('h3')).to.have.length(1);
    expect(bookItem.find('h3').text()).to.equal('2');
  });

  it('should render an image', () => {
    expect(bookItem.find('img')).to.have.length(1);
  });

  it('should render an <h4> with book title as text', () => {
    expect(bookItem.find('h4')).to.have.length(1);
    expect(bookItem.find('h4').text()).to.equal('Hello World');
  });

  it('should render a <p> with contributor information', () => {
    expect(bookItem.find('p')).to.have.length(1);
    expect(bookItem.find('p').text()).to.include('by Alfred');
  });

});
