(function () {
  'use strict';

  angular
    .module('canvas')
    .factory('canvasService', function() {
      var registry = {};

      var squareDrawer = {
        /**
         * draw the square on the canvas
         */
        draw: function(height, width) {
          console.log('square to draw: ' + height + 'x' + width);

          var canvas = document.getElementById('canvas');
          if (canvas.getContext) {
            console.log('drawing');
            var ctx = canvas.getContext('2d');
            // clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillRect(0, 0, width, height);
          }
        }
      };
      return squareDrawer;
    });
}());
