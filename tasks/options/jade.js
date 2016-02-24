module.exports = {
  component: {
    expand: true,
    cwd: 'src',
    src: ['**/*.jade'],
    ext: '.html',
    dest: 'tmp',
    options: {
      doctype: "html"
    }
  },
  views_example: {
    expand: true,
    cwd: 'example/src/views',
    src: ['**/*.jade'],
    ext: '.html',
    dest: 'tmp/example/views',
    options: {
      doctype: "html"
    }
  },
  partials_example: {
    expand: true,
    cwd: 'example/src/partials',
    src: ['**/*.jade'],
    ext: '.html',
    dest: 'tmp/example/partials',
    options: {
      doctype: "html"
    }
  },
  index_example: {
    files: {
      '<%= pkg.config.buildDir %>index.html': 'example/src/index.jade'
    },
    options: {
      data: {
        liveReloadPort: '<%= package.liveReloadPort %>',
        development: true
      }
    }
  }
};
