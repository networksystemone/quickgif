import React from 'react';
import { Header, Segment, Form, Button } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';

import { createGif } from '../GifMaker';

@inject('GifStore')
@observer
class Caption extends React.Component {
  state = {
    caption: ''
  };

  handleCaptionChange = event => {
    this.setState({ caption: event.target.value });
  };

  handleSubmit = () => {
    const { caption } = this.state;
    this.props.GifStore.setCaptionText(caption);
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
          <Button type='submit'>Submit</Button>
        </Form>
      </Segment>
    );
  }
}

export default Caption;
