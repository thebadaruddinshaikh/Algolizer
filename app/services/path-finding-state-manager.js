import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class PathFindingStateManagerService extends Service {
  @tracked dragging = false;
  @tracked underProgramControl = false;
  @tracked sourceMove = false;
  @tracked destinationMove = false;

  @tracked source = [9, 9];
  @tracked destination = [29, 9];

  startDragging() {
    this.dragging = true;
  }

  reset() {
    this.dragging = false;
    this.sourceMove = false;
    this.destinationMove = false;
  }

  isSource(arr) {
    if (arr[0] == this.source[0] && arr[1] == this.source[1]) {
      return true;
    }
    return false;
  }

  isDestination(arr) {
    if (arr[0] == this.destination[0] && arr[1] == this.destination[1]) {
      return true;
    }
    return false;
  }

  setSource(sourceArr) {
    this.source = sourceArr;
  }

  setDestination(destinationArr) {
    this.destination = destinationArr;
  }
}
