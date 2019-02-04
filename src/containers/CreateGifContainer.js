import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import FileDrop from '../components/FileDrop';
import VideoPreview from '../components/VideoPreview';

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

  displayGif = () => {
    return (
      <div>
        <img src={this.props.GifStore.gif.image} alt='gifImg' />
      </div>
    );
  };

  render() {
    if (this.props.GifStore.file === null) {
      return <FileDrop file={this.handleFile} />;
    } else if (
      this.props.GifStore.file !== null &&
      this.props.GifStore.gif === null
    ) {
      return (
        <VideoPreview
          source={this.props.GifStore.file}
          startTime={this.setStartTime}
          duration={this.setDuration}
        />
      );
    } else {
      return <div>{this.displayGif()}</div>;
    }
  }
}

export default CreateGifContainer;
