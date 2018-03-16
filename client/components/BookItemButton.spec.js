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

  beforeEach(() => {
    bookItemButton = shallow(
      <BookItemButton type="buy" />
    )
  })

  xit('should render a button', () => {
    expect(bookItemButton.find('button')).to.have.length(1)
  })

  xit('should render a <div> with class `.buttonbuy`', () => {
    expect(bookItemButton.find('.buttonbuy')).to.have.length(1);
  });

})
