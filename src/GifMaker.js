import gifshot from 'gifshot';
import store from './stores/GifStore';

export const createPreview = () => {
  gifshot.createGIF(
    {
      video: store.file,
      gifWidth: 360,
      gifHeight: 202,
      numFrames: store.duration / 0.1,
      frameDuration: 1,
      offset: store.startTime,
      text: store.captionText
    },
    gif => {
      store.setGifPreview(gif);
    }
  );
};

export const createGif = () => {
  gifshot.createGIF(
    {
      video: store.file,
      gifWidth: 360,
      gifHeight: 202,
      numFrames: store.duration / 0.1,
      frameDuration: 1,
      offset: store.startTime,
      text: store.captionText
    },
    gif => {
      store.setGif(gif);
    }
  );
};
