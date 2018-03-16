import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16'
import { Main } from '../components'
import { store } from '../store'
import { Provider } from 'react-redux'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('<Main /> Component', () => {
  let main;


  beforeEach(() => {
    main = shallow(
      <Main />
    )
  })

  it('should render main <div> with `#main`', () => {
    expect(main.find('#main')).to.have.length(1);
  })

  it('should render <h1> with title', () => {
    expect(main.find('h1').text()).to.equal('New York Times Bestsellers');
  })

  it('should render <p> with subheader', () => {
    expect(main.find('p').text()).to.include('books sold in the United States');
  })

})
