import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import FileDrop from '../components/FileDrop';
import VideoPreview from './VideoPreviewContainer';
import Caption from './CreateCaptionContainer';
import DownloadGif from './DownloadGifContainer';

@inject('GifStore')
@observer
class CreateGifContainer extends Component {
  handleFile = file => {
    this.props.GifStore.setFile(file);
  };

  setDuration = duration => {
    this.props.GifStore.setDuration(duration);
  };

  setStartTime = startTime => {
    this.props.GifStore.setStartTime(startTime);
  };

  render() {
    const { fileUploaded, videoTrimmed, gifComplete } = this.props.GifStore;
    if (!fileUploaded) {
      return <FileDrop file={this.handleFile} />;
    } else if (fileUploaded && !videoTrimmed) {
      return (
        <VideoPreview
          source={this.props.GifStore.file}
          startTime={this.setStartTime}
          duration={this.setDuration}
        />
      );
    } else if (gifComplete) {
      return <DownloadGif />;
    } else {
      return <Caption />;
    }
  }
}

export default CreateGifContainer;
