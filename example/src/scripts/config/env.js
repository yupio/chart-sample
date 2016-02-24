'use strict';

// This is a local configuration only.
// This file is overwritten automatically by ansible on stage and prod.
angular.module('example')
  .value('SkipBetaCheck', true);
