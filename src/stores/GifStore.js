import { observable, action, computed } from 'mobx';

class GifStore {
  @observable file = null;
  @observable gif = null;
  @observable duration = 1;
  @observable startTime = 0;
  @observable captionText = '';
  @observable fontColor = '#ffffff';
  @observable baseline = 'center';
  @observable fontSize = 16;
  @observable videoTrimmed = false;
  @observable progress = 0;
  @observable buildInProgress = false;
  @observable gifComplete = false;

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

  get progress() {
    return this.progress;
  }

  get buildInProgress() {
    return this.buildInProgress;
  }

  get gifComplete() {
    return this.gifComplete;
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
  }

  @action setProgress(progress) {
    this.progress = progress;
  }

  @action setBuildInProgress(buildInProgress) {
    this.buildInProgress = buildInProgress;
  }

  @action setGifComplete(gifComplete) {
    this.gifComplete = gifComplete;
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
