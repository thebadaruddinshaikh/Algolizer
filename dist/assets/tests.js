'use strict';

define("algolizer/tests/integration/components/box-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | box', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Box />
      */
      {
        "id": "2C8+DhfK",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"box\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Box>
              template block text
            </Box>
          
      */
      {
        "id": "OB7gvamN",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"box\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("algolizer/tests/integration/components/pathfinding/box-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | pathfinding/box', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Pathfinding::Box />
      */
      {
        "id": "LerVkqWM",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"pathfinding/box\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Pathfinding::Box>
              template block text
            </Pathfinding::Box>
          
      */
      {
        "id": "uQgTXLqh",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"pathfinding/box\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("algolizer/tests/integration/components/sorting/bar-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | sorting/bar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Sorting::Bar />
      */
      {
        "id": "jaI4inlU",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"sorting/bar\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Sorting::Bar>
              template block text
            </Sorting::Bar>
          
      */
      {
        "id": "JgUMlYUR",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"sorting/bar\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("algolizer/tests/integration/modifiers/drag-manager-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Modifier | drag-manager', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <div {{drag-manager}}></div>
      */
      {
        "id": "nacUvdeY",
        "block": "[[[11,0],[4,[38,0],null,null],[12],[13]],[],false,[\"drag-manager\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.ok(true);
    });
  });
});
define("algolizer/tests/integration/modifiers/set-dimensions", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Modifier | set-height', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <div {{set-height}}></div>
      */
      {
        "id": "CllNKSTG",
        "block": "[[[11,0],[4,[38,0],null,null],[12],[13]],[],false,[\"set-height\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.ok(true);
    });
  });
});
define("algolizer/tests/test-helper", ["algolizer/app", "algolizer/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("algolizer/tests/unit/controllers/pathfinding/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | pathfinding/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:pathfinding/index');
      assert.ok(controller);
    });
  });
});
define("algolizer/tests/unit/controllers/sorting/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | sorting/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:sorting/index');
      assert.ok(controller);
    });
  });
});
define("algolizer/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("algolizer/tests/unit/routes/pathfinding/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | pathfinding/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:pathfinding/index');
      assert.ok(route);
    });
  });
});
define("algolizer/tests/unit/routes/sorting/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | sorting/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:sorting/index');
      assert.ok(route);
    });
  });
});
define("algolizer/tests/unit/services/drag-state-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | drag-state', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:drag-state');
      assert.ok(service);
    });
  });
});
define("algolizer/tests/unit/services/sorting-state-manager-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | sorting-state-manager', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:sorting-state-manager');
      assert.ok(service);
    });
  });
});
define('algolizer/config/environment', [], function() {
  var prefix = 'algolizer';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('algolizer/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
