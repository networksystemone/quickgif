import gifshot from 'gifshot'

//callback to parent component
getVideoLength = videoLength => {
  this.props.getVideoLength(videoLength)
}

export function createGif() {
  gifshot.createGIF(
    {
      gifWidth: this.props.gifOptions.gifWidth,
      gifHeight: this.props.gifOptions.gifHeight,
      video: this.props.gifOptions.videoLocation,
      offset: this.props.gifOptions.gifStartTime,
      saveRenderingContexts: true
    },
    function(obj) {
      TODO
    }
  )
}

export function readFile() {
  TODO
}
