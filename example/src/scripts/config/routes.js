'use strict';

// # Routes

angular.module('example').config([
  '$routeProvider',
  function(
    $routeProvider
  ) {
    $routeProvider
      .when('/', {
        controller: 'HomeController',
        templateUrl: 'views/home.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
