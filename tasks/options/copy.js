module.exports = {
  assets: {
    cwd: "src/assets",
    expand: true,
    src: ["**"],
    dest: "<%= pkg.config.buildDir %>"
  }
};
