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
      var w = 900;
      var h = 600;
      var defaultFill = "#aaa";

      //var d3Geo = require("d3-geo");

      //Define map projection
      //var projection = d3.geoMercator()
                     //.scale(100)
                      // .scale(2500)
                      //.translate([2800 , -1300])

      //admin_level_4.geojson
      // .scale(2500)
      // .translate([2800 , -1300])

      //Define path generator
      var path = d3.geoPath()
                   .projection(scale(0.05,300,500));

      function scale (scaleFactor,shiftX,shiftY) {
            return d3.geoTransform({
                point: function(x, y) {
                    this.stream.point(x * scaleFactor+shiftX, -y  * scaleFactor+shiftY);
                }
            });
        }

      //Access SVG element
      var svg = d3.select("#vizInequality")
                  .attr("width", w)
                  .attr("height", h);

      d3.json("modules/inequality/client/data/uy-all.json", function(error, uy) {
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
