'use strict';

describe('Controller: ChartSampleController', function() {
  var controller;
  var scope;
  var element;

  beforeEach(angular.mock.module('chartSample'));

  beforeEach(inject(function($injector, $rootScope, $controller) {
    scope   = $injector.get('$rootScope').$new();
    controller = $controller('ChartSampleController');
    element = {};
  }));

  it('is an object', function () {
    expect(angular.isObject(controller)).toBe(true);
  });

  it('add new field', function () {
  	expect(controller.items.length).toBe(5);
    controller.addField();
    expect(controller.items.length).toBe(6);
  });

  it('remove a field', function () {
  	expect(controller.items.length).toBe(5);
    controller.removeField(2);
  	expect(controller.items.length).toBe(4);
  });

  it('at least have one field', function () {
  	controller.items = [{}];
  	expect(controller.items.length).toBe(1);
  	controller.removeField(0);
  	expect(controller.items.length).toBe(1);
  });

  it('clearChart', function() {
  	spyOn(controller, 'updateChart');
  	expect(controller.items.length).toBe(5);
  	expect(controller.chartTitle).toBe('Programming Languages');
    controller.clearChart(2);
  	expect(controller.items.length).toBe(1);
  	expect(controller.chartTitle).toBe(null);
  	expect(controller.updateChart).toHaveBeenCalled();
  });

  describe('updateChart', function() {
	  it('update rows', function() {
		  expect(controller.chartObject.data.rows.length).toBe(5);
  	  controller.items = [{
		      name: 'test',
		      count: 1
		    },
		    {
		      name: 'test2',
		      count: 2
		    }
		  ];
		  controller.updateChart();
		  expect(controller.chartObject.data.rows.length).toBe(2);
	  });

	  it('update options', function() {
  	  expect(controller.chartTitle).toBe('Programming Languages');
  	  expect(controller.pieHole).toBe(0.4);
  	  controller.pieHole = 0;
      controller.chartTitle = 'test';
	    controller.updateChart();
  	  expect(controller.chartTitle).toBe('test');
  	  expect(controller.pieHole).toBe(0);
		});

	});
});