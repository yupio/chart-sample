module.exports = {
  example: {
    options: {
      hostname: 'localhost',
      port: 8080,
      keepalive: true,
      livereload: true,
      base: '<%= pkg.config.buildDir %>'
    }
  }
};
