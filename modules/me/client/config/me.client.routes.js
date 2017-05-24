(function () {
  'use strict';

  angular
    .module('me.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('me', {
        url: '/me',
        templateUrl: 'modules/me/client/views/me.client.view.html',
        controller: 'MeController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Yo'
        }
      });
  }
}());
