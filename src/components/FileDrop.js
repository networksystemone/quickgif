import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';

class FileDrop extends React.Component {
  onDrop = file => {
    this.props.file(file[0].preview);
  };

  render() {
    return (
      <div>
        <Container>
          <h2 className='f4 f3-l fw2 gray ma1 '>Let's get you started.</h2>
          <h2 className='f4 f3-l fw2 gray ma1  '>Choose your video file</h2>
          <Segment>
            <DropzoneContainer>
              <Dropzone className='dropzone' onDrop={this.onDrop}>
                <h2 className='f5 f4-l fw1 gray ma1 '>MP4 Video File</h2>
                <h2 className='f6 f5-l fw1 gray mb3 ma1 '>
                  Drag video file here or click to browse
                </h2>
                <Icon name='file video' size='huge' color='teal' />
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
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 2rem;
`;
const DropzoneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;

export default FileDrop;
