import { observable, action, computed } from 'mobx';

class GifStore {
  @observable file = null;
  @observable gifPreview = null;
  @observable gif = null;
  @observable duration;
  @observable startTime;
  @observable captionText = '';

  get file() {
    return this.video;
  }

  get duration() {
    return this.duration;
  }

  get startTime() {
    return this.startTime;
  }

  get gifPreview() {
    return this.gifPreview;
  }

  get gif() {
    return this.gif;
  }

  get captionText() {
    return this.captionTexxt;
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

  @action setGifPreview(gifPreview) {
    this.gifPreview = gifPreview;
  }

  @action setGif(gif) {
    this.gif = gif;
  }

  @action setCaptionText(captionText) {
    this.captionText = captionText;
  }
}

const store = new GifStore();
export default store;
