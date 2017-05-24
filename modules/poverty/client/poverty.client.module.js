(function (app) {
  'use strict';

  app.registerModule('poverty', ['core']);
  app.registerModule('poverty.routes', ['ui.router', 'core.routes']);
}(ApplicationConfiguration));

