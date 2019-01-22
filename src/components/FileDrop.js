import React from "react";
import Dropzone from "react-dropzone";
import MdFileUpload from "react-icons/lib/md/file-upload";
import { Container, Row } from "reactstrap";
import "./FileDrop.css";

class FileDrop extends React.Component {
  onDrop = file => {
    this.props.file(file[0].preview);
  };
  render() {
    return (
      <Container className="vertical-center">
        <Row>
          <Dropzone className="dropzone" onDrop={this.onDrop}>
            <p>Drop .MP4 file here or click to select</p>
            <p>
              <MdFileUpload size={50} color="#767d8c" />
            </p>
          </Dropzone>
        </Row>
      </Container>
    );
  }
}

export default FileDrop;
