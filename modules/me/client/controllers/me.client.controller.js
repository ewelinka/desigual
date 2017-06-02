(function () {
  'use strict';

  angular
    .module('me')
    .controller('MeController', MeController);

  MeController.$inject = ['$scope', 'Authentication'];

  function MeController($scope, Authentication) {
    var vm = this;
    vm.authentication = Authentication;
    var totalOribitCircles = 5;
    var circleRadio = 80; //radio of small circle
    var circlesDistanceRadio = 220; //distance between central circle and small ones
    var imgsPath="modules/core/client/img/content/" //where our imgs are
    var imgsExt=".png"; 
    var idsData = [
      "me", "skin", "age", "department", "gender", "books" // ids for img refs
    ]

     var circlesData = [
      "skin", "age", "department", "gender", "books" // imgs names for orbital circles
    ]
    var svgW = 730,
        svgH = 600;

    test();

    function test() {

      var meSVG = d3.select("#vizMe")
        .attr("width",svgW).attr("height",svgH);

      // here we append patterns for central circle + orbit circles
      var meDefs = meSVG.append('defs');
      meDefs.selectAll("pattern")
        .data(idsData).enter()
			    .append("pattern")
          .attr("id",function(d){return d;})
          .attr("height", "100%")
          .attr("width", "100%")
          .attr("patternContentUnits", "objectBoundingBox")
          .append("image")
            .attr("xlink:href", function(d){return imgsPath+d+imgsExt})
            .attr("preserveAspectRatio", "none")
            .attr("width", "1")
            .attr("height", "1");

      //here we append "me"-circle
      meSVG.append("circle")
        .attr("cx", svgW/2)
        .attr("cy", svgH/2)
        .attr("r", "138")
        .attr("fill", "url(#me)")

      // here we appand orbit circles
      var orbitalCircles = meSVG.selectAll("circles").data(circlesData)
        .enter().append("svg:circle")
        .attr("cx",function(d,i){
          return getX(i);
        })
        .attr("cy",function(d,i){
          return getY(i);
        })
        .attr("fill", function(d){
          return "url(#"+d+")";
        })
        .attr('pointer-events', 'all')
        .attr('stroke','black')
        .attr('stroke-width',0)
        .attr("class", "orbit-circle")
        .attr("r", 0)
        
      orbitalCircles.transition()
        .delay(1500)
        .duration(1000)
        .ease(d3.easeLinear)
        .attr("r", 80);

      orbitalCircles 
        .on('mouseover',function() {
          d3.select(this)
            .transition()
            .duration(500)
            .attr("r", 80)
            .attr('stroke-width',5)
        })
        .on('mouseout',function () {
          d3.select(this)
            .transition()
            .duration(500)
            .attr("r", 80)
            .attr('stroke-width',0)
        })

                   
    }

    function getX(idx){
      return svgW/2 + circlesDistanceRadio * Math.cos(2*Math.PI*idx/circlesData.length);
    }

    function getY(idx){
      return svgH/2 + circlesDistanceRadio * Math.sin(2*Math.PI*idx/circlesData.length);
    }

    
    
  }
}());
