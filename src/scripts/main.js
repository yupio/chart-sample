'use strict';

// ## Vendor Requires
// Require any third-party libaries here.
require('angular-google-chart');
require('angular-ui-bootstrap');
// ## Module definition
// Define our components module and an array of other required modules.

angular.module('chartSample', ['googlechart', 'ui.bootstrap']);

// ## Source Requires
// Our components required files. Also note, that when you use a Yeoman
// subgenerator a `require` for the created file will be automatically appended
// here. It's best not to modify this file too much beyone this point because of
// that.

require('./templates');
require('./controllers/ChartSampleController.js');
require('./directives/chartSample.js');
require('./directives/chartSamplePlot.js');