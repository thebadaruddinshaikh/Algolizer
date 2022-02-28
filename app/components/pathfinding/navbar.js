import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PathfindingNavbarComponent extends Component {
  itemDropDownMap = {
    algo: '.algo-drop-down',
    speed: '.speed-drop-down',
  };
  @tracked selectedAlgo = 'Select an Algorithm';
  @tracked selectedSpeed = 'Select a Speed';

  @action
  showDropDown(event) {
    let menuId = event.srcElement.id;
    let dropDownMenu = document.querySelector(this.itemDropDownMap[menuId]);
    dropDownMenu.style.top = '85px';
  }

  @action
  hideDropDown(event) {
    let menuId = event.srcElement.id;
    let dropDownMenu = document.querySelector(this.itemDropDownMap[menuId]);
    dropDownMenu.style.top = '-200px';
    this.currentDropDown = '';
  }
}
