import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Home } from '../components/home'
import { store } from '../store'
import { Provider } from 'react-redux'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('<Home /> Component', () => {
  let home
  let fictionLists = [
    {
      'list_name': 'Great Audiobooks',
      'list_name_encoded': 'great_audiobooks'
    },
    {
      'list_name': 'Young Adult Fiction',
      'list_name_encoded': 'young_adult_fiction'
    },
    {
      'list_name': 'Romance Novels',
      'list_name_encoded': 'romance_novels'
    }
  ]

  beforeEach(() => {
    home = render(
        <Home fictionLists={fictionLists}/>
    )
  });

  it('should render <div> called `#filter-buttons`', () => {
    expect(home.find('#filter-buttons')).to.have.length(1)
  });

  it('should render five buttons', () => {
    expect(home.find('button')).to.have.length(5)
  });

  it('should render <div> called `#lists`', () => {
    expect(home.find('#lists')).to.have.length(1)
  });

  it('should map over each list with an <a> tag', () => {
    expect(home.find('a')).to.have.length(3);
  });

  it('should map correct value onto <a> tag attribute', () => {
    expect(home.find('a')[0].attribs.id).to.equal('great_audiobooks')
  })

})
