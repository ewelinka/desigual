(function () {
  'use strict';

  angular
    .module('poverty')
    .controller('PovertyController', PovertyController);

  PovertyController.$inject = ['$scope', 'Authentication'];

  function PovertyController($scope, Authentication) {
    var vm = this;
    vm.authentication = Authentication;
  

    function test(){
      var data = [4, 8, 15, 16, 23, 42];
      var width = 960,
          height = 500;
      var barWidth = width / data.length;

      var y = d3.scaleLinear()
          .domain([0,d3.max(data)])
          .range([height,0]);

      var chart = d3.select("#poverty-chart")
          .attr("width", width)
          .attr("height", height);

      var bar = chart.selectAll("g")
          .data(data)
        .enter().append("g")
          .attr("transform", function(d, i) { return "translate(" + i * barWidth + ",0)"; });

      bar.append("rect")
        .attr("y", y)
        .attr("height", function(d) { return height - y(d); })
        .attr("width", barWidth - 1);
      
      bar.append("text")
        .attr("x", barWidth / 2)
        .attr("y", function(d) { return y(d) + 3; })
        .attr("dy", ".75em")
        .text(function(d) { return d; });
    }
  }
}());
