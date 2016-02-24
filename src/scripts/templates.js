angular.module('chartSample').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('partials/chartSample.html',
    "<div class=\"row\"><div class=\"col-lg-6\"><div chart-sample-plot=\"\" chart-sample-plot-width=\"chartSampleCtrl.width\" chart-sample-plot-height=\"chartSampleCtrl.height\" chart-sample-plot-chart-object=\"chartSampleCtrl.chartObject\" class=\"div\"></div></div><div class=\"col-lg-6\"></div></div><div class=\"row\"><div class=\"col-lg-6\"><div class=\"form-group\"><label>Chart Title</label><input type=\"text\" ng-model=\"chartSampleCtrl.chartTitle\" class=\"form-control\"></div></div><div class=\"col-lg-6\"></div></div><div ng-repeat=\"item in chartSampleCtrl.items\" class=\"form-inline\"><div class=\"form-group\"><label>Name</label><input type=\"text\" ng-model=\"item.name\"></div><div class=\"form-group\"><label>Count</label><input type=\"number\" ng-model=\"item.count\"></div><div ng-click=\"chartSampleCtrl.removeField($index)\" class=\"glyphicon glyphicon-minus\"></div></div><div class=\"row\"><div class=\"col-lg-12\"><button ng-click=\"chartSampleCtrl.updateChart()\" class=\"margin-4\">Update</button><button ng-click=\"chartSampleCtrl.clearChart()\" class=\"margin-4\">Clear</button><div ng-click=\"chartSampleCtrl.addField()\" class=\"glyphicon glyphicon-plus margin-4\"> </div><span>Add Row</span></div></div>"
  );


  $templateCache.put('partials/chartSamplePlot.html',
    "<div google-chart chart=\"chartObject\" class=\"googleChart\"></div>"
  );

}]);
