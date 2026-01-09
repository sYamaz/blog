export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addGlobalData("year", () => {
    return new Date().getFullYear();
  });
  // Get only content that matches a tag
  eleventyConfig.addCollection("sortedpost", function (collectionsApi) {
  	return collectionsApi.getFilteredByTag("post").sort((a, b) => {
        return b.date - a.date;
    });
  });
  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
}