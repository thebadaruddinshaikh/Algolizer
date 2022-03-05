import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class PathfindingIndexController extends Controller {
  @service('path-finding-state-manager') stateManager;

  @tracked grid = this.model;
  @tracked selectedAlgo = 'No Selection';
  @tracked selectedSpeed = 'Medium';

  delayMap = {
    Slow: 250,
    Medium: 100,
    Fast: 50,
  };

  @action
  onChangeHandler(pos, wall, visited) {
    this.updateWithoutRebuild(pos[0], pos[1], wall, visited);
  }

  @action
  enableDragging() {
    this.stateManager.startDragging();
  }

  @action
  disableDragging() {
    this.stateManager.stopDragging();
  }

  @action
  async visualize() {
    this.stateManager.underProgramControl = true;

    if (this.selectedAlgo == 'DFS') {
      let stack = [];
      stack.push(this.stateManager.source);
      await this.depthFirstSearch(stack, this.delayMap[this.selectedSpeed]);
    } else if (this.selectedAlgo == 'BFS') {
      let queue = [];
      queue.push(this.stateManager.source);
      await this.breadthFirstSearch(queue, this.delayMap[this.selectedSpeed]);
    }
    this.stateManager.underProgramControl = false;
  }

  @action
  updateSelectedAlgorithm(option) {
    this.selectedAlgo = option;
  }

  @action
  updateSelectedSpeed(option) {
    this.selectedSpeed = option;
  }

  @action
  clearBoard() {
    for (let y = 0; y < this.grid.length; y++) {
      for (let x = 0; x < this.grid[0].length; x++) {
        if (this.grid[y][x].isWall) {
          this.grid[y][x] = {
            isWall: false,
            isVisited: false,
          };
        }
      }
    }
    this.clearPath();
  }

  @action
  clearPath() {
    for (let y = 0; y < this.grid.length; y++) {
      for (let x = 0; x < this.grid[0].length; x++) {
        if (this.grid[y][x].isVisited) {
          this.grid[y][x] = {
            isWall: false,
            isVisited: false,
          };
        }
      }
    }
    this.grid = [...this.grid];
  }

  async updateWithRebuild(x, y, isWall, isVisited) {
    this.grid[y][x] = {
      isWall: isWall,
      isVisited: isVisited,
    };
    this.grid = [...this.grid];
  }

  updateWithoutRebuild(x, y, isWall, isVisited) {
    this.grid[y][x].isWall = isWall;
    this.grid[y][x].isVisited = isVisited;
  }

  async depthFirstSearch(stack, speed) {
    let dy = [-1, 0, 1, 0];
    let dx = [0, 1, 0, -1];

    while (stack.length) {
      let box = stack.pop();

      if (this.grid[box[1]][box[0]].isVisited) {
        continue;
      }
      this.updateWithRebuild(box[0], box[1], false, true);

      if (this.stateManager.isDestination(box)) {
        break;
      }

      for (let i = 0; i < 4; i++) {
        let x = box[0] + dx[i];
        let y = box[1] + dy[i];

        //check if off the grid
        if (x < 0 || y < 0 || x > 39 || y > 19) {
          continue;
        }
        //check if wall
        else if (this.grid[y][x].isWall) {
          continue;
        }
        //else put in queue
        else {
          stack.push([x, y]);
        }
      }
      await new Promise((r) => setTimeout(r, speed));
    }
  }
  async breadthFirstSearch(queue, speed) {
    let dy = [-1, 0, 1, 0];
    let dx = [0, 1, 0, -1];

    while (queue.length) {
      let box = queue.shift();

      if (this.grid[box[1]][box[0]].isVisited) {
        continue;
      }

      this.updateWithRebuild(box[0], box[1], false, true);

      if (this.stateManager.isDestination(box)) {
        break;
      }

      for (let i = 0; i < 4; i++) {
        let x = box[0] + dx[i];
        let y = box[1] + dy[i];

        //check if off the grid
        if (x < 0 || y < 0 || x > 39 || y > 19) {
          continue;
        }
        //check if wall
        else if (this.grid[y][x].isWall) {
          continue;
        }
        //else put in queue
        else {
          queue.push([x, y]);
        }
      }
      await new Promise((r) => setTimeout(r, speed));
    }
  }
}
