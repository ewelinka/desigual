(function (app) {
  'use strict';

  app.registerModule('konva', ['core']);
  app.registerModule('konva.routes', ['ui.router', 'core.routes']);
}(ApplicationConfiguration));

