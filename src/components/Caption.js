import React from 'react';
import { Header, Segment, Form, Button, Input } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { createGif } from '../GifMaker';

@inject('GifStore')
@observer
class Caption extends React.Component {
  handleCaptionChange = e => {
    e.preventDefault();
    this.props.GifStore.setCaptionText(e.target.value);
  };

  handleFontSizeChange = e => {
    e.preventDefault();
    this.props.GifStore.setFontSize(e.target.value);
  };

  handleColorChange = e => {
    e.preventDefault();
    this.props.GifStore.setFontColor(e.target.value);
  };

  handleBaseline = e => {
    e.preventDefault();
    this.props.GifStore.setBaseline(e.target.value);
  };

  handleSubmit = () => {
    createGif();
  };

  render() {
    const { caption, fontSize, fontColor, baseline } = this.props.GifStore;
    return (
      <SegementStyled>
        <Header>3) Add a caption</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Caption</label>
            <Input value={caption} onChange={this.handleCaptionChange} />
          </Form.Field>

          <Form.Field>
            <label>Text Color</label>
            <Button.Group>
              <Button
                active={fontColor === '#000000'}
                value='#000000'
                onClick={this.handleColorChange}
              >
                Black
              </Button>
              <Button
                active={fontColor === '#ffffff'}
                value='#ffffff'
                onClick={this.handleColorChange}
              >
                White
              </Button>
            </Button.Group>
          </Form.Field>

          <Form.Field>
            <label>Baseline</label>
            <Button.Group>
              <Button
                active={baseline === 'bottom'}
                value='bottom'
                onClick={this.handleBaseline}
              >
                Bottom
              </Button>
              <Button
                active={baseline === 'center'}
                value='center'
                onClick={this.handleBaseline}
              >
                Center
              </Button>
              <Button
                active={baseline === 'top'}
                value='top'
                onClick={this.handleBaseline}
              >
                Top
              </Button>
            </Button.Group>
          </Form.Field>

          <Form.Field>
            <label>FontSize</label>
            <Input
              type='number'
              label={{ basic: true, content: 'px' }}
              labelPosition='right'
              value={fontSize}
              onChange={this.handleFontSizeChange}
            />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </SegementStyled>
    );
  }
}

const SegementStyled = styled(Segment)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export default Caption;
