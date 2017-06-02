(function () {
  'use strict';

  angular
    .module('inequality')
    .controller('InequalityController', InequalityController);

  InequalityController.$inject = ['$scope', 'Authentication'];

  function InequalityController($scope, Authentication) {
    var vm = this;
    vm.authentication = Authentication;
    test();

    function test() {
      var w = 1200;
      var h = 1000;
      var defaultFill = "#aaa";
      var deptsJson = "modules/inequality/client/data/uy-all.json";
      var deptsAdjust = {"scaleXY": 0.05, "shiftx": 300, "shifty":500, "flipx":1, "flipy": -1};

      var zoneJson = "modules/inequality/client/data/barrios.geojson";
      // var zoneAdjust = {"scaleXY": 35, "shiftx": -1100, "shifty":-1100, "flipx":-1, "flipy": -1};
      var zoneAdjust = {"scaleXY": 3270, "shiftx": 184500, "shifty":-113500, "flipx":1, "flipy": -1};

      var nowJson = deptsJson;
      var nowAdjusts = deptsAdjust;

      //Define map projection
      //var projection = d3.geoMercator()
                     //.scale(100)
                      // .scale(2500)
                      //.translate([2800 , -1300])

      //Define path generator
      var path = d3.geoPath()
                   .projection(scale(nowAdjusts.scaleXY,nowAdjusts.shiftx,nowAdjusts.shifty,nowAdjusts.flipx,nowAdjusts.flipy));

      function scale (scaleFactor,shiftX,shiftY,flipx,flipy) {
            return d3.geoTransform({
                point: function(x, y) {
                    this.stream.point(flipx * x * scaleFactor+shiftX, flipy * y  * scaleFactor+shiftY);
                }
            });
        }

      //Access SVG element
      var svg = d3.select("#vizInequality")
                  .attr("width", w)
                  .attr("height", h);

      d3.json(nowJson, function(error, uy) {
        // if (error) return console.error(error);
        // console.log(uy.features);

        svg.selectAll("path")
          .data(uy.features)
          .enter().append("path")
            // .attr("d", d3.geoPath())
            .attr("d", path)
            .attr("stroke", "black")
            .attr("stroke-width", "1px")
            .attr("fill",defaultFill)
            .on("mouseover", mouseOver)
            .on("mouseout", mouseOut);
      });

      function mouseOver(d){
        d3.select(this)
          .attr("fill", "orange");

        // d3.select(this).transition.attrTween("fill", function() {
        //   return d3.interpolateRgb(this.getAttribute("fill"), "orange");
        // });

        d3.select("#tooltip").transition().duration(200).style("opacity", .9);  
        
        d3.select("#tooltip").html(tooltipHtml(d.properties.name))  
          .style("left", (d3.event.pageX) + "px")     
          .style("top", (d3.event.pageY - 28) + "px");
      }

      function mouseOut(){
         d3.select(this)
          .attr("fill", defaultFill);
        d3.select("#tooltip").transition().duration(500).style("opacity", 0);      
      }

      function tooltipHtml(n){	/* function to create html content string in tooltip div. */
        return "<h4>"+n+"</h4><table>"+
          "<tr><td>Algun numero</td><td>"+(100)+"</td></tr>"+
          "</table>";
      }

     
    }
  }
}());
