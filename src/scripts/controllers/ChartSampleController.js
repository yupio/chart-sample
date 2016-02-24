'use strict';

// # Chart Sample Controller

function ChartSampleController () {
  this.chartObject = {};
  
  this.chartObject.type = 'PieChart';
  
  this.items = [{
      name: 'HTML/CSS',
      count: 10
    },
    {
      name: 'JavaScript',
      count: 8
    },
    {
      name: 'Python',
      count: 5
    },
    {
      name: 'Java',
      count: 2
    },{
      name: 'PHP',
      count: 2
    }
  ];

  this.chartTitle = 'Programming Languages';

  this.updateChart();  

  this.pieHole = this.pieHole || 0.4;
}

ChartSampleController.prototype.addField = function () {
  this.items.push({ name: '', count:''});
};

ChartSampleController.prototype.removeField = function (index) {
  this.items.splice(index, 1);
  //Need to show at least one field
  if (this.items.length === 0) {
    this.addField();
  }};

ChartSampleController.prototype.clearChart = function () {
  this.items = [];
  this.chartTitle = null;
  this.addField();
  this.updateChart();
};

ChartSampleController.prototype.updateChart = function () {
    var rows = [];
    if (this.items.length > 0) {
      angular.forEach(this.items, function(item, index) {
        var row = {c: [
          {v: item.name},
          {v: item.count},
        ]};
        rows.push(row);
      });
      var cols = [
          {id: 'n', label: 'Names', type: 'string'},
          {id: 'c', label: 'Counts', type: 'number'}
      ];

      this.chartObject.data = {'cols': cols,
        'rows': rows
      };
    }

    this.chartObject.options = {
      'pieHole': this.pieHole,
      'title': this.chartTitle
    };
};

ChartSampleController.$inject = [];

angular.module('chartSample').controller('ChartSampleController', ChartSampleController);
