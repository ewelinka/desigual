(function () {
  'use strict';

  angular
    .module('politics.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('politics', {
        url: '/politics',
        templateUrl: 'modules/politics/client/views/politics.client.view.html',
        controller: 'PoliticsController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Politicas publicas'
        }
      });
  }
}());
