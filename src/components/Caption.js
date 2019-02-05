import React from 'react';
import { Header, Segment, Form, Button } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';

import { createGif } from '../GifMaker';

@inject('GifStore')
@observer
class Caption extends React.Component {
  state = {
    caption: '',
    fontColor: '',
    baseline: ''
  };

  handleCaptionChange = event => {
    this.setState({ caption: event.target.value });
  };

  handleColorChange = event => {
    this.setState({ fontColor: event.target.value });
  };

  handleBaseline = event => {
    this.setState({ baseline: event.target.value });
  };

  handleSubmit = () => {
    const { caption, fontColor, baseline } = this.state;
    this.props.GifStore.setCaptionText(caption);
    this.props.GifStore.setFontColor(fontColor);
    this.props.GifStore.setBaseline(baseline);
    createGif();
  };

  render() {
    return (
      <Segment placeholder>
        <Header>3) Add a caption</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Caption</label>
            <input
              value={this.state.caption}
              onChange={this.handleCaptionChange}
            />
          </Form.Field>

          <Form.Field>
            <label>Text Color</label>
            <Button.Group>
              <Button value='#000000' onClick={this.handleColorChange}>
                Black
              </Button>
              <Button value='#ffffff' onClick={this.handleColorChange}>
                White
              </Button>
            </Button.Group>
          </Form.Field>

          <Form.Field>
            <label>Baseline</label>
            <Button.Group>
              <Button value='bottom' onClick={this.handleBaseline}>
                Bottom
              </Button>
              <Button value='center' onClick={this.handleBaseline}>
                Center
              </Button>
              <Button value='top' onClick={this.handleBaseline}>
                Top
              </Button>
            </Button.Group>
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Segment>
    );
  }
}

export default Caption;

// handleItemClick = (e, { name }) => this.setState({ activeItem: name });

// render() {
//   const { activeItem } = this.state;

//   return (
//     <Menu stackable>
//       <Menu.Item>QuickGif</Menu.Item>

//       <Menu.Item
//         name='Home'
//         active={activeItem === 'home'}
//         onClick={this.handleItemClick}
//       >
//         Home
//       </Menu.Item>
