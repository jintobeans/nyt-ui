import React, {Component} from 'react'
import axios from 'axios'

export class Hello extends Component {
  constructor(props){
    super(props)
  }
  getData = () => {
    console.log('momunted and getting data')
    axios.get(`/api`)
    .then(res => console.log('data', res.data))
    .catch(err => console.log('error', err))
  }

  componentDidMount(){
    this.getData()
  }

  render() {

    return (
      <div>
        <h2>Hello</h2>
      </div>
    )
  }
}

export default Hello
