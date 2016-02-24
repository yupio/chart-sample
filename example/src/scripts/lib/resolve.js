'use strict';

// # Resolve

// These functions are used in routes.js to setup each route
// with the necessary data it needs.

// The comments for `yeoman route hook` and `yeoman export hook` are necessary
// for adding new routes with yeoman generators. Please do not remove them.

var resolvers = {};
//===== yeoman resolver hook =====//

module.exports = {};

module.exports.home = {
  routeDeps: ['$injector', function($injector) {
    var deps = {};
    return resolvers.login($injector, deps).then(function (deps) {
      
    });
  }]
};
//===== yeoman export hook =====//

// Added here for test purposes
module.exports.resolvers = resolvers;
