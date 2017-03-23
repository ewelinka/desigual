(function () {
  'use strict';

  angular
    .module('p5-test')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Test p5',
      state: 'p5.show',
      roles: ['*']
    });
  }
}());
