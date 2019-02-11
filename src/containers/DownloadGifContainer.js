import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Segment, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import FileSaver from 'file-saver';

@inject('GifStore')
@observer
class DownloadGif extends Component {
  b64toBlob = dataURI => {
    var byteString = atob(dataURI.split(',')[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);

    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/gif' });
  };

  saveGif = () => {
    const { gif } = this.props.GifStore;
    let blob = this.b64toBlob(gif);
    console.log(blob);
    FileSaver.saveAs(blob, 'yourgif.gif');
  };

  render() {
    const { gif } = this.props.GifStore;
    return (
      <Container>
        <h2 className='f4 f3-l fw2 gray ma1 '>Looks great!</h2>
        <h2 className='f4 f3-l fw2 gray ma1  '>
          Click "Save Gif" to save your gif
        </h2>
        <Segment>
          <img src={gif} alt='gifImg' />
          <ButtonWrapper>
            <Button>Create Another</Button>
            <Button onClick={this.saveGif} color={'teal'}>
              Save Gif
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
