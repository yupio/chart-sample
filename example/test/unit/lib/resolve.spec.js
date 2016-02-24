'use strict';

describe('Resolve', function () {
  var resolve = require('../../../src/scripts/lib/resolve'),
      $rootScope,
      $q;

  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get('$rootScope');
    $q         = $injector.get('$q');
  }));

  beforeEach(function () {
    //===== yeoman resolver hook =====//

    //===== yeoman spy hook =====//
  });

  //===== yeoman describe hook =====//
});
