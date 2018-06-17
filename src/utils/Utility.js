import gifshot from "gifshot";

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
      console.log(obj);
    }
  );
}

export function readFile() {
  TODO;
}
