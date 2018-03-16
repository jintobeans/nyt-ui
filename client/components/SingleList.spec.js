import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow, render} from 'enzyme'
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16'
import { SingleList } from '../components/SingleList'
import { store } from '../store'
import { Provider } from 'react-redux'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('<SingleList /> Component', () => {
  let singleList;


  beforeEach(() => {
    singleList = shallow(
        <SingleList listNameEncoded='hi'/>
    )
  })

})
