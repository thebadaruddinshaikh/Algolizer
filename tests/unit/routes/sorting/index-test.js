import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | sorting/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:sorting/index');
    assert.ok(route);
  });
});
