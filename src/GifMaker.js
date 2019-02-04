import gifshot from 'gifshot';
import store from './stores/GifStore';

export const createPreview = () => {
  gifshot.createGIF(
    {
      video: store.file,
      gifWidth: 480,
      //gifHeight: 'auto',
      numFrames: store.duration / 0.1,
      frameDuration: 1,
      offset: store.startTime
    },
    gif => {
      store.setGif(gif);
    }
  );
};
