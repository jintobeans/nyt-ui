import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16'
import { BookItemButton } from '../components'
import { store } from '../store'
import { Provider } from 'react-redux'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('<BookItemButton /> Component', () => {
  let bookItemButton
  let links = [
    {
      name: 'Amazon',
      url: 'amazon.com/123'
    },
    {
      name: 'Borders',
      url: 'borders.com/567'
    }
  ]

  beforeEach(() => {
    bookItemButton = shallow(
      <BookItemButton
      type="buy"
      links={links} />
    )
  })

  it('should render a button', () => {
    expect(bookItemButton.find('button')).to.have.length(1)
  })

  it('should render a <div> with class `.buttonbuy`', () => {
    expect(bookItemButton.find('.buttonbuy')).to.have.length(1);
  });

  it('should render a <a> for the button for each link provided', () => {
    expect(bookItemButton.find('a')).to.have.length(2);
  });

  it('should NOT render any <a> tags for non-buy-type buttons', () => {
    bookItemButton = shallow(
      <BookItemButton
      type="review"
      />
    )
    expect(bookItemButton.find('a')).to.have.length(0);
  });

  it('should NOT render any <a> tags for non-buy-type buttons even if links are passed in', () => {
    bookItemButton = shallow(
      <BookItemButton
      type="review"
      links={links} />
    )
    expect(bookItemButton.find('a')).to.have.length(0);
  });
})
