import { observable, action, computed } from 'mobx';

class GifStore {
  @observable file = null;
  @observable gif = null;
  @observable duration;
  @observable startTime;

  get file() {
    return this.video;
  }

  get duration() {
    return this.duration;
  }

  get startTime() {
    return this.startTime;
  }

  get gif() {
    return this.gif;
  }

  @action setDuration(duration) {
    this.duration = duration;
  }

  @action setFile(file) {
    this.file = file;
  }

  @action setStartTime(startTime) {
    this.startTime = startTime;
  }

  @action setGif(gif) {
    this.gif = gif;
  }
}

const store = new GifStore();
export default store;
