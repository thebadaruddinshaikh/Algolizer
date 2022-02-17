import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class PathfindingIndexController extends Controller {
  @service('path-finding-state-manager') dragState;

  @tracked grid = this.model;

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

  @action
  onChangeHandler(pos, wall, visited) {
    this.updateWithoutRebuild(pos[0], pos[1], wall, visited);
  }

  @action
  async visualize() {
    this.dragState.underProgramControl = true;

    //call for DFS
    let stack = [];
    stack.push(this.dragState.source);
    await this.depthFirstSearch(stack);

    //call for BFS
    // let queue = [];
    // queue.push(this.dragState.source);
    // await this.breadthFirstSearch(queue);

    this.dragState.underProgramControl = false;
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

  async depthFirstSearch(stack) {
    let dy = [-1, 0, 1, 0];
    let dx = [0, 1, 0, -1];

    while (stack.length) {
      let box = stack.pop();

      if (this.grid[box[1]][box[0]].isVisited) {
        continue;
      }
      this.updateWithRebuild(box[0], box[1], false, true);

      if (this.dragState.isDestination(box)) {
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
      await new Promise((r) => setTimeout(r, 100));
    }
  }
  async breadthFirstSearch(queue) {
    let dy = [-1, 0, 1, 0];
    let dx = [0, 1, 0, -1];

    while (queue.length) {
      let box = queue.shift();

      if (this.grid[box[1]][box[0]].isVisited) {
        continue;
      }

      this.updateWithRebuild(box[0], box[1], false, true);

      if (this.dragState.isDestination(box)) {
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
      await new Promise((r) => setTimeout(r, 5));
    }
  }
}
