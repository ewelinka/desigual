(function (app) {
  'use strict';

  app.registerModule('politics', ['core']);
  app.registerModule('politics.routes', ['ui.router', 'core.routes']);
}(ApplicationConfiguration));

