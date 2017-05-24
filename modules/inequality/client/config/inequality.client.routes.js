(function () {
  'use strict';

  angular
    .module('inequality.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('inequality', {
        url: '/inequality',
        templateUrl: 'modules/inequality/client/views/inequality.client.view.html',
        controller: 'InequalityController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Desigualdad'
        }
      });
  }
}());
