import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PathfindingNavbarComponent extends Component {
  @service('path-finding-state-manager') stateManager;

  itemDropDownMap = {
    algo: '.algo-drop-down',
    speed: '.speed-drop-down',
  };

  @action
  onSelectAlgorithm(selectedAlgorithm) {
    if (!this.stateManager.underProgramControl) {
      this.args.updateAlgo(selectedAlgorithm);
      this.hideDropDown('algo');
    }
  }

  @action
  onSelectSpeed(selectedSpeed) {
    if (!this.stateManager.underProgramControl) {
      this.args.updateSpeed(selectedSpeed);
      this.hideDropDown('speed');
    }
  }
  @action
  showDropDown(event) {
    let menuId = event.srcElement ? event.srcElement.id : event;
    let dropDownMenu = document.querySelector(this.itemDropDownMap[menuId]);
    dropDownMenu.style.top = '85px';
  }

  @action
  hideDropDown(event) {
    let menuId = event.srcElement ? event.srcElement.id : event;
    let dropDownMenu = document.querySelector(this.itemDropDownMap[menuId]);
    dropDownMenu.style.top = '-200px';
  }
}
