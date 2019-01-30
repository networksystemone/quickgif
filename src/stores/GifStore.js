import { observable, action, computed } from 'mobx';

class GifStore {
  @observable file = null;

  get file() {
    return this.video;
  }

  @action setFile(file) {
    this.file = file;
  }
}

const store = new GifStore();
export default store;
