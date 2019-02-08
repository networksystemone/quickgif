import React from 'react';
import { Segment, Progress } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';

@inject('GifStore')
@observer
class GifDisplay extends React.Component {
  render() {
    const { gif, buildInProgress, progress } = this.props.GifStore;
    let display;
    if (buildInProgress) {
      display = (
        <Segment placeholder>
          <Progress percent={progress * 100} />
        </Segment>
      );
    } else if (gif) {
      display = (
        <Segment placeholder>
          <img src={gif} alt='gifImg' />
        </Segment>
      );
    } else {
      display = (
        <div className='mb2'>
          <Segment placeholder>
            <h2 className='f4 f3-l fw2  ma1'>
              Click "Preview" to see your gif
            </h2>
          </Segment>
        </div>
      );
    }
    return <div>{display}</div>;
  }
}

export default GifDisplay;
