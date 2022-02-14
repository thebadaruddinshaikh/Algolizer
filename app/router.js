import EmberRouter from '@ember/routing/router';
import config from 'algolizer/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('pathfinding', function () {});
  this.route('sorting', function () {});
});
