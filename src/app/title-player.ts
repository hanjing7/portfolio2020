export class TitlePlayer{

  constructor(private titleTexts: string[], private speedLetter: number, private speedWord: number) {}

  currentContent = ``;

  public play() {
    return this.currentContent;
  }

  typeWriter(text: string, i: number, callBack) {
    // check if text isn't finished yet
    if (i < (text.length)) {
      this.currentContent = text.substring(0, i + 1);
      setTimeout(() => this.typeWriter(text, i + 1, callBack), this.speedLetter);
    } else {
      setTimeout(() => callBack(), this.speedWord);
    }
  }

  startTextAnimation(i: number) {
    if (i < this.titleTexts.length) {
      this.typeWriter(this.titleTexts[i], 0, () => this.startTextAnimation(i + 1));
    } else {
      setTimeout(() => this.startTextAnimation(0), 20000);
    }
  }

  public run() {
    this.startTextAnimation(0);
  }
}
