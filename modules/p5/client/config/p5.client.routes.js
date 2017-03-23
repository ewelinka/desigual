(function () {
  'use strict';

  angular
    .module('p5-test')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('p5', {
        abstract: true,
        url: '/p5',
        template: '<ui-view/>'
      })
      .state('p5.show', {
        url: '/show',
        templateUrl: 'modules/p5/client/views/p5.client.view.html',
        controller: 'P5Controller',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Test P5'
        }
      });
  }
}());
