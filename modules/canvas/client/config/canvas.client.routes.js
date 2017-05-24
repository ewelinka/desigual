(function () {
  'use strict';

  angular
    .module('canvas.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('canvas', {
        url: '/canvas',
        templateUrl: 'modules/canvas/client/views/canvas.client.view.html',
        controller: 'CanvasController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Canvas'
        }
      });
  }
}());
