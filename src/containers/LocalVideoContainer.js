import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import gifshot from 'gifshot'
import { Button, Container, Col, Row } from 'reactstrap'
import MdFileUpload from 'react-icons/lib/md/file-upload'

import VideoPreview from '../components/VideoPreview'
import DecorateOptions from '../components/DecorateOptions'
import Loader from '../components/Loader'
import './LocalVideoContainer.css'

class LocalVideoContainer extends Component {
  state = {
    file: null,
    gif: null,
    startTime: 0,
    duration: 0,
    gifComplete: false,
    showLoader: false,
    savedRenderingContexts: []
  }

  onDrop = file => {
    if (file[0].type === 'video/mp4') {
      this.setState({
        file: file[0].preview
      })
    }
  }

  setDuration = duration => {
    this.setState({ duration })
  }

  setStartTime = startTime => {
    this.setState({ startTime })
  }

  createPreview = options => {
    gifshot.createGIF(
      {
        gifWidth: 480,
        gifHeight: 270,
        savedRenderingContexts: this.state.savedRenderingContexts,
        text: options.text,
        fontWeight: options.fontWeight,
        fontFamily: options.font,
        fontColor: options.fontColor,
        fontSize: options.fontSize,
        textAlign: 'center',
        textBaseline: 'bottom'
      },

      gif => {
        this.setState({
          gif
        })
      }
    )
  }

  createGif = options => {
    this.setState({ showLoader: true })
    if (this.state.gif === null) {
      gifshot.createGIF(
        {
          video: this.state.file,
          gifWidth: 480,
          gifHeight: 270,
          numFrames: this.state.duration / 0.1,
          frameDuration: 1,
          offset: this.state.startTime,
          saveRenderingContexts: true
        },
        gif => {
          this.setState({
            gif,
            savedRenderingContexts: gif.savedRenderingContexts,
            showLoader: false
          })
          console.log(gif)
        }
      )
    } else {
      gifshot.createGIF(
        {
          gifWidth: 480,
          gifHeight: 270,
          savedRenderingContexts: this.state.savedRenderingContexts,
          text: options.text,
          fontWeight: options.fontWeight,
          fontFamily: options.font,
          fontColor: options.fontColor,
          fontSize: options.fontSize,
          textAlign: 'center',
          textBaseline: 'bottom'
        },

        gif => {
          this.setState({
            gif,
            gifComplete: true,
            showLoader: false
          })
        }
      )
    }
  }

  buildGif = options => {
    console.log(options)
    this.createGif(options)
  }

  buildPreview = options => {
    this.createPreview(options)
  }

  displayGif = () => {
    return (
      <div>
        <img class="img-fluid" src={this.state.gif.image} alt="gifImg" />
      </div>
    )
  }

  render() {
    if (this.state.showLoader === true) {
      return (
        <Container className="vertical-center">
          <Row>
            <Loader />
          </Row>
        </Container>
      )
    } else if (this.state.file === null) {
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
      )
    } else if (this.state.file !== null && this.state.gif === null) {
      return (
        <Container>
          <Row>
            <Col>
              <VideoPreview
                source={this.state.file}
                startTime={this.setStartTime}
                duration={this.setDuration}
              />
            </Col>
          </Row>
          <Row className="justify-content-end">
            <Button onClick={this.createGif} color="success" size="md">
              Decorate
            </Button>
          </Row>
        </Container>
      )
    } else if (this.state.gif !== null && this.state.gifComplete === false) {
      return (
        <Container>
          <Row>
            <Col align="center">{this.displayGif()}</Col>
          </Row>

          <DecorateOptions
            previewOptions={this.buildPreview}
            createOptions={this.buildGif}
          />
        </Container>
      )
    } else {
      return (
        <Container className="vertical-center">
          <Row>
            <Col align="center">{this.displayGif()}</Col>
          </Row>
        </Container>
      )
    }
  }
}

export default LocalVideoContainer
