(function () {
  'use strict';

  angular
    .module('konva.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('konva', {
        url: '/konva',
        templateUrl: 'modules/konva/client/views/konva.client.view.html',
        controller: 'KonvaController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Konva'
        }
      });
  }
}());
