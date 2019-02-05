import { observable, action, computed } from 'mobx';

class GifStore {
  @observable file = null;

  @observable gif = null;
  @observable duration = null;
  @observable startTime = null;
  @observable captionText = '';
  @observable fontColor = '#ffffff';
  @observable baseline = 'center';
  @observable fontSize;

  @observable videoTrimmed = false;

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

  get videoTrimmed() {
    return this.videoTrimmed;
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

  @action setVideoTrimmed() {
    this.videoTrimmed = true;
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

  @computed get fileUploaded() {
    if (this.file !== null) {
      return true;
    }
    return false;
  }
}

const store = new GifStore();
export default store;
