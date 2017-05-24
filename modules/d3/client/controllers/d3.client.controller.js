(function () {
  'use strict';

  angular
    .module('d3')
    .controller('D3Controller', D3Controller);

  D3Controller.$inject = ['$scope', 'Authentication'];

  function D3Controller($scope, Authentication) {
    var vm = this;
    vm.authentication = Authentication;
    test2();

    function test() {
      console.log('TEST D3');
      var sampleSVG = d3.select('#viz')
        .append('svg')
        .attr('width', 100)
        .attr('height', 100);

      sampleSVG.append('circle')
        .style('stroke', 'gray')
        .style('fill', 'white')
        .attr('r', 40)
        .attr('cx', 50)
        .attr('cy', 50)
        .on('mouseover', function() {d3.select(this).style('fill', 'aliceblue');})
        .on('mouseout', function() {d3.select(this).style('fill', 'white');});
    }

    function test2() {
      const colorMap = d3.interpolateRgb(
        d3.rgb('#d6e685'),
        d3.rgb('#1e6823')
      )

      d3.select('#viz')
        .selectAll("div")
        .data([.2, .4, 0, 0, .13, .92])
        .enter()
        .append("div")
        .style("background-color", (d)=> {
          return d == 0 ? '#eee' : colorMap(d)
        })
    }
  }
}());
