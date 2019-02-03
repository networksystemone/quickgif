import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { observer, inject } from 'mobx-react';

import { create } from './GifMaker';
import FileDrop from './components/FileDrop';
import VideoPreview from './components/VideoPreview';

@inject('GifStore')
@observer
class App extends Component {
  handleFile = file => {
    this.props.GifStore.setFile(file);
  };

  setDuration = duration => {
    this.props.GifStore.setDuration(duration);
  };

  setStartTime = startTime => {
    this.props.GifStore.setStartTime(startTime);
  };

  createGif = () => {
    create();
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
      return (
        <div>
          <FileDrop file={this.handleFile} />
        </div>
      );
    } else if (
      this.props.GifStore.file !== null &&
      this.props.GifStore.gif === null
    ) {
      return (
        <div>
          <div>
            <VideoPreview
              source={this.props.GifStore.file}
              startTime={this.setStartTime}
              duration={this.setDuration}
            />
          </div>
          <div>
            <Button onClick={this.createGif} color='success' size='md'>
              Create Gif
            </Button>
          </div>
        </div>
      );
    } else {
      return <div>{this.displayGif()}</div>;
    }
  }
}

export default App;
