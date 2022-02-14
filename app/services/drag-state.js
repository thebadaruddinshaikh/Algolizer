import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class DragStateService extends Service {
  @tracked dragging = false;
  source = [9, 9];
  destination = [29, 9];
  startDragging() {
    this.dragging = true;
  }

  stopDragging() {
    this.dragging = false;
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
}
