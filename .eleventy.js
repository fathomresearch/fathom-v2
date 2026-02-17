module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/CNAME");

  eleventyConfig.addCollection("caseStudy", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/case-studies/*.md");
  });

  return {
  dir: {
    input: "src",
    output: "public",
    includes: "_includes",
    data: "_data"
  },
  templateFormats: ["njk", "md", "html"],
  htmlTemplateEngine: "njk",
  markdownTemplateEngine: "njk"
};