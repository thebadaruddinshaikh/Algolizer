import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SortingIndexController extends Controller {
  @tracked barList = [];
  @tracked sliderValue = 20;

  @action
  generateList() {
    this.barList = [];
    let width = this.getContainerWidth / this.sliderValue;
    for (let x = 0; x < this.sliderValue; x++) {
      let randHeight = Math.ceil(Math.random() * 373);
      this.barList.push({
        height: randHeight,
        width: width,
        comparer: false,
        comparee: false,
        placed: false,
      });
    }
    this.triggerRebuild();
  }

  @action
  onSlide(event) {
    this.sliderValue = event.currentTarget.value;
    this.generateList();
  }
  @action
  async sort() {
    for (let x = 0; x < this.barList.length - 1; x++) {
      let y;
      for (y = 0; y < this.barList.length - x - 1; y++) {
        if (this.barList[y].height > this.barList[y + 1].height) {
          let temp = this.barList[y];
          this.barList[y] = this.barList[y + 1];
          this.barList[y + 1] = temp;
          this.triggerRebuild();
          await new Promise((r) => setTimeout(r, 1));
        }
      }
      this.markedPlaced(y);
    }
    console.log(this.barList);
  }

  markedPlaced(position) {
    this.barList[position] = {
      height: this.barList[position].height,
      width: this.barList[position].width,
      placed: true,
    };
  }

  get getContainerWidth() {
    return document.querySelector('.bar-container').offsetWidth - 50;
  }

  triggerRebuild() {
    this.barList = [...this.barList];
  }
}
