(function () {
  'use strict';

  angular
    .module('me')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Yo',
      state: 'me',
      roles: ['*'],
      position: 1
    });
  }
}());
