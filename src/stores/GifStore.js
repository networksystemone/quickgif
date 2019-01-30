import { observable, action, computed } from 'mobx';

class GifStore {
  @observable file = null;
  @observable duration = null;

  get file() {
    return this.video;
  }

  get duration() {
    return this.duration;
  }

  @action setDuration(duration) {
    this.duration = duration;
  }

  @action setFile(file) {
    this.file = file;
  }
}

const store = new GifStore();
export default store;
