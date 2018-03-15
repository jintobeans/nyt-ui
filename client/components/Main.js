import React, { Component } from 'react'

export class Main extends Component {

  render() {
    const {children} = this.props
    return (
      <div id="main">
        <h1>New York Times Bestsellers</h1>
        <p>Authoritatively ranked lists of books sold in the United States, sorted by format and genre.
        </p>
        {children}
      </div>
    )
  }
}

export default Main
