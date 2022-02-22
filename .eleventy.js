module.exports = function(eleventyConfig) {

  // eleventyConfig.addWatchTarget("./src/scss/");
  // eleventyConfig.addPassthroughCopy({"./src/assets/img/": "img"});
  // eleventyConfig.addPassthroughCopy({"./src/assets/fonts/": "fonts"});
  eleventyConfig.addPassthroughCopy({"./client-side-compiled/**/*": "scripts"});
  // eleventyConfig.addPassthroughCopy({"./src/copy-to-root/*": "."});

  // eleventyConfig.addPassthroughCopy({"./node_modules/swiper/*swiper-bundle.min.js": "scripts/libs"});

  // eleventyConfig.setUseGitIgnore(false);

  // eleventyConfig.addFilter('log', value => {
  //   console.log(value)
  // });

  // Return your Object options:
  return {
    dir: {
      input: "src/pages",
    }
  }
};