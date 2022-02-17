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
      let randHeight = Math.random() * 273;
      this.barList.push({
        height: randHeight + 'px',
        width: width + 'px',
      });
    }
    this.barList = [...this.barList];
  }

  @action
  onSlide(event) {
    this.sliderValue = event.currentTarget.value;
    this.generateList();
  }

  get getContainerWidth() {
    return document.querySelector('.bar-container').offsetWidth - 50;
  }
}
