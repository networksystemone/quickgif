import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';

import './FileDrop.css';

class FileDrop extends React.Component {
  onDrop = file => {
    this.props.file(file[0].preview);
  };
  render() {
    return (
      <div>
        <Container>
          <Segment placeholder>
            <Header>1) Upload Video</Header>
            <DropzoneContainer>
              <Dropzone className='dropzone' onDrop={this.onDrop}>
                <p>Drag video file here or click to browse</p>
              </Dropzone>
            </DropzoneContainer>
          </Segment>
        </Container>
      </div>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const DropzoneContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default FileDrop;
