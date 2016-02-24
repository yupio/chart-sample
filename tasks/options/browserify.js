module.exports = {
  options: {
    debug: true,
  },
  source_example: {
    dest: '<%= pkg.config.buildDir %>js/main.js',
    src: 'example/src/scripts/main.js',
    options: {
      debug: true,
      sourceMapRoot: 'main'
    },
  },
  vendor_example: {
    dest: '<%= pkg.config.buildDir %>js/vendor.js',
    src: 'example/src/scripts/vendor.js'
  },
  components_example: {
    dest: "<%= pkg.config.buildDir %>js/components.js",
    src: 'example/src/scripts/components.js'
  }
};
