(function (app) {
  'use strict';

  app.registerModule('me', ['core']);
  app.registerModule('me.routes', ['ui.router', 'core.routes']);
}(ApplicationConfiguration));

