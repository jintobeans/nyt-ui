import React, { Component } from 'react'

export class Main extends Component {

  render() {
    const {children} = this.props
    return (
      <div id="main">
        <h1>New York Times Bestsellers</h1>
        <h2>The latest books to make the New York Times bestsellers lists</h2>
        {children}
      </div>
    )
  }
}

export default Main
