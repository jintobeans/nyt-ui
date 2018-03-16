import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16'
import { ListItem } from '../components'
import { store } from '../store'
import { Provider } from 'react-redux'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('<ListItem /> Component', () => {
  let listItem;
  let list = {
    list_name_encoded: 'top_audiobooks',
    display_name: 'Top Audiobooks',
    books: [
      {
        title: 'Serial',
        contributor: 'by Serial Audiobook Writer'
      },
      {
        title: 'Amazing Eats',
        contributor: 'by Chef David Chang'
      }
    ]
  }

  beforeEach(() => {
    listItem = shallow(
      <ListItem list={list} />
    )
  })

  it('should render an <h3> with link', () => {
    expect(listItem.find('h3')).to.have.length(1);
    expect(listItem.find('h3').text()).to.include('<Link />');
  })

  it('should render `.list-item-content` class', () => {
    expect(listItem.find('.list-item-content')).to.have.length(1);
  })

})
