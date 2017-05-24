(function () {
  'use strict';

  angular
    .module('politics')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Politicas publicas',
      state: 'politics',
      roles: ['*'],
      position: 4
    });
  }
}());
