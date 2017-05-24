(function (app) {
  'use strict';

  app.registerModule('d3', ['core']);
  app.registerModule('d3.routes', ['ui.router', 'core.routes']);
}(ApplicationConfiguration));

