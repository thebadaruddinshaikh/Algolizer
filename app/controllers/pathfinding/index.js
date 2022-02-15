import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class PathfindingIndexController extends Controller {
  @service('drag-state') dragState;

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
  find() {
    let stack = [];
    stack.push(this.dragState.source);
    this.depthFirstSearch(stack);
  }

  async depthFirstSearch(stack) {
    let dy = [-1, 0, 1, 0];
    let dx = [0, 1, 0, -1];

    while (stack.length) {
      let box = stack.pop();

      if (
        this.grid[box[1]][box[0]].isWall ||
        this.grid[box[1]][box[0]].isVisited
      ) {
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
        if (this.grid[y][x].isWall || this.grid[y][x].isVisited) {
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
  async breadthFirstSearch() {}
}
