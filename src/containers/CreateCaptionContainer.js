import React from 'react';
import { Segment, Form, Button, Input } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { createGif } from '../GifMaker';
import GifDisplay from '../components/GifDisplay';

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

  downloadFile = () => {
    this.props.GifStore.setGifComplete(true);
  };

  render() {
    const { caption, fontSize, fontColor, baseline } = this.props.GifStore;
    return (
      <Container>
        <Wrapper className='gray'>
          <h2 className='f4 f3-l fw2  ma1'>Let's add a caption!</h2>
          <h2 className='f5 f4-l fw2  ma1'>
            Click "preview" when you're ready to see your changes
          </h2>
          <Segment>
            <GifDisplay />
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Caption</label>
                <Input value={caption} onChange={this.handleCaptionChange} />
              </Form.Field>

              <Form.Field className='gray'>
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
                <label>Location</label>
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
              <Button color={'grey'} type='submit'>
                Preview
              </Button>
            </Form>
          </Segment>
          <Button onClick={this.downloadFile} color={'teal'}>
            Finish
          </Button>
        </Wrapper>
      </Container>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 600px;
  margin: 1rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export default Caption;
