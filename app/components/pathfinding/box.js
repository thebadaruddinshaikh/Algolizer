import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class PathfindingBoxComponent extends Component {
  @service('path-finding-state-manager') stateManager;

  @tracked isWall = this.args.isWall;
  @tracked isVisited = this.args.isVisited;
  @tracked isPath = this.args.isPath;

  get isSource() {
    return this.stateManager.isSource(this.args.arrPos);
  }

  get isDestination() {
    return this.stateManager.isDestination(this.args.arrPos);
  }

  get getClasses() {
    if (this.isWall) {
      return 'wall';
    } else if (this.isPath) {
      return 'path';
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
  mouseEnterHandler() {
    if (this.stateManager.dragging) {
      this.interactionHandler();
    }
  }

  updateBoxState(isWall, isVisited, isPath) {
    this.isWall = isWall;
    this.isVisited = isVisited;
    this.isPath = isPath;
  }

  interactionHandler() {
    if (this.stateManager.underProgramControl) return;

    if (this.stateManager.sourceMove || this.stateManager.destinationMove) {
      if (this.stateManager.sourceMove && !this.isWall) {
        this.stateManager.setSource(this.args.arrPos);
      } else if (this.stateManager.destinationMove && !this.isWall) {
        this.stateManager.setDestination(this.args.arrPos);
      }
    } else if (!this.isSource && !this.isDestination) {
      this.updateBoxState(!this.isWall, false, false);
      this.args.onChange(this.args.arrPos, this.isWall, false, false);
    }
  }
}
