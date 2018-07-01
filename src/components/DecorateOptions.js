import React, { Component } from 'react'
import { Input, Button, Dropdown } from 'semantic-ui-react'

/**
  Text input
  bold/italic
  font fontSize
  font fontFamily
  textAlign
  text baseline

*/

const options = [
  { key: 1, text: 'Sans-Serif', value: 1 },
  { key: 2, text: 'Arial', value: 2 },
  { key: 3, text: 'Calibri', value: 3 },
  { key: 4, text: 'Times New Roman', value: 4 }
]

class DecorateOptions extends Component {
  render() {
    return (
      <div>
        <Input placeholder="Gif Text" />
        <Button.Group>
          <Button>Normal</Button>
          <Button.Or />
          <Button>Bold</Button>
        </Button.Group>

        <Input
          label={{ basic: true, content: 'px' }}
          labelPosition="right"
          placeholder="Enter font size.."
        />
        <div>
          <Dropdown placeholder="Select Font" selection options={options} />
        </div>
      </div>
    )
  }
}

export default DecorateOptions
