import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Segment, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import FileSaver from 'file-saver';
import { b64ToBlob } from '../util/b64ToBlob';

@inject('GifStore')
@observer
class DownloadGif extends Component {
  saveGif = () => {
    const { gif } = this.props.GifStore;
    let blob = b64ToBlob(gif);
    FileSaver.saveAs(blob, 'quick.gif');
  };

  render() {
    const { gif } = this.props.GifStore;
    return (
      <Container>
        <h2 className='f4 f3-l fw2 gray ma1 '>Looks great!</h2>
        <h2 className='f4 f3-l fw2 gray ma1  '>
          Click "Download Gif" to save your gif
        </h2>
        <Segment>
          <img src={gif} alt='gifImg' />
          <ButtonWrapper>
            <Button>Create Another</Button>
            <Button onClick={this.saveGif} color={'teal'}>
              Download Gif
            </Button>
          </ButtonWrapper>
        </Segment>
      </Container>
    );
  }
}

export default DownloadGif;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 2rem;
`;

const ButtonWrapper = styled.div`
  margin: 1rem;
`;
