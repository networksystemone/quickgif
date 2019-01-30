import { observable, action, computed } from 'mobx';

class GifStore {
  @observable video = 'this is the video';

  get video() {
    return this.video;
  }
}

const store = new GifStore();
export default store;
