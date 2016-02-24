'use strict';

// # Chart sample
angular.module('chartSample').directive('chartSamplePlot', [
  function () {
    return {
      scope: {
        width: '=chartSamplePlotWidth',
        height: '=chartSamplePlotHeight', 
        chartObject: '=chartSamplePlotChartObject'
      },
      replace: false,
      require: '^chartSample',
      templateUrl: 'partials/chartSamplePlot.html',
      link: function(scope, element, attrs, ctrl) {
        var width = scope.width || 500;
        var height = scope.height || 250;
        element.css('width', width + 'px');
        element.css('height', height + 'px');
      }
    };
  }
]);
