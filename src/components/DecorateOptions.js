import React, { Component } from 'react'
import { Input, Button, Dropdown } from 'semantic-ui-react'

const fontOptions = [
  { key: 1, text: 'Sans-Serif', value: 1 },
  { key: 2, text: 'Arial', value: 2 },
  { key: 3, text: 'Calibri', value: 3 },
  { key: 4, text: 'Times New Roman', value: 4 }
]

const verticalAlignOptions = [
  { key: 1, text: 'Bottom', value: 1 },
  { key: 2, text: 'Center', value: 2 },
  { key: 3, text: 'Top', value: 3 }
]

class DecorateOptions extends Component {
  render() {
    return (
      <div>
        <div>
          <Input placeholder="Gif Text" />
        </div>
        <div>
          <Button.Group>
            <Button>Normal</Button>
            <Button.Or />
            <Button>Bold</Button>
          </Button.Group>
        </div>
        <div>
          <Input
            label={{ basic: true, content: 'px' }}
            labelPosition="right"
            placeholder="Enter font size.."
          />
        </div>
        <div>
          <Dropdown placeholder="Select Font" selection options={fontOptions} />
        </div>

        <div>
          <Dropdown
            placeholder="Text Alignment"
            selection
            options={verticalAlignOptions}
          />
        </div>
      </div>
    )
  }
}

export default DecorateOptions
