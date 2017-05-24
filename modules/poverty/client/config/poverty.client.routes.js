(function () {
  'use strict';

  angular
    .module('poverty.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('poverty', {
        url: '/poverty',
        templateUrl: 'modules/poverty/client/views/poverty.client.view.html',
        controller: 'PovertyController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Pobreza'
        }
      });
  }
}());
