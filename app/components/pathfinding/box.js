import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class PathfindingBoxComponent extends Component {
  @service('path-finding-state-manager') stateManager;

  @tracked isWall = this.args.isWall;
  @tracked isVisited = this.args.isVisited;

  get isSource() {
    return this.stateManager.isSource(this.args.arrPos);
  }

  get isDestination() {
    return this.stateManager.isDestination(this.args.arrPos);
  }

  get getClasses() {
    if (this.isWall) {
      return 'wall';
    } else if (this.isVisited) {
      return 'visited';
    }
  }

  @action
  mouseDownHandler() {
    if (this.isSource) {
      this.stateManager.sourceMove = true;
    } else if (this.isDestination) {
      this.stateManager.destinationMove = true;
    }
    this.interactionHandler();
  }

  @action
  dragHandler() {
    if (this.stateManager.dragging) {
      this.interactionHandler();
    }
  }

  interactionHandler() {
    if (this.stateManager.sourceMove) {
      this.stateManager.setSource(this.args.arrPos);
    } else if (this.stateManager.destinationMove) {
      this.stateManager.setDestination(this.args.arrPos);
    } else if (
      !this.isSource &&
      !this.isDestination &&
      !this.stateManager.underProgramControl
    ) {
      this.isWall = !this.isWall;
      this.isVisited = false;
      this.args.onChange(this.args.arrPos, this.isWall, false);
    }
  }
}
