(function () {
  'use strict';

  angular
    .module('konva')
    .controller('KonvaController', KonvaController);

  KonvaController.$inject = ['$scope', 'Authentication'];

  function KonvaController($scope, Authentication) {
    var vm = this;
    vm.authentication = Authentication;
    test2();

    function test() {
      var width = document.getElementById("container").offsetWidth; //TODO not width of window but of column  $("#postanad").width(). o document.getElementById("mydiv").offsetWidth

      var height = window.innerHeight;
      var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height
      });
      var layer = new Konva.Layer();
      /*
      * leave center point positioned
      * at the default which is the top left
      * corner of the rectangle
      */
      var blueRect = new Konva.Rect({
        x: 50,
        y: 75,
        width: 100,
        height: 50,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4
      });
      layer.add(blueRect);
      stage.add(layer);
      // one revolution per 4 seconds
      var angularSpeed = 90;
      var anim = new Konva.Animation(function(frame) {
        var angleDiff = frame.timeDiff * angularSpeed / 1000;
        blueRect.rotate(angleDiff);
      }, layer);
      anim.start();
    }

    function test2() {
      // console.log($("#container").width());
     // console.log( document.getElementById("container").offsetWidth);

      var stage = new Konva.Stage({
        container: 'container',
        width: document.getElementById("container").clientWidth,
        height: window.innerHeight
      });

      // add canvas element
      var layer = new Konva.Layer();
      stage.add(layer);

      // create shape
      var box = new Konva.Rect({
        x: 50,
        y: 50,
        width: 100,
        height: 50,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true
      });
      layer.add(box);

      layer.draw();

      // add cursor styling
      box.on('mouseover', function() {
        document.body.style.cursor = 'pointer';
      });
      box.on('mouseout', function() {
        document.body.style.cursor = 'default';
      });

      // var angularSpeed = 90;
      // var anim = new Konva.Animation(function(frame) {
      //   var angleDiff = frame.timeDiff * angularSpeed / 1000;
      //   box.rotate(angleDiff);
      // }, layer);
      // anim.start();
    }

  }
}());
