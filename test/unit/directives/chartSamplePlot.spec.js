'use strict';
describe('Directive: chartSamplePlot', function () {
  var scope;
  var $compile;
  var chartSampleControllerMock;

  beforeEach(angular.mock.module('chartSample'));

  beforeEach(inject(function($injector) {
    $compile = $injector.get('$compile');
    scope    = $injector.get('$rootScope').$new();
  }));

  describe('default', function() {
    var element;
    // var controller;
    var template = [
      '<div chart-sample-mock="">',
      '  <div chart-sample-plot=""',
      '    chart-sample-plot-width="500"',
      '    chart-sample-plot-height="230"',
      '    chart-sample-plot-chart-object="chartObj"',
      '    >',
      '  </div>',
      '</div>'
    ].join('');

    beforeEach(function () {
      chartSampleControllerMock = {
      };

      element = angular.element(template);
      element.data('$chartSampleController', chartSampleControllerMock);
      element = $compile(element)(scope);
      scope.$apply();
    });

    afterEach(function () {
      scope.$destroy();
    });

    it('chart default overwritten by scope', function () {
      expect(element.find('div').css('width')).toBe('500px');
      expect(element.find('div').css('height')).toBe('230px');
    });
  });
});