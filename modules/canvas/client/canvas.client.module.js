(function (app) {
  'use strict';

  app.registerModule('canvas', ['core']);
  app.registerModule('canvas.routes', ['ui.router', 'core.routes']);
}(ApplicationConfiguration));

