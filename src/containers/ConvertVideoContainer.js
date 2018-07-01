import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import Dropzone from 'react-dropzone'
import gifshot from 'gifshot'

import VideoPreview from '../components/VideoPreview'
import DecorateOptions from '../components/DecorateOptions'

class ConvertVideoContainer extends Component {
  state = {
    file: null,
    gif: null,
    startTime: 0,
    duration: 0,
    gifComplete: false,
    savedRenderingContexts: []
  }

  onDrop = file => {
    console.log(file)
    this.setState({
      file: file[0].preview
    })
  }

  createGif = () => {
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
            savedRenderingContexts: gif.savedRenderingContexts
          })
        }
      )
    } else {
      gifshot.createGIF(
        {
          gifWidth: 480,
          gifHeight: 270,
          savedRenderingContexts: this.state.savedRenderingContexts,
          text: 'test',
          fontWeight: 'bold',
          fontSize: '25px',
          minFontSize: '10px',
          fontFamily: 'sans-serif',
          textAlign: 'center',
          textBaseline: 'center'
        },
        gif => {
          this.setState({
            gif,
            gifComplete: true
          })
        }
      )
    }
  }

  displayGif = () => {
    console.log(this.state.gif)
    console.log(this.state.savedRenderingContexts)

    return (
      <div>
        <img src={this.state.gif.image} alt="gifImg" />
      </div>
    )
  }

  setDuration = duration => {
    console.log(duration)
    this.setState({ duration })
  }

  setStartTime = startTime => {
    console.log(startTime)
    this.setState({ startTime })
  }

  render() {
    if (this.state.file === null) {
      return (
        <div>
          <p>ConvertVideoContainer</p>
          <Dropzone onDrop={this.onDrop}>
            <p>
              Try dropping some files here, or click to select files to upload.
            </p>
          </Dropzone>
        </div>
      )
    } else if (this.state.file !== null && this.state.gif === null) {
      return (
        <div>
          <VideoPreview
            source={this.state.file}
            startTime={this.setStartTime}
            duration={this.setDuration}
          />
          <Button onClick={this.createGif}> Decorate </Button>
        </div>
      )
    } else if (this.state.gif !== null && this.state.gifComplete === false) {
      return (
        <div>
          {this.displayGif()}
          <DecorateOptions />
          <Button onClick={this.createGif}> createGif </Button>
        </div>
      )
    } else {
      return <div>{this.displayGif()}</div>
    }
  }
}

export default ConvertVideoContainer
