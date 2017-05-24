(function () {
  'use strict';

  angular
    .module('poverty')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Pobreza',
      state: 'poverty',
      roles: ['*'],
      position: 3
    });
  }
}());
