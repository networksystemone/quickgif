import { observable, action, computed } from 'mobx';

class GifStore {
  @observable file = null;
  @observable gifPreview = null;
  @observable gif = null;
  @observable duration;
  @observable startTime;
  @observable captionText = '';
  @observable fontColor = '#ffffff';
  @observable baseline = 'center';
  @observable fontSize;

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
    return this.captionText;
  }

  get fontColor() {
    return this.fontColor;
  }

  get baseline() {
    return this.baseline;
  }

  get fontSize() {
    return this.fontSize;
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

  @action setFontColor(fontColor) {
    this.fontColor = fontColor;
  }

  @action setBaseline(baseline) {
    this.baseline = baseline;
  }

  @action setFontSize(fontSize) {
    this.fontSize = fontSize;
    console.log(this.fontSize);
  }
}

const store = new GifStore();
export default store;
