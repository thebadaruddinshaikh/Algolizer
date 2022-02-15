import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class PathfindingBoxComponent extends Component {
  @service('drag-state') dragState;

  @tracked isWall = this.args.isWall;
  @tracked isVisited = this.args.isVisited;
  isVisited = this.args.isVisited;
  position = this.args.arrPos;
  onChange = this.args.onChange;
  isSource = this.dragState.isSource(this.position);
  isDestination = this.dragState.isDestination(this.position);

  @action
  touch() {
    this.interactHandler();
  }

  @action
  onDrag() {
    if (this.dragState.dragging) {
      this.interactHandler();
    }
  }

  interactHandler() {
    if (!this.isSource && !this.isDestination && !this.inProgress) {
      this.isWall = !this.isWall;
      this.isVisited = false;
      this.onChange(this.position, this.isWall, false);
    }
  }

  get inProgress() {
    return this.dragState.underProgramControl;
  }

  get getClasses() {
    if (this.isWall) {
      return 'wall';
    } else if (this.isVisited) {
      return 'visited';
    }
  }
}
