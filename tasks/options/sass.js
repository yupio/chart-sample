module.exports = {
  main_example: {
    files: {
      '<%= pkg.config.buildDir %>css/app.css': 'example/src/styles/main.scss'
    },
    options: {
      compass: true
    }
  }
};
