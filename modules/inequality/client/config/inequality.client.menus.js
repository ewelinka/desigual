(function () {
  'use strict';

  angular
    .module('inequality')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Desigualdad',
      state: 'inequality',
      roles: ['*'],
      position: 2
    });
  }
}());
