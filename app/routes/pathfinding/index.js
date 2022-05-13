import Route from '@ember/routing/route';

export default class PathfindingIndexRoute extends Route {
  modelGrid = [];

  model() {
    for (let y = 0; y < 20; y++) {
      let tempArr = [];
      for (let x = 0; x < 40; x++) {
        tempArr.push({
          isWall: false,
          isVisited: false,
          isPath: false,
        });
      }
      this.modelGrid[y] = tempArr;
    }
    return this.modelGrid;
  }
  setupController(controller, model) {
    super.setupController(controller, model);
    this.controllerFor('pathfinding.index').set('grid', model);
  }
}
