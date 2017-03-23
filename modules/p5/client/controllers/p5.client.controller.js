(function () {
  'use strict';

  // Customers controller
  angular.module('p5-test')
  // angular.module('p5-test', [
  //   'angular-p5'
  // ])
  .factory('exampleSketch', ['p5', function(p5) {
    return function(p) {
      var r = p.random(0, 255);
      var g = p.random(0, 255);
      p.setup = function() {
        p.createCanvas(480, 270);
        p.noStroke();
      };
      p.draw = function() {
        var colorAngle = p.radians(p.frameCount);
        var colorVector = p5.Vector.fromAngle(colorAngle).setMag(255);
        p.background(r, g, colorVector.x);
        p.fill(r, g, colorVector.y);
        p.rect(0, 0, p.width / 2, p.height);
      };
    };
  }])
  .controller('P5Controller', P5Controller);

  P5Controller.$inject = ['$scope', 'Authentication'];

  function P5Controller($scope, Authentication) {
    var vm = this;
    vm.authentication = Authentication;
  }
}());
