(function () {
  'use strict';

  angular
    .module('canvas')
    .controller('CanvasController', CanvasController);

  CanvasController.$inject = ['$scope', 'Authentication', 'canvasService'];

  function CanvasController($scope, Authentication, canvasService) {
    var vm = this;
    vm.authentication = Authentication;

    $scope.square = {
      height: '100',
      width: '100'
    };
    $scope.$watch('square', function(newValue, oldValue) {
      if (newValue !== oldValue) {
        console.log('value changed: ' + JSON.stringify($scope.square));
        canvasService.draw(newValue.height, newValue.width);
      }
    }, true);
  }
}());
