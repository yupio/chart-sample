'use strict';
describe('Directive: chartSample', function () {
  var scope;
  var $compile;

  beforeEach(angular.mock.module('chartSample'));

  beforeEach(inject(function($injector) {
    $compile = $injector.get('$compile');
    scope    = $injector.get('$rootScope').$new();
  }));

  describe('default', function() {
    var element;
    var controller;
    var template = [
     '<div chart-sample=""',
      '  chart-sample-width="500"',
      '  chart-sample-height="230"',
      '  chart-sample-pie-hole="0.3"',
      '  >',
      '</div>'
    ].join('');

    beforeEach(function () {
      element = angular.element(template);
      element = $compile(element)(scope);
      scope.$apply();
      controller = element.controller('chartSample');
    });

    afterEach(function () {
      scope.$destroy();
    });

    it('chart default overwritten by scope', function () {
      expect(controller.width).toBe(500);
      expect(controller.height).toBe(230);
      expect(controller.pieHole).toBe(0.3);
    });
  });
});
