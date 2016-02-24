angular.module('example').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/home.html',
    "<div class=\"container\"><div class=\"row\"><div class=\"col--lg-12\"><h2>Chart Sample</h2><div chart-sample=\"\" chart-sample-width=\"600\" chart-sample-height=\"230\" chart-sample-pie-hole=\"0.3\"></div></div></div></div>"
  );

}]);
