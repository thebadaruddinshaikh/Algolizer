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
    this.stateManager.reset();
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
    if (!this.stateManager.underProgramControl) {
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
  }

  @action
  clearPath() {
    if (!this.stateManager.underProgramControl) {
      for (let y = 0; y < this.grid.length; y++) {
        for (let x = 0; x < this.grid[0].length; x++) {
          if (this.grid[y][x].isVisited || this.grid[y][x].isPath) {
            this.grid[y][x] = {
              isWall: false,
              isVisited: false,
              isPath: false,
            };
          }
        }
      }
      this.grid = [...this.grid];
    }
  }

  async updateWithRebuild(x, y, isWall, isVisited, isPath) {
    this.grid[y][x] = {
      isWall: isWall,
      isVisited: isVisited,
      isPath: isPath,
    };
    this.grid = [...this.grid];
  }

  updateWithoutRebuild(x, y, isWall, isVisited, isPath) {
    this.grid[y][x].isWall = isWall;
    this.grid[y][x].isVisited = isVisited;
    this.grid[y][x].isPath = isPath;
  }

  async depthFirstSearch(stack, speed) {
    //building the PrevNodeList
    let prevNodeList = [];
    for (let y = 0; y < 20; y++) {
      let tempArr = [];
      for (let x = 0; x < 40; x++) {
        tempArr.push([-1, -1]);
      }
      prevNodeList[y] = tempArr;
    }

    let dy = [-1, 0, 1, 0];
    let dx = [0, 1, 0, -1];

    while (stack.length) {
      let box = stack.pop();

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
        if (!this.grid[y][x].isVisited) {
          prevNodeList[y][x] = [...box];
          stack.push([x, y]);
          this.updateWithRebuild(x, y, false, true, false);
          await new Promise((r) => setTimeout(r, speed));
        }
        if (this.stateManager.isDestination([x, y])) {
          await this.buildPath(prevNodeList, this.stateManager.destination);
          return;
        }
      }
    }
  }

  async breadthFirstSearch(queue, speed) {
    //building the PrevNodeList
    let prevNodeList = [];
    for (let y = 0; y < 20; y++) {
      let tempArr = [];
      for (let x = 0; x < 40; x++) {
        tempArr.push([-1, -1]);
      }
      prevNodeList[y] = tempArr;
    }

    this.updateWithRebuild(queue[0][0], queue[0][1], false, true, false);

    //up, right, down, left
    let dy = [-1, 0, 1, 0];
    let dx = [0, 1, 0, -1];

    while (queue.length) {
      let box = queue.shift();

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
        if (!this.grid[y][x].isVisited) {
          prevNodeList[y][x] = [...box];
          queue.push([x, y]);
          this.updateWithRebuild(x, y, false, true, false);
          await new Promise((r) => setTimeout(r, speed));
        }
        if (this.stateManager.isDestination([x, y])) {
          await this.buildPath(prevNodeList, this.stateManager.destination);
          return;
        }
      }
    }
  }

  async buildPath(prevNodeList, destination) {
    let pathArray = [];
    let box = destination;
    while (!this.stateManager.isSource(box)) {
      this.updateWithRebuild(box[0], box[1], false, false, true);
      let prevNode = prevNodeList[box[1]][box[0]];
      pathArray.push(prevNode);
      box = prevNode;
      await new Promise((r) => setTimeout(r, 100));
    }
    this.updateWithRebuild(box[0], box[1], false, false, true);
  }
}
