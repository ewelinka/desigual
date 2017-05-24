(function () {
  'use strict';

  angular
    .module('d3.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('d3', {
        url: '/d3',
        templateUrl: 'modules/d3/client/views/d3.client.view.html',
        controller: 'D3Controller',
        controllerAs: 'vm',
        data: {
          pageTitle: 'D3'
        }
      });
  }
}());
