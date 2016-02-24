'use strict';

// ## Module definition
// Define our apps module and an array of other required modules.

angular.module('example', ['ngRoute', 'chartSample']);

// ## Source Requires
// Our apps required files. Any third-party libraries should be required into
// `vendor.coffee` instead of here. Also note, that when you use a Yeoman
// subgenerator a `require` for the created file will be automatically appended
// here. It's best not to modify this file too much beyone this point because of
// that.

require('./config/env');
require('./config/routes');
require('./config/debugger');
require('./templates');
require('./controllers/MainController.js');
require('./controllers/HomeController.js');
