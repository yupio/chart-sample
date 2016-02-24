'use strict';

// # Chart sample
angular.module('chartSample').directive('chartSample', [
  function () {
    return {
      scope: {
        pieHole: '=chartSamplePieHole',
        width: '=chartSampleWidth',
        height: '=chartSampleHeight'
      },
      replace: false,
      controller: 'ChartSampleController',
      controllerAs: 'chartSampleCtrl',
      bindToController: true,
      templateUrl: 'partials/chartSample.html',
      link: function(scope, element, attrs, ctrl) {
        ctrl.width = ctrl.width || 500;
        ctrl.height = ctrl.height || 250;
      }
    };
  }
]);
