(function () {
  'use strict';

  // Customers controller
  angular.module('p5-test')
  // angular.module('p5-test', [
  //   'angular-p5'
  // ])
  .factory('exampleSketch', ['p5', function(p5) {
    return function(sketch) {
      // var widthNow = $("#exampleSketch").width();
      var r = sketch.random(0, 255);
      var g = sketch.random(0, 255);
      sketch.setup = function() {
        sketch.createCanvas(300, 270);
        sketch.noStroke();
      };
      sketch.draw = function() {
        var colorAngle = sketch.radians(sketch.frameCount);
        var colorVector = p5.Vector.fromAngle(colorAngle).setMag(255);
        sketch.background(r, g, colorVector.x);
        sketch.fill(r, g, colorVector.y);
        sketch.rect(0, 0, sketch.width / 2, sketch.height);

        sketch.fill(255, 255, 0, 120);
        sketch.ellipse(sketch.mouseX, sketch.mouseY, 80, 80);
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
