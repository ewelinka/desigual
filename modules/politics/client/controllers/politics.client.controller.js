(function () {
  'use strict';

  angular
    .module('politics')
    .controller('PoliticsController', PoliticsController);

  PoliticsController.$inject = ['$scope', 'Authentication'];

  function PoliticsController($scope, Authentication) {
    var vm = this;
    vm.authentication = Authentication;
    test();

    function test() {
      var svg = d3.select("svg"),
          width = +svg.attr("width"),
          height = +svg.attr("height"),
          radius = Math.min(width, height) / 2,
          g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      var color = d3.scaleOrdinal(["#5856d6", "#34aadc", "#4cd964", "#ff2d55", "#ff9500", "#ffcc00", "#8e8e93"]);

      var pie = d3.pie()
          .sort(null)
          .value(function(d) { return d.population; });

      var path = d3.arc()
          .outerRadius(radius - 10)
          .innerRadius(0);

      var label = d3.arc()
          .outerRadius(radius - 40)
          .innerRadius(radius - 40);

      d3.csv("modules/politics/client/data/data.csv", function(d) {
        d.population = +d.population;
        return d;
      }, function(error, data) {
        if (error) throw error;

        var arc = g.selectAll(".arc")
          .data(pie(data))
          .enter().append("g")
            .attr("class", "arc");

        arc.append("path")
            .attr("d", path)
            .attr("fill", function(d) { return color(d.data.age); });

        arc.append("text")
            .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
            .attr("dy", "0.35em")
            .text(function(d) { return d.data.age; });
      });
    }
  }
}());
