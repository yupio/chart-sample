'use strict';

module.exports = {
  browserify_component: {
    src: [
      'tmp/views/**/*.html',
      'tmp/partials/**/*.html'
    ],
    dest: 'src/scripts/templates.js',
    options: {
      module: '<%= pkg.name %>',
      url: function (url) {
        return url.replace('tmp/', '');
      }
    }
  },
  browserify_example: {
    src: [
      'tmp/example/views/**/*.html',
      'tmp/example/partials/**/*.html'
    ],
    dest: 'example/src/scripts/templates.js',
    options: {
      module: 'example',
      url: function (url) {
        return url.replace('tmp/example/', '');
      }
    }
  }
};
