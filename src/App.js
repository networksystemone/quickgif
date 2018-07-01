import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import ConvertVideoContainer from './containers/ConvertVideoContainer'

import './App.css'

class App extends Component {
  state = {
    renderVideoContainer: false
  }

  handleClick = e => {
    e.preventDefault()
    this.setState(prevState => ({
      renderVideoContainer: !prevState.renderVideoContainer
    }))
  }

  render() {
    if (this.state.renderVideoContainer === true) {
      return (
        <div className="App">
          <ConvertVideoContainer />
        </div>
      )
    } else {
      return (
        <div className="App">
          <h1>HomeScreen</h1>
          <Button onClick={this.handleClick}>Lets Get Started!</Button>
        </div>
      )
    }
  }
}

export default App
