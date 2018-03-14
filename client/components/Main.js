import React, { Component } from 'react'

export class Main extends Component {

  render() {
    const {children} = this.props
    return (
      <div id="main">
        <h1>New York Times Bestsellers</h1>
        {children}
      </div>
    )
  }
}

export default Main
